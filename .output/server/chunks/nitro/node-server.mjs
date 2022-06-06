globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, createError, createApp, createRouter, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ohmyfetch';
import { createRouter as createRouter$1 } from 'radix3';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { createStorage } from 'unstorage';
import { withQuery, withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routes":{},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
function timingMiddleware(_req, res, next) {
  const start = globalTiming.start();
  const _end = res.end;
  res.end = (data, encoding, callback) => {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!res.headersSent) {
      res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(res, data, encoding, callback);
  };
  next();
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl;
    const _resolve = async () => {
      if (!pending[key]) {
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      return event.req.originalUrl || event.req.url;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event);
    const headers = event.res.getHeaders();
    headers.Etag = `W/"${hash(body)}"`;
    headers["Last-Modified"] = new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["Cache-Control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["Last-Modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(req, header, includes) {
  const value = req.headers[header];
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event.req, "accept", "application/json") || hasReqHeader(event.req, "user-agent", "curl/") || hasReqHeader(event.req, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Route Not Found" : "Internal Server Error");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.req.url,
    statusCode,
    statusMessage,
    message,
    description: "",
    data: _error.data
  };
  event.res.statusCode = errorObject.statusCode;
  event.res.statusMessage = errorObject.statusMessage;
  if (errorObject.statusCode !== 404) {
    console.error("[nuxt] [request error]", errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.res.setHeader("Content-Type", "application/json");
    event.res.end(JSON.stringify(errorObject));
    return;
  }
  const url = withQuery("/__nuxt_error", errorObject);
  const html = await $fetch(url).catch((error) => {
    console.error("[nitro] Error while generating error response", error);
    return errorObject.statusMessage;
  });
  event.res.setHeader("Content-Type", "text/html;charset=UTF-8");
  event.res.end(html);
});

const assets = {
  "/OGP.sketch": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"29b6f-Kujs+W+yh9QPqmLnfAgOLe+gl0g\"",
    "mtime": "2022-06-06T10:25:18.673Z",
    "path": "../public/OGP.sketch"
  },
  "/android-chrome-128x128.png": {
    "type": "image/png",
    "etag": "\"d4c-2F6pNnLypXefhZGtHNFCpftTJCU\"",
    "mtime": "2022-06-06T10:25:18.673Z",
    "path": "../public/android-chrome-128x128.png"
  },
  "/android-chrome-144x144.png": {
    "type": "image/png",
    "etag": "\"f54-WQhhRkZmHjqHATlDcJNcM/VoA64\"",
    "mtime": "2022-06-06T10:25:18.673Z",
    "path": "../public/android-chrome-144x144.png"
  },
  "/android-chrome-152x152.png": {
    "type": "image/png",
    "etag": "\"103a-TML0TH6K0hUS9bWBCRp1z57reZ0\"",
    "mtime": "2022-06-06T10:25:18.673Z",
    "path": "../public/android-chrome-152x152.png"
  },
  "/android-chrome-192x192.png": {
    "type": "image/png",
    "etag": "\"15c8-opNUMAj5HfTiBaG2CVNnf/CKbbU\"",
    "mtime": "2022-06-06T10:25:18.673Z",
    "path": "../public/android-chrome-192x192.png"
  },
  "/android-chrome-256x256.png": {
    "type": "image/png",
    "etag": "\"1ef1-ulWq9/CQiBkYny1uamc1DSzt7TU\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-256x256.png"
  },
  "/android-chrome-36x36.png": {
    "type": "image/png",
    "etag": "\"2d7-mqm9OS+DOt7OL/dH0BmShqa5iRo\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-36x36.png"
  },
  "/android-chrome-384x384.png": {
    "type": "image/png",
    "etag": "\"34c3-vUbQOwxvVleAEh0/m4hWnOZn/+0\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-384x384.png"
  },
  "/android-chrome-48x48.png": {
    "type": "image/png",
    "etag": "\"40d-8K42ahiu4lVPqwDQ3kGbpCHac3g\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-48x48.png"
  },
  "/android-chrome-512x512.png": {
    "type": "image/png",
    "etag": "\"4f1d-06Wk1dKkK1FOIx2YfXvbLf+wElA\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-512x512.png"
  },
  "/android-chrome-72x72.png": {
    "type": "image/png",
    "etag": "\"6a3-qMGTfxapCNKupPaj2YHxw5l9JB4\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-72x72.png"
  },
  "/android-chrome-96x96.png": {
    "type": "image/png",
    "etag": "\"991-FDfIkIj8yTQ00GN5mC7032UH0co\"",
    "mtime": "2022-06-06T10:25:18.672Z",
    "path": "../public/android-chrome-96x96.png"
  },
  "/apple-touch-icon-114x114-precomposed.png": {
    "type": "image/png",
    "etag": "\"b89-HKKEd1wmIjs5/22kY8K6TnUgjfQ\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-114x114-precomposed.png"
  },
  "/apple-touch-icon-114x114.png": {
    "type": "image/png",
    "etag": "\"b89-HKKEd1wmIjs5/22kY8K6TnUgjfQ\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-114x114.png"
  },
  "/apple-touch-icon-120x120-precomposed.png": {
    "type": "image/png",
    "etag": "\"c34-ftnUC1AOq507KVQTWMxicYn7gRg\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-120x120-precomposed.png"
  },
  "/apple-touch-icon-120x120.png": {
    "type": "image/png",
    "etag": "\"c34-ftnUC1AOq507KVQTWMxicYn7gRg\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-120x120.png"
  },
  "/apple-touch-icon-144x144-precomposed.png": {
    "type": "image/png",
    "etag": "\"f54-WQhhRkZmHjqHATlDcJNcM/VoA64\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-144x144-precomposed.png"
  },
  "/apple-touch-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"f54-WQhhRkZmHjqHATlDcJNcM/VoA64\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-144x144.png"
  },
  "/apple-touch-icon-152x152-precomposed.png": {
    "type": "image/png",
    "etag": "\"103a-TML0TH6K0hUS9bWBCRp1z57reZ0\"",
    "mtime": "2022-06-06T10:25:18.671Z",
    "path": "../public/apple-touch-icon-152x152-precomposed.png"
  },
  "/apple-touch-icon-152x152.png": {
    "type": "image/png",
    "etag": "\"103a-TML0TH6K0hUS9bWBCRp1z57reZ0\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-152x152.png"
  },
  "/apple-touch-icon-180x180-precomposed.png": {
    "type": "image/png",
    "etag": "\"13f1-6+WeKMP/IX8rMCBaKTQkvzRAW78\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-180x180-precomposed.png"
  },
  "/apple-touch-icon-180x180.png": {
    "type": "image/png",
    "etag": "\"13f1-6+WeKMP/IX8rMCBaKTQkvzRAW78\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-180x180.png"
  },
  "/apple-touch-icon-57x57-precomposed.png": {
    "type": "image/png",
    "etag": "\"501-nwWebwtXvyWLqxhFbD3gNLGICaI\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-57x57-precomposed.png"
  },
  "/apple-touch-icon-57x57.png": {
    "type": "image/png",
    "etag": "\"501-nwWebwtXvyWLqxhFbD3gNLGICaI\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-57x57.png"
  },
  "/apple-touch-icon-60x60-precomposed.png": {
    "type": "image/png",
    "etag": "\"550-P4pQ9/QGYgQzJ+m7D36ZYnOvTcg\"",
    "mtime": "2022-06-06T10:25:18.670Z",
    "path": "../public/apple-touch-icon-60x60-precomposed.png"
  },
  "/apple-touch-icon-60x60.png": {
    "type": "image/png",
    "etag": "\"550-P4pQ9/QGYgQzJ+m7D36ZYnOvTcg\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-60x60.png"
  },
  "/apple-touch-icon-72x72-precomposed.png": {
    "type": "image/png",
    "etag": "\"6a3-qMGTfxapCNKupPaj2YHxw5l9JB4\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-72x72-precomposed.png"
  },
  "/apple-touch-icon-72x72.png": {
    "type": "image/png",
    "etag": "\"6a3-qMGTfxapCNKupPaj2YHxw5l9JB4\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-72x72.png"
  },
  "/apple-touch-icon-76x76-precomposed.png": {
    "type": "image/png",
    "etag": "\"725-kAEHktaULNNxuR3mc4aGvsojTmY\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-76x76-precomposed.png"
  },
  "/apple-touch-icon-76x76.png": {
    "type": "image/png",
    "etag": "\"725-kAEHktaULNNxuR3mc4aGvsojTmY\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-76x76.png"
  },
  "/apple-touch-icon-precomposed.png": {
    "type": "image/png",
    "etag": "\"13f1-6+WeKMP/IX8rMCBaKTQkvzRAW78\"",
    "mtime": "2022-06-06T10:25:18.669Z",
    "path": "../public/apple-touch-icon-precomposed.png"
  },
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": "\"13f1-6+WeKMP/IX8rMCBaKTQkvzRAW78\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"4486-fgd8pj3R8MdXW73tkHz22cEgBkk\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/favicon.ico"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"86a5-q/zsyhA6u5fZ4TImzRv2lNe3NDo\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/favicon.png"
  },
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": "\"8022-ML6bWieW+PZyCh91WRUFLRqCUoA\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/favicon.svg"
  },
  "/icon-128x128.png": {
    "type": "image/png",
    "etag": "\"d4c-2F6pNnLypXefhZGtHNFCpftTJCU\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/icon-128x128.png"
  },
  "/icon-144x144.png": {
    "type": "image/png",
    "etag": "\"f54-WQhhRkZmHjqHATlDcJNcM/VoA64\"",
    "mtime": "2022-06-06T10:25:18.668Z",
    "path": "../public/icon-144x144.png"
  },
  "/icon-152x152.png": {
    "type": "image/png",
    "etag": "\"103a-TML0TH6K0hUS9bWBCRp1z57reZ0\"",
    "mtime": "2022-06-06T10:25:18.667Z",
    "path": "../public/icon-152x152.png"
  },
  "/icon-160x160.png": {
    "type": "image/png",
    "etag": "\"1162-yM1xcFVPob2q0LXYmj4gD84mKqI\"",
    "mtime": "2022-06-06T10:25:18.667Z",
    "path": "../public/icon-160x160.png"
  },
  "/icon-16x16.png": {
    "type": "image/png",
    "etag": "\"130-HJoEPuby2VfDsyuZj0scGkn8Tjo\"",
    "mtime": "2022-06-06T10:25:18.667Z",
    "path": "../public/icon-16x16.png"
  },
  "/icon-192x192.png": {
    "type": "image/png",
    "etag": "\"15c8-opNUMAj5HfTiBaG2CVNnf/CKbbU\"",
    "mtime": "2022-06-06T10:25:18.667Z",
    "path": "../public/icon-192x192.png"
  },
  "/icon-196x196.png": {
    "type": "image/png",
    "etag": "\"1674-Gmw999WEKbD0PEDUhHw6qfeuh6M\"",
    "mtime": "2022-06-06T10:25:18.667Z",
    "path": "../public/icon-196x196.png"
  },
  "/icon-24x24.png": {
    "type": "image/png",
    "etag": "\"1dd-g8E81v8fN+3gcDNK1uE4JIzj1vQ\"",
    "mtime": "2022-06-06T10:25:18.666Z",
    "path": "../public/icon-24x24.png"
  },
  "/icon-256x256.png": {
    "type": "image/png",
    "etag": "\"1ef1-ulWq9/CQiBkYny1uamc1DSzt7TU\"",
    "mtime": "2022-06-06T10:25:18.666Z",
    "path": "../public/icon-256x256.png"
  },
  "/icon-32x32.png": {
    "type": "image/png",
    "etag": "\"280-HvkjGgwnz87wNcfJQmqljkLZteo\"",
    "mtime": "2022-06-06T10:25:18.666Z",
    "path": "../public/icon-32x32.png"
  },
  "/icon-36x36.png": {
    "type": "image/png",
    "etag": "\"2d7-mqm9OS+DOt7OL/dH0BmShqa5iRo\"",
    "mtime": "2022-06-06T10:25:18.666Z",
    "path": "../public/icon-36x36.png"
  },
  "/icon-384x384.png": {
    "type": "image/png",
    "etag": "\"34c3-vUbQOwxvVleAEh0/m4hWnOZn/+0\"",
    "mtime": "2022-06-06T10:25:18.665Z",
    "path": "../public/icon-384x384.png"
  },
  "/icon-48x48.png": {
    "type": "image/png",
    "etag": "\"40d-8K42ahiu4lVPqwDQ3kGbpCHac3g\"",
    "mtime": "2022-06-06T10:25:18.665Z",
    "path": "../public/icon-48x48.png"
  },
  "/icon-512x512.png": {
    "type": "image/png",
    "etag": "\"4f1d-06Wk1dKkK1FOIx2YfXvbLf+wElA\"",
    "mtime": "2022-06-06T10:25:18.614Z",
    "path": "../public/icon-512x512.png"
  },
  "/icon-72x72.png": {
    "type": "image/png",
    "etag": "\"6a3-qMGTfxapCNKupPaj2YHxw5l9JB4\"",
    "mtime": "2022-06-06T10:25:18.614Z",
    "path": "../public/icon-72x72.png"
  },
  "/icon-96x96.png": {
    "type": "image/png",
    "etag": "\"991-FDfIkIj8yTQ00GN5mC7032UH0co\"",
    "mtime": "2022-06-06T10:25:18.614Z",
    "path": "../public/icon-96x96.png"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"509-yn7ETAaHz+q+LAcV1yvKovFFrmw\"",
    "mtime": "2022-06-06T10:25:18.613Z",
    "path": "../public/manifest.json"
  },
  "/ogp.png": {
    "type": "image/png",
    "etag": "\"a46f-BlvVu18xQhw9gFUDFwTp41VGIJo\"",
    "mtime": "2022-06-06T10:25:18.613Z",
    "path": "../public/ogp.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5f-5nDWRJsFU7GfyRdSqQxvnNyBxBE\"",
    "mtime": "2022-06-06T10:25:18.613Z",
    "path": "../public/robots.txt"
  },
  "/safari-pinned-tab.svg": {
    "type": "image/svg+xml",
    "etag": "\"8022-ML6bWieW+PZyCh91WRUFLRqCUoA\"",
    "mtime": "2022-06-06T10:25:18.613Z",
    "path": "../public/safari-pinned-tab.svg"
  },
  "/signature.ai": {
    "type": "application/postscript",
    "etag": "\"14ab1-7jxJmC4FA7BoB+hKB9rGhSsJg58\"",
    "mtime": "2022-06-06T10:25:18.613Z",
    "path": "../public/signature.ai"
  },
  "/signature.jpeg": {
    "type": "image/jpeg",
    "etag": "\"bfec-A1nngKh9HDY4idAAPZGYFyqPdKE\"",
    "mtime": "2022-06-06T10:25:18.612Z",
    "path": "../public/signature.jpeg"
  },
  "/signature.svg": {
    "type": "image/svg+xml",
    "etag": "\"3c6d-//rWcXAG1kriQLQhOQP8AHYiGLQ\"",
    "mtime": "2022-06-06T10:25:18.612Z",
    "path": "../public/signature.svg"
  },
  "/site-tile-150x150.png": {
    "type": "image/png",
    "etag": "\"100b-jhu30AS0UIIOM7Pbylgn07gAwCo\"",
    "mtime": "2022-06-06T10:25:18.612Z",
    "path": "../public/site-tile-150x150.png"
  },
  "/site-tile-310x150.png": {
    "type": "image/png",
    "etag": "\"14e8-c5xgqX+b3eYdowEiNAy0VxSk8i4\"",
    "mtime": "2022-06-06T10:25:18.612Z",
    "path": "../public/site-tile-310x150.png"
  },
  "/site-tile-310x310.png": {
    "type": "image/png",
    "etag": "\"27ab-tbfD8e1L+MQA9Y2a13HSj4aV2zU\"",
    "mtime": "2022-06-06T10:25:18.611Z",
    "path": "../public/site-tile-310x310.png"
  },
  "/site-tile-70x70.png": {
    "type": "image/png",
    "etag": "\"673-4mCPEli/hesFLBJ0ql3BFbgQfZQ\"",
    "mtime": "2022-06-06T10:25:18.611Z",
    "path": "../public/site-tile-70x70.png"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"3fa-jkuunOx8YBcI++mI+nQQFflzOGA\"",
    "mtime": "2022-06-06T10:25:18.611Z",
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/IndentArticle-d177b570.mjs": {
    "type": "application/javascript",
    "etag": "\"124-cHDA0p/Crk6xrSbogjfQ8bzf6FI\"",
    "mtime": "2022-06-06T10:25:18.611Z",
    "path": "../public/_nuxt/IndentArticle-d177b570.mjs"
  },
  "/_nuxt/UnderlinedLink-ea1cbfad.mjs": {
    "type": "application/javascript",
    "etag": "\"1ef-0VKFt3oM8I0oer6Ns/+jhkUXJkM\"",
    "mtime": "2022-06-06T10:25:18.610Z",
    "path": "../public/_nuxt/UnderlinedLink-ea1cbfad.mjs"
  },
  "/_nuxt/contact-e5c4de7b.mjs": {
    "type": "application/javascript",
    "etag": "\"1809-jBZE5sUfWOGtCv71x+/GDgY69Jk\"",
    "mtime": "2022-06-06T10:25:18.610Z",
    "path": "../public/_nuxt/contact-e5c4de7b.mjs"
  },
  "/_nuxt/entry-0b78eda4.mjs": {
    "type": "application/javascript",
    "etag": "\"3cfd8-RgY7+C4YdkM2kntT240alxOgcT8\"",
    "mtime": "2022-06-06T10:25:18.610Z",
    "path": "../public/_nuxt/entry-0b78eda4.mjs"
  },
  "/_nuxt/entry.d2b88f50.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"51ca-PMz37/BjFd9+WF1qcAjxCAMo6/s\"",
    "mtime": "2022-06-06T10:25:18.609Z",
    "path": "../public/_nuxt/entry.d2b88f50.css"
  },
  "/_nuxt/index-2d1c5b1d.mjs": {
    "type": "application/javascript",
    "etag": "\"26d3-7pdpSMUERsbNgmbj0lZtwojqTbI\"",
    "mtime": "2022-06-06T10:25:18.609Z",
    "path": "../public/_nuxt/index-2d1c5b1d.mjs"
  },
  "/_nuxt/publications-cb124ad6.mjs": {
    "type": "application/javascript",
    "etag": "\"2f26-BE93ylo4RpHXZG4jNKgHsDRQKiU\"",
    "mtime": "2022-06-06T10:25:18.609Z",
    "path": "../public/_nuxt/publications-cb124ad6.mjs"
  },
  "/_nuxt/works-ed75138e.mjs": {
    "type": "application/javascript",
    "etag": "\"1dc8-zT0gN1XY0zoRQM/ZNqpVLxf8ibM\"",
    "mtime": "2022-06-06T10:25:18.608Z",
    "path": "../public/_nuxt/works-ed75138e.mjs"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _152570 = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

const _lazy_405558 = () => import('../handlers/renderer.mjs').then(function (n) { return n.a; });

const handlers = [
  { route: '', handler: _152570, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_405558, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_405558, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter();
  const routerOptions = createRouter$1({ routes: config.nitro.routes });
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    const referenceRoute = h.route.replace(/:\w+|\*\*/g, "_");
    const routeOptions = routerOptions.lookup(referenceRoute) || {};
    if (routeOptions.swr) {
      handler = cachedEventHandler(handler, {
        group: "nitro/routes"
      });
    }
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(h3App.nodeHandler);
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, nitroApp.h3App.nodeHandler) : new Server$1(nitroApp.h3App.nodeHandler);
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const hostname = process.env.NITRO_HOST || process.env.HOST || "0.0.0.0";
server.listen(port, hostname, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  console.log(`Listening on ${protocol}://${hostname}:${port}${useRuntimeConfig().app.baseURL}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
