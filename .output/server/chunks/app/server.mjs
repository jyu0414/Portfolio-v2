import { v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from '../handlers/renderer.mjs';
import { hasProtocol, isEqual, withBase, withQuery } from 'ufo';
import { config as config$1, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createClient } from 'newt-client-js';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'h3';
import 'unenv/runtime/mock/proxy';
import 'stream';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faCircleCheck = {
  prefix: 'fas',
  iconName: 'circle-check',
  icon: [512, 512, [61533, "check-circle"], "f058", "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]
};
var faCrown = {
  prefix: 'fas',
  iconName: 'crown',
  icon: [576, 512, [128081], "f521", "M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"]
};
var faEnvelope = {
  prefix: 'fas',
  iconName: 'envelope',
  icon: [512, 512, [128386, 61443, 9993], "f0e0", "M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"]
};
var faGraduationCap = {
  prefix: 'fas',
  iconName: 'graduation-cap',
  icon: [640, 512, [127891, "mortar-board"], "f19d", "M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"]
};
var faLink = {
  prefix: 'fas',
  iconName: 'link',
  icon: [640, 512, [128279, "chain"], "f0c1", "M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"]
};
var faQ = {
  prefix: 'fas',
  iconName: 'q',
  icon: [448, 512, [113], "51", "M393.1 402.5c34.12-39.32 54.93-90.48 54.93-146.5c0-123.5-100.5-224-223.1-224S.0001 132.5 .0001 256s100.5 224 223.1 224c44.45 0 85.81-13.16 120.7-35.58l46.73 56.08c6.328 7.594 15.42 11.52 24.59 11.52c21.35 0 31.98-18.26 31.98-32.01c0-7.223-2.433-14.49-7.419-20.47L393.1 402.5zM224 416c-88.22 0-160-71.78-160-160s71.78-159.1 160-159.1s160 71.78 160 159.1c0 36.21-12.55 69.28-32.92 96.12L280.6 267.5c-6.338-7.597-15.44-11.53-24.61-11.53c-21.27 0-31.96 18.22-31.96 32.02c0 7.223 2.433 14.49 7.419 20.47l71.53 85.83C279.6 407.7 252.8 416 224 416z"]
};
var faQuoteRight = {
  prefix: 'fas',
  iconName: 'quote-right',
  icon: [448, 512, [8221, "quote-right-alt"], "f10e", "M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"]
};

/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faFacebook = {
  prefix: 'fab',
  iconName: 'facebook',
  icon: [512, 512, [62000], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]
};
var faGithub = {
  prefix: 'fab',
  iconName: 'github',
  icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
};
var faLinkedin = {
  prefix: 'fab',
  iconName: 'linkedin',
  icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
};
var faTwitter = {
  prefix: 'fab',
  iconName: 'twitter',
  icon: [512, 512, [], "f099", "M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = typeof ctx.options.body === "string" ? ctx.options.body : JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch = createFetch({ fetch, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2 && segments.length > 1) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign(meta2, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      if (removeHistoryListener)
        return;
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            removeHistoryListener = null;
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "H3Error";
  }
}
function createError(input) {
  var _a;
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath || "/";
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main2, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts();
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts();
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles2) {
  let ret = "";
  if (!styles2 || isString(styles2)) {
    return ret;
  }
  for (const key in styles2) {
    const value = styles2[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function componentsPlugin_1b3a2b5f(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const vueuseHead_1951bd19 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [{ "name": "theme-color", "content": "#ffffff" }, { "hid": "og:locale:alternate", "property": "og:locale:alternate", "content": "ja_JP" }, { "hid": "og:locale:alternate", "property": "og:locale:alternate", "content": "en-US" }, { "hid": "og:locale:alternate", "property": "og:locale:alternate", "content": "en-GB" }, { "hid": "og:image", "property": "og:image", "content": "https://sasaki.dev/ogp.png" }, { "name": "twitter:card", "content": "summary_large_image" }, { "name": "twitter:creator", "content": "@YujiSasaki89" }, { "name": "twitter:image", "content": "https://sasaki.dev/ogp.png" }, { "hid": "og:title", "property": "og:title", "content": "Official Website - SASAKI, Yuji" }, { "hid": "og:type", "property": "og:type", "content": "website" }, { "hid": "og:url", "property": "og:url", "content": "https://sasaki.dev/" }, { "hid": "og:site_name", "property": "og:site_name", "content": "Portfolio of SASAKI, Yuji" }, { "hid": "og:description", "property": "og:description", "content": 'Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.' }, { "hid": "description", "name": "description", "content": '\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0EYuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.' }, { "name": "author", "content": "SASAKI, Yuji" }, { "name": "keywords", "content": "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66" }], "link": [{ "rel": "alternate", "href": "https:://sasaki.dev/", "hreflang": "en" }, { "rel": "alternate", "href": "https:://sasaki.dev/", "hreflang": "ja" }, { "rel": "alternate", "href": "https:://sasaki.dev/", "hreflang": "x-default" }, { "rel": "icon", "type": "image/svg+xml", "href": "/favicon.svg" }, { "rel": "icon alternate", "type": "image/png", "href": "/favicon.png" }, { "rel": "apple-touch-icon", "href": "/apple-touch-icon-180x180.png", "sizez": "180x180" }, { "rel": "mask-icon", "href": "/safari-pinned-tab.svg" }, { "rel": "manifest", "href": "/manifest.json" }], "style": [], "script": [], "htmlAttrs": { "prefix": "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#" }, "title": "SASAKI, Yuji" } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const _232271e6 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw(metaConfig.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, {}, {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const _sfc_main$r = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u9023\u7D61 - \u4F50\u3005\u6728 \u96C4\u53F8", "Contact - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u3078\u306E\u9023\u7D61\u306FEmail(yuji@sasaki.dev)\u3084Twitter(@pochidev001)\u304B\u3089\u53EF\u80FD\u3067\u3059\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki can be contacted via Email (yuji@sasaki.dev) and Twitter (@pochidev001). Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, Twitter, Qiita, GitHub, Email, Facebook"
        },
        {
          property: "og:title",
          content: $localize("\u9023\u7D61 - \u4F50\u3005\u6728 \u96C4\u53F8", "Contact - SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/contact"
        }
      ]
    });
    const contact2 = [
      {
        title: "Email",
        link: "mailto:yuji@sasaki.dev",
        linkDisplay: "yuji@sasaki.dev",
        iconCategory: "fas",
        icon: "envelope"
      },
      {
        title: "Twitter",
        link: "//twitter.com/pochidev001",
        linkDisplay: "@pochidev001",
        iconCategory: "fab",
        icon: "twitter"
      },
      {
        title: "Facebook",
        link: "//www.facebook.com/ys8921",
        linkDisplay: "ys8921",
        iconCategory: "fab",
        icon: "facebook"
      },
      {
        title: "GitHub",
        link: "//github.com/jyu0414/",
        linkDisplay: "jyu0414",
        iconCategory: "fab",
        icon: "github"
      },
      {
        title: "Qiita",
        link: "//qiita.com/jyu0414",
        linkDisplay: "jyu0414",
        iconCategory: "fas",
        icon: "q"
      },
      {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/yujisasaki/",
        linkDisplay: "yujisasaki",
        iconCategory: "fab",
        icon: "linkedin"
      }
    ];
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = vue_cjs_prod.resolveComponent("font-awesome-icon");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><h1>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)("\u9023\u7D61", "Contact"))}</h1><div class="gric-cols-1 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"><!--[-->`);
      serverRenderer.exports.ssrRenderList(contact2, (item, key) => {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer" class="no-underline"><div class="relative aspect-[1.618/1] border border-primary p-4 dark:border-white"><span class="text-xl">${serverRenderer.exports.ssrInterpolate(item.title)}</span><address class="text-sm">${serverRenderer.exports.ssrInterpolate(item.linkDisplay)}</address>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
          icon: [item.iconCategory, item.icon],
          size: "2x",
          class: "absolute bottom-8 right-8"
        }, null, _parent));
        _push(`</div></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const meta$3 = void 0;
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$q = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<article${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "my-4" }, _attrs))}><h1>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h1><div class="md:ml-[80px] lg:ml-[160px]">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></article>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndentArticle.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$1]]);
const config = {
  spaceUid: "yuji",
  appUid: "profile",
  token: "ATLioJLdyu1pVV8WU2ru24HD33rTyzLBpdcAd5_8jiA"
};
const client = createClient({
  spaceUid: config.spaceUid,
  token: config.token
});
const fetchProfile = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "profile",
    query: {
      order: ["priority"]
    }
  });
  return response;
};
const fetchStatement = async () => {
  const response = await client.getFirstContent({
    appUid: config.appUid,
    modelUid: "statement"
  });
  return response;
};
const fetchTopImage = async () => {
  const response = await client.getFirstContent({
    appUid: config.appUid,
    modelUid: "topimage"
  });
  return response;
};
const fetchHistory = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "history",
    query: {
      order: ["date"]
    }
  });
  return response;
};
const fetchActivity = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "activity",
    query: {
      order: ["beginDate", "endDate"]
    }
  });
  return response;
};
const fetchCareer = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "career",
    query: {
      order: ["beginDate", "endDate"]
    }
  });
  return response;
};
const fetchPapers = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "paper",
    query: {
      order: ["year", "month"]
    }
  });
  return response;
};
const fetchPatents = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "patent",
    query: {
      order: ["number"]
    }
  });
  return response;
};
const fetchLectures = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "lecture",
    query: {
      order: ["date"]
    }
  });
  return response;
};
const fetchPublishes = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "publish",
    query: {
      order: ["date"]
    }
  });
  return response;
};
const fetchMedia = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "media",
    query: {
      order: ["date"]
    }
  });
  return response;
};
const fetchWorks = async () => {
  const response = await client.getContents({
    appUid: config.appUid,
    modelUid: "work",
    query: {
      order: ["isCurrent", "beginYear", "endYear"],
      depth: 2
    }
  });
  return response;
};
const _sfc_main$p = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: profileContents } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchProfile()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, vue_cjs_prod.mergeProps({ class: "md:w-3/4" }, _attrs), {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-accent mr-3"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u4F50\u3005\u6728 \u96C4\u53F8", "Sasaki, Yuji"))}</span>\xA0 <span class="text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize("Sasaki, Yuji", "\u4F50\u3005\u6728 \u96C4\u53F8"))}</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode("span", { class: "text-accent mr-3" }, vue_cjs_prod.toDisplayString(_ctx.$localize("\u4F50\u3005\u6728 \u96C4\u53F8", "Sasaki, Yuji")), 1),
              vue_cjs_prod.createTextVNode("\xA0 "),
              vue_cjs_prod.createVNode("span", { class: "text-secondary" }, vue_cjs_prod.toDisplayString(_ctx.$localize("Sasaki, Yuji", "\u4F50\u3005\u6728 \u96C4\u53F8")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(profileContents), (item, index2) => {
              _push2(`<section class="my-6"${_scopeId}>`);
              if (item.isTitleNeeded) {
                _push2(`<h2${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.title, item.titleEnglish))}</h2>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span${_scopeId}>${_ctx.$localize(item.content, item.contentEnglish)}</span></section>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(profileContents), (item, index2) => {
                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("section", {
                  key: index2,
                  class: "my-6"
                }, [
                  item.isTitleNeeded ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("h2", { key: 0 }, vue_cjs_prod.toDisplayString(_ctx.$localize(item.title, item.titleEnglish)), 1)) : vue_cjs_prod.createCommentVNode("", true),
                  vue_cjs_prod.createVNode("span", {
                    innerHTML: _ctx.$localize(item.content, item.contentEnglish)
                  }, null, 8, ["innerHTML"])
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Profile.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const statement = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchStatement()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, _attrs, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize(vue_cjs_prod.unref(statement).title, vue_cjs_prod.unref(statement).titleEnglish))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize(vue_cjs_prod.unref(statement).title, vue_cjs_prod.unref(statement).titleEnglish)), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${_ctx.$localize(vue_cjs_prod.unref(statement).message, vue_cjs_prod.unref(statement).messageEnglish)}</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode("span", {
                innerHTML: _ctx.$localize(vue_cjs_prod.unref(statement).message, vue_cjs_prod.unref(statement).messageEnglish)
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Statement.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: _history } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchHistory()), __temp = await __temp, __restore(), __temp);
    const history2 = vue_cjs_prod.computed(() => {
      return _history.reverse();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, _attrs, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u7D4C\u6B74", "Biography"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u7D4C\u6B74", "Biography")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(history2), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="text-secondary"${_scopeId}>`);
              if (index2 == 0 || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).year !== _ctx.$localizedDate(item.date).year) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.date).year)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="pr-4 text-secondary"${_scopeId}>`);
              if (index2 == 0 || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).month !== _ctx.$localizedDate(item.date).month || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).year !== _ctx.$localizedDate(item.date).year) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.date).month)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}>`);
              if (item.link) {
                _push2(`<a${serverRenderer.exports.ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.title, item.titleEnglish))}</a>`);
              } else {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.title, item.titleEnglish))}</span>`);
              }
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(history2), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "text-secondary" }, [
                        index2 == 0 || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).year !== _ctx.$localizedDate(item.date).year ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.date).year), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, [
                        index2 == 0 || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).month !== _ctx.$localizedDate(item.date).month || _ctx.$localizedDate(vue_cjs_prod.unref(history2)[index2 - 1].date).year !== _ctx.$localizedDate(item.date).year ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.date).month), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("td", null, [
                        item.link ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("a", {
                          key: 0,
                          href: item.link,
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }, vue_cjs_prod.toDisplayString(_ctx.$localize(item.title, item.titleEnglish)), 9, ["href"])) : (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 1 }, vue_cjs_prod.toDisplayString(_ctx.$localize(item.title, item.titleEnglish)), 1))
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Biography.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: _career } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchCareer()), __temp = await __temp, __restore(), __temp);
    const career = vue_cjs_prod.computed(() => {
      return _career.reverse();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, _attrs, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u8077\u6B74", "Career"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u8077\u6B74", "Career")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(career), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="pr-4 text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.beginDate).full)} - `);
              if (!item.isCurrent) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.endDate).full)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.isCurrent) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u73FE\u5728", "current"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.organization, item.organizationEnglish))}</td><td${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.jobTitle, item.jobTitleEnglish))}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(career), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.beginDate).full) + " - ", 1),
                        !item.isCurrent ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.endDate).full), 1)) : vue_cjs_prod.createCommentVNode("", true),
                        item.isCurrent ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 1 }, vue_cjs_prod.toDisplayString(_ctx.$localize("\u73FE\u5728", "current")), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("td", null, vue_cjs_prod.toDisplayString(_ctx.$localize(item.organization, item.organizationEnglish)), 1),
                      vue_cjs_prod.createVNode("td", null, vue_cjs_prod.toDisplayString(_ctx.$localize(item.jobTitle, item.jobTitleEnglish)), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Career.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: _activity } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchActivity()), __temp = await __temp, __restore(), __temp);
    const activity = vue_cjs_prod.computed(() => {
      return _activity.reverse();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, _attrs, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u6D3B\u52D5", "Activities"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u6D3B\u52D5", "Activities")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(activity), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="text-secondary pr-4"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.beginDate).full)} - `);
              if (!item.isCurrent) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.endDate).full)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (item.isCurrent) {
                _push2(`<span${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u73FE\u5728", "current"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.organization, item.organizationEnglish))}</td><td${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localize(item.jobTitle, item.jobTitleEnglish))}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(activity), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "text-secondary pr-4" }, [
                        vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.beginDate).full) + " - ", 1),
                        !item.isCurrent ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 0 }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.endDate).full), 1)) : vue_cjs_prod.createCommentVNode("", true),
                        item.isCurrent ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", { key: 1 }, vue_cjs_prod.toDisplayString(_ctx.$localize("\u73FE\u5728", "current")), 1)) : vue_cjs_prod.createCommentVNode("", true)
                      ]),
                      vue_cjs_prod.createVNode("td", null, vue_cjs_prod.toDisplayString(_ctx.$localize(item.organization, item.organizationEnglish)), 1),
                      vue_cjs_prod.createVNode("td", null, vue_cjs_prod.toDisplayString(_ctx.$localize(item.jobTitle, item.jobTitleEnglish)), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/Activity.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var isFunc = (json) => typeof json === "function";
var useJsonld = (json) => {
  if (!json) {
    return;
  }
  const jsonComputed = vue_cjs_prod.computed(() => isFunc(json) ? json() : json);
  useHead(() => ({
    script: [
      {
        type: "application/ld+json",
        children: jsonComputed.value ? JSON.stringify(jsonComputed.value, null, "") : void 0
      }
    ]
  }));
};
const _sfc_main$k = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const topImage = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchTopImage()), __temp = await __temp, __restore(), __temp);
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC"
        },
        {
          property: "og:title",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/"
        }
      ]
    });
    useJsonld({
      "@context": "https://schema.org",
      "@type": "Person",
      familyName: "Sasaki",
      givenName: "Yuji",
      gender: "male",
      affiliation: "Keio University",
      alumniOf: "Kwansei Gakuin",
      award: "WWDC17 Scholarship Winner",
      birthDate: "1999/08/09",
      birthPlace: "Hyogo, Japan",
      callSign: "JQ3CLP",
      email: "yuji@sasaki.dev",
      funder: "Masa-son Foundation",
      honorificPrefix: "Mr.",
      jobTitle: "Engineer",
      worksFor: "Bridge UI, Inc."
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_index_profile = _sfc_main$p;
      const _component_index_statement = _sfc_main$o;
      const _component_index_biography = _sfc_main$n;
      const _component_index_career = _sfc_main$m;
      const _component_index_activity = _sfc_main$l;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="md:flex" itemscope itemtype="http://schema.org/Person">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_profile, null, null, _parent));
      _push(`<div class="w-full md:w-1/4"><img class="rounded-lg md:mt-[160px]"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(topImage).profileimage.src)} itemprop="image" alt="" width="667" height="1000"></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_statement, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_biography, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_career, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_activity, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const meta$2 = void 0;
const _sfc_main$j = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    link: { default: "" },
    label: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.link) {
        _push(`<a${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
          href: __props.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, _attrs))}><cite>${serverRenderer.exports.ssrInterpolate(__props.label)}</cite></a>`);
      } else {
        _push(`<cite${serverRenderer.exports.ssrRenderAttrs(_attrs)}>${serverRenderer.exports.ssrInterpolate(__props.label)}</cite>`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UnderlinedLink.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    paper: null
  },
  emits: ["show"],
  setup(__props, { emit }) {
    const isReviewed = (category) => {
      return [
        "paper-reviewed",
        "conference-reviewed",
        "domestic-conference-reviewed"
      ].includes(category);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = vue_cjs_prod.resolveComponent("font-awesome-icon");
      const _component_underlined_link = _sfc_main$j;
      _push(`<!--[-->`);
      if (isReviewed(__props.paper.category)) {
        _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, vue_cjs_prod.mergeProps({
          icon: "circle-check",
          class: "mr-2"
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
        link: __props.paper.link,
        label: _ctx.$localize(__props.paper.title, __props.paper.titleEnglish)
      }, null, _parent));
      _push(`<div class="ml-8 text-secondary"><div>${serverRenderer.exports.ssrInterpolate(__props.paper.authors.map((a) => a.data).join(", "))} - ${serverRenderer.exports.ssrInterpolate(__props.paper.book ? __props.paper.book : __props.paper.conference)}, ${serverRenderer.exports.ssrInterpolate(__props.paper.year)} `);
      if (__props.paper.bibtex || __props.paper.cite) {
        _push(`<button class="ml-2 hover:text-primary">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, { icon: "quote-right" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.paper.link) {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", __props.paper.link)} target="_blank" rel="noopener noreferrer" class="ml-2 hover:text-primary">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, { icon: "link" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaperItem.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: _papers } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchPapers()), __temp = await __temp, __restore(), __temp);
    let showModal = vue_cjs_prod.ref(false);
    let modalText = vue_cjs_prod.ref("");
    let modalBibTex = vue_cjs_prod.ref("");
    const papers = vue_cjs_prod.computed(() => {
      return _papers.reverse();
    });
    const showCitation = (text, bibtex) => {
      modalText.value = text;
      modalBibTex.value = bibtex;
      showModal.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      const _component_paper_item = _sfc_main$i;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, null, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u7814\u7A76\u6210\u679C", "Papers"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u7814\u7A76\u6210\u679C", "Papers")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(papers), (item, key) => {
              _push2(`<article${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_paper_item, { paper: item }, null, _parent2, _scopeId));
              _push2(`</article>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "space-y-8" }, [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(papers), (item, key) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("article", { key }, [
                    vue_cjs_prod.createVNode(_component_paper_item, {
                      paper: item,
                      onShow: showCitation
                    }, null, 8, ["paper"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vue_cjs_prod.unref(showModal)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"><div class="relative mx-auto w-full max-w-xl"><div class="rounded-lg bg-white p-5"><div class="my-4"><h3>${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u5F15\u7528\u60C5\u5831", "Export Citations"))}</h3></div><table>`);
        if (vue_cjs_prod.unref(modalText)) {
          _push(`<tr><td>Text:</td><td><textarea readonly rows="4" class="w-full rounded-lg border border-primary p-3">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(modalText))}</textarea></td></tr>`);
        } else {
          _push(`<!---->`);
        }
        if (vue_cjs_prod.unref(modalBibTex)) {
          _push(`<tr><td>BibTeX:</td><td><textarea readonly rows="5" class="w-full rounded-lg border border-primary p-3">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(modalBibTex))}</textarea></td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</table></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue_cjs_prod.unref(showModal)) {
        _push(`<div class="fixed inset-0 z-40 bg-black opacity-10"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Publications/Papers.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: patents } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchPatents()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      const _component_underlined_link = _sfc_main$j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, null, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u7279\u8A31", "Patent"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u7279\u8A31", "Patent")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(patents), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="pr-4 text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.number)}</td><td class="pr-4"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
                link: item.link,
                label: item.title
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.author.map((a) => a.data).join(", "))}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(patents), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, vue_cjs_prod.toDisplayString(item.number), 1),
                      vue_cjs_prod.createVNode("td", { class: "pr-4" }, [
                        vue_cjs_prod.createVNode(_component_underlined_link, {
                          link: item.link,
                          label: item.title
                        }, null, 8, ["link", "label"])
                      ]),
                      vue_cjs_prod.createVNode("td", { class: "text-secondary" }, vue_cjs_prod.toDisplayString(item.author.map((a) => a.data).join(", ")), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Publications/Patents.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: lectures } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchLectures()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, null, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u8B1B\u6F14", "Lectures"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u8B1B\u6F14", "Lectures")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(lectures), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="pr-4 text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.date).full)}</td><td class="pr-4"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.title)}</td><td class="text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.place)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(lectures), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.date).full), 1),
                      vue_cjs_prod.createVNode("td", { class: "pr-4" }, vue_cjs_prod.toDisplayString(item.title), 1),
                      vue_cjs_prod.createVNode("td", { class: "text-secondary" }, vue_cjs_prod.toDisplayString(item.place), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Publications/Lectures.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: publishes } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchPublishes()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      const _component_underlined_link = _sfc_main$j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, null, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u51FA\u7248", "Publications"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u51FA\u7248", "Publications")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(publishes), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="pr-4 text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.date).full)}</td><td class="pr-4"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
                link: item.link,
                label: item.title
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.author.map((a) => a.data).join(", "))}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(publishes), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.date).full), 1),
                      vue_cjs_prod.createVNode("td", { class: "pr-4" }, [
                        vue_cjs_prod.createVNode(_component_underlined_link, {
                          link: item.link,
                          label: item.title
                        }, null, 8, ["link", "label"])
                      ]),
                      vue_cjs_prod.createVNode("td", { class: "text-secondary" }, vue_cjs_prod.toDisplayString(item.author.map((a) => a.data).join(", ")), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Publications/Publishes.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { items: media } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchMedia()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_indent_article = __nuxt_component_0;
      const _component_underlined_link = _sfc_main$j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_indent_article, null, {
        title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u30E1\u30C7\u30A3\u30A2\u63B2\u8F09", "Media Coverage"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u30E1\u30C7\u30A3\u30A2\u63B2\u8F09", "Media Coverage")), 1)
            ];
          }
        }),
        content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><tbody${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(media), (item, index2) => {
              _push2(`<tr${_scopeId}><td class="pr-4 text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(_ctx.$localizedDate(item.date).full)}</td><td class="pr-4"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
                link: item.link,
                label: item.title
              }, null, _parent2, _scopeId));
              _push2(`</td><td class="text-secondary"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.media)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table>`);
          } else {
            return [
              vue_cjs_prod.createVNode("table", null, [
                vue_cjs_prod.createVNode("tbody", null, [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(media), (item, index2) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", { key: index2 }, [
                      vue_cjs_prod.createVNode("td", { class: "pr-4 text-secondary" }, vue_cjs_prod.toDisplayString(_ctx.$localizedDate(item.date).full), 1),
                      vue_cjs_prod.createVNode("td", { class: "pr-4" }, [
                        vue_cjs_prod.createVNode(_component_underlined_link, {
                          link: item.link,
                          label: item.title
                        }, null, 8, ["link", "label"])
                      ]),
                      vue_cjs_prod.createVNode("td", { class: "text-secondary" }, vue_cjs_prod.toDisplayString(item.media), 1)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Publications/Media.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u51FA\u7248 - \u4F50\u3005\u6728 \u96C4\u53F8", "Publications - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u306E\u7814\u7A76\u6210\u679C\u3068\u3057\u3066\u300C\u8108\u6CE2\u3092\u4F7F\u3063\u305F\u6642\u7CFB\u5217UX\u8A55\u4FA1\u624B\u6CD5\u306B\u95A2\u3059\u308B\u7814\u7A76\u300D\u300CAn Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students\u300D\u300C\u5C0F\u4E2D\u5B66\u751F\u5411\u3051\u7D71\u8A08\u5B66\u7FD2\u306E\u305F\u3081\u306E\u30DD\u30FC\u30BF\u30EB\u30B5\u30A4\u30C8\u300C\u30AD\u30C3\u30BA\u3059\u305F\u3063\u3068\u300D\u300D\u306A\u3069\u304C\u3042\u308B\uFF0E\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u306B\u3088\u308B\u6A5F\u5668\u64CD\u4F5C\u30B7\u30B9\u30C6\u30E0\u306E\u7279\u8A31\uFF08\u7279\u958B2021-145198\uFF09\u3092\u51FA\u9858\u4E2D\uFF0E\u65E5\u672C\u7D4C\u6E08\u65B0\u805E\uFF0C\u8AAD\u58F2\u65B0\u805E\uFF0C\u7523\u7D4C\u65B0\u805E\uFF0C\u671D\u65E5\u65B0\u805E\uFF0C\u30DE\u30A4\u30CA\u30D3\u30CB\u30E5\u30FC\u30B9\u7B49\u3078\u306E\u63B2\u8F09\u304C\u3042\u308B\uFF0EMacFan\u3078\u300CWWDC17 Scholarship Report\u300D\u306E\u8A18\u4E8B\u3092\u5BC4\u7A3F\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasakis research results include "A Study on Time Series UX Evaluation Methods Using Pulse Waves", "An Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students" and "Kids Stat", a portal site for statistical learning for elementary and junior high school students. A patent for a device operation system by eye contact (JP 2021-145198) is pending. Contributed an article on "WWDC17 Scholarship Report" to MacFan.Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, Research, \u7814\u7A76 "
        },
        {
          property: "og:title",
          content: $localize("\u51FA\u7248 - \u4F50\u3005\u6728 \u96C4\u53F8", "Publications - SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/publications"
        }
      ]
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publications_papers = _sfc_main$h;
      const _component_publications_patents = _sfc_main$g;
      const _component_publications_lectures = _sfc_main$f;
      const _component_publications_publishes = _sfc_main$e;
      const _component_publications_media = _sfc_main$d;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_papers, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_patents, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_lectures, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_publishes, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_media, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/publications.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const meta$1 = void 0;
const _sfc_main$b = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u4F5C\u54C1 - \u4F50\u3005\u6728 \u96C4\u53F8", "Works - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en")
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u306FAI\u4F53\u9A13\u6559\u6750\u306E\u300CAIEdu\uFF08kombu.\uFF09\u300D\uFF0C\u5199\u771F\u3092\u773A\u3081\u3066\u6B21\u306E\u65C5\u5148\u306B\u51FA\u4F1A\u3046\u300CPhotrip\u300D\uFF0C\u6B21\u4E16\u4EE3\u306E\u8CB8\u501F\u8A18\u9332\u30A2\u30D7\u30EA\u300CCredy\u300D\uFF0C\u30B3\u30F3\u30D4\u30E5\u30C6\u30FC\u30B7\u30E7\u30CA\u30EB\u30B7\u30F3\u30AD\u30F3\u30B0\u80B2\u6210\u6559\u6750\u300CKasgai\u300D\u306A\u3069\u3092\u958B\u767A\u3057\u3066\u3044\u308B\uFF0E\u7DCF\u52D9\u7701\u306B\u63D0\u6848\u3057\u305F\u30B5\u30FC\u30D3\u30B9\u300CKids Stat\u300D\u306F\u7DCF\u52D9\u5927\u81E3\u8CDE\u3092\u53D7\u8CDE\u3057\u73FE\u5728\u7DCF\u52D9\u7701\u7D71\u8A08\u5C40\u306B\u3088\u3063\u3066\u904B\u7528\u3055\u308C\u3066\u3044\u308B\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki has developed AIEdu (kombu.), an AI experience teaching material; Photrip, an application for viewing photos and finding your next travel destination; Credy, a next-generation loan recording application; and Kasgai, a teaching material for fostering computational thinking. Kids Stat, a service proposed to the Ministry of Internal Affairs and Communications, won the Minister of Internal Affairs and Communications Award and is currently operated by the Statistics Bureau of the Ministry of Internal Affairs and Communications. Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, kombu, kasgai, kids stat,\u30AD\u30C3\u30BA\u3059\u305F\u3063\u3068, e-stat junior, KabeCom, LuuX, Credy"
        },
        {
          property: "og:title",
          content: $localize("\u4F5C\u54C1 - \u4F50\u3005\u6728 \u96C4\u53F8", "Works - SASAKI, Yuji"),
          prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/works"
        }
      ]
    });
    const { items: _works } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWorks()), __temp = await __temp, __restore(), __temp);
    const works2 = vue_cjs_prod.computed(() => {
      return _works.reverse();
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = vue_cjs_prod.resolveComponent("font-awesome-icon");
      const _component_underlined_link = _sfc_main$j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><h1>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)("\u4F5C\u54C1", "Works"))}</h1><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(works2), (item, index2) => {
        _push(`<article class="md:gap-1/12 my-16 md:flex"><div class="md:8 md:w-1/2 lg:m-16"><img${serverRenderer.exports.ssrRenderAttr("src", item.image[0].src)} alt=""></div><div class="mt-3 md:ml-16 md:w-5/12 md:text-right"><p class="text-secondary">${serverRenderer.exports.ssrInterpolate(item.beginYear)} - `);
        if (!item.isCurrent) {
          _push(`<span>${serverRenderer.exports.ssrInterpolate(item.endYear)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><h1 class="my-0">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(item.title, item.titleEnglish))}</h1><p>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(item.subTitle, item.subTitleEnglish))}</p><section class="mb-8 text-left">${vue_cjs_prod.unref($localize)(item.description, item.descriptionEnglish)}</section><aside class="text-left"><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.link, (link, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "link",
            class: "mr-2"
          }, null, _parent));
          _push(`<a${serverRenderer.exports.ssrRenderAttr("href", link.url)}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(link.title, link.titleEnglish))}</a></li>`);
        });
        _push(`<!--]--></ul></section><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.paper, (study, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "graduation-cap",
            class: "mr-2"
          }, null, _parent));
          _push(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
            link: study.link,
            label: vue_cjs_prod.unref($localize)(study.title, study.titleEnglish)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.award, (award, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "crown",
            class: "mr-2"
          }, null, _parent));
          _push(` ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(award.title, award.titleEnglish))}</li>`);
        });
        _push(`<!--]--></ul></section></aside></div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const meta = void 0;
const routes = [
  {
    name: "contact",
    path: "/contact",
    file: "/Users/yuji/github/Portfolio-v2/pages/contact.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return contact;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/Users/yuji/github/Portfolio-v2/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index;
    })
  },
  {
    name: "publications",
    path: "/publications",
    file: "/Users/yuji/github/Portfolio-v2/pages/publications.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return publications;
    })
  },
  {
    name: "works",
    path: "/works",
    file: "/Users/yuji/github/Portfolio-v2/pages/works.vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return works;
    })
  }
];
const configRouterOptions = {};
const routerOptions = __spreadValues({}, configRouterOptions);
const globalMiddleware = [];
const namedMiddleware = {};
const _b4594852 = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
    history: routerHistory,
    routes
  }));
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  router.afterEach(async (to) => {
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    }
  });
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace(__spreadProps(__spreadValues({}, router.resolve(initialURL)), {
        force: true
      }));
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
var plugin_default = defineNuxtPlugin((nuxtApp) => {
  const mixin = {
    created() {
      var _a;
      if (typeof ((_a = this.$options) == null ? void 0 : _a.jsonld) !== "function") {
        return;
      }
      const jsonComputed = vue_cjs_prod.computed(() => this.$options.jsonld.call(this));
      useHead(() => ({
        script: [
          {
            type: "application/ld+json",
            children: jsonComputed.value ? JSON.stringify(jsonComputed.value, null, "") : void 0
          }
        ]
      }));
    }
  };
  const plugin = {
    install(Vue) {
      Vue.mixin(mixin);
    }
  };
  nuxtApp.vueApp.use(plugin);
});
const fontawesome_1ffa5c44 = defineNuxtPlugin((nuxtApp) => {
  config$1.autoAddCss = false;
  library.add([faEnvelope, faQ, faTwitter, faGithub, faLinkedin, faFacebook, faCircleCheck, faQuoteRight, faLink, faGraduationCap, faCrown]);
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
const useLocale = () => useState("locale", () => useDefaultLocale().value);
const useDefaultLocale = (fallback = "en-US") => {
  var _a, _b;
  const locale = vue_cjs_prod.ref(fallback);
  {
    const nuxtApp = useNuxtApp();
    const reqLocale = (_b = (_a = nuxtApp.ssrContext) == null ? void 0 : _a.req.headers["accept-language"]) == null ? void 0 : _b.split(",")[0];
    if (reqLocale) {
      locale.value = reqLocale.slice(0, 2);
    }
  }
  return locale;
};
const index_5010b80a = defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      adobeFonts: (d) => {
        var config2 = {
          kitId: "idj6pes",
          scriptTimeout: 3e3,
          async: true
        }, h2 = d.documentElement, t = setTimeout(function() {
          h2.className = h2.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config2.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
        h2.className += " wf-loading";
        tk.src = "https://use.typekit.net/" + config2.kitId + ".js";
        tk.async = true;
        tk.onload = tk.onreadystatechange = function() {
          a = this.readyState;
          if (f || a && a != "complete" && a != "loaded")
            return;
          f = true;
          clearTimeout(t);
          try {
            Typekit.load(config2);
          } catch (e) {
          }
        };
        s.parentNode.insertBefore(tk, s);
      },
      localizedDate: (dateString) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const locale = useLocale();
        const month = locale.value == "ja" ? date.getMonth() + 1 + "\u6708" : months[date.getMonth()];
        const year = locale.value == "ja" ? date.getFullYear() + "\u5E74" : date.getFullYear();
        return {
          month,
          year,
          full: locale.value == "ja" ? `${year} ${month}` : `${month} ${year}`
        };
      },
      localize: (ja, en) => {
        const locale = useLocale();
        return locale.value == "ja" ? ja : en;
      }
    }
  };
});
const _plugins = [
  preload,
  componentsPlugin_1b3a2b5f,
  vueuseHead_1951bd19,
  _232271e6,
  _b4594852,
  plugin_default,
  fontawesome_1ffa5c44,
  index_5010b80a
];
const _sfc_main$a = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-011aae6d><div class="fixed left-0 right-0 spotlight z-10" data-v-011aae6d></div><div class="max-w-520px text-center z-20" data-v-011aae6d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-011aae6d>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-011aae6d>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-011aae6d"]]);
const _sfc_main$9 = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-6aee6495><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-6aee6495></div><div class="max-w-520px text-center" data-v-6aee6495><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-6aee6495>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6aee6495"]]);
const _sfc_main$7 = {
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a = error.statusMessage) != null ? _a : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$7), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "_\u30A4\u30E4\u30FC_2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1908.91 1035.14"
  }, _attrs))}><g id="_\u30A4\u30E4\u30FC_1-2"><title>\u4F50\u3005\u6728\u96C4\u53F8 Yuji Sasaki</title><desc>\u4F50\u3005\u6728\u96C4\u53F8\u306E\u30B5\u30A4\u30F3 Signature of Yuji Sasaki</desc><path d="M1860.63,389.89c-23.88-3.02-46.68-6.02-69.52-8.73-7.85-.93-15.77-1.27-23.67-1.71-17.22-.94-34.45-1.56-51.66-2.71-13.12-.87-26.18-2.87-39.31-3.43-19.17-.82-38.37-.77-57.56-1.14-36.59-.72-73.18-1.88-109.77-2.11-30.87-.2-61.74,.72-92.62,.98-4.18,.03-6.99,1.11-8.92,5.08-9.15,18.82-18.51,37.53-27.75,56.3-.58,1.17-.82,2.51-1.15,3.79-1.32,5.22,.34,7.18,5.43,5.76,4.56-1.27,9.12-2.83,13.34-4.95,33.45-16.8,67.11-33.06,103.37-43.13,13.66-3.79,27.3-7.66,41.05-11.08,9.78-2.43,23.47,5.87,25.34,15.47,.53,2.72-.73,6.53-2.5,8.82-4.35,5.64-9.45,10.71-14.27,15.99-15.65,17.11-34.1,30.96-52.36,45.05-2.93,2.27-5.7,4.75-8.54,7.13,.32,.76,.64,1.53,.96,2.29,8.77,0,17.57,.49,26.3-.12,11.55-.8,23.03-2.61,34.57-3.7,8.62-.81,16.61,1.47,24.41,5.24,7.17,3.47,15.14,5.4,22.01,9.31,4.33,2.47,7.76,7.01,10.66,11.27,1.39,2.04,1.87,6.49,.58,8.26-4.8,6.61-10.32,13.26-19.34,13.66-12.55,.57-23.49,5.66-34.17,11.29-30.69,16.17-60.97,33.04-93.35,45.89-13.51,5.36-26.83,11-41.26,12.25-9.08,.78-18.98,.92-27.44-1.88-12.96-4.31-17.87-16.1-12.9-34.06,4.55-16.48,14.99-30.5,25.97-43.65,2.85-3.41,6.66-6.03,10.94-9.81-3.67-1.93-5.82-3.67-8.24-4.22-12.12-2.75-22.43-9.11-32.71-15.65-3.68-2.34-7.31-2.87-11.63-.22-26.51,16.28-51.23,34.72-73.48,56.61-9.56,9.41-20.37,17.72-31.36,25.47-10.56,7.45-26.82,5.8-33.52-2.68-2.67-3.38-3.79-7.99-5.63-12.04-.59-1.3-1.24-2.56-1.86-3.84-.99,.79-2.26,1.39-2.93,2.4-6.46,9.58-16.06,15.12-25.97,20.19-7.74,3.96-15.88,1.93-19.48-5.81-3.39-7.28-5.76-14.87-2.81-23.55,5.56-16.37,10.22-33.05,14.99-49.68,2.8-9.75,15.82-14.93,24.27-9.13,13.18,9.05,14.89,19.62,9.4,30.59-2.43,4.84-3.04,8.89,2.21,12.29,1.21,.78,1.99,2.42,2.68,3.8,3.47,6.94,3.67,6.86,9.69,2.29,21.55-16.38,39.43-36.15,54.63-58.44,1.02-1.49,1.81-3.14,3.39-5.91-5.38,.77-9.67,1.18-13.88,2.02-15.99,3.16-27.91-10.29-22.6-25.93,1.83-5.39,4.49-10.52,7.12-15.6,5.52-10.66,11.25-21.21,16.95-31.77,2.09-3.87,4.44-7.59,6.48-11.48,.66-1.26,.73-2.82,1.06-4.25-1.67,.22-3.76-.14-4.93,.74-8.86,6.65-17.82,13.22-26.2,20.44-10.06,8.67-19.74,17.81-29.27,27.06-7.04,6.83-13.9,13.9-20.19,21.4-2.58,3.07-3.55,7.54-5.04,11.45-.73,1.94-.67,4.19-1.5,6.07-1.23,2.75-2.93,5.29-4.44,7.92-2.03-2.17-4.05-4.33-7.09-7.58-4.32,6.13-8.8,12.43-13.21,18.77-14.32,20.6-28.24,41.5-43.18,61.64-3.5,4.72-10.04,8.06-15.85,9.99-11.12,3.7-21.66-9.29-18.52-22.23,.6-2.46,2.03-4.72,3.14-7.04,5.46-11.46,10.95-22.91,16.43-34.36-.49-.45-.98-.89-1.48-1.34-5.83,4.11-12.19,7.65-17.4,12.44-18.1,16.64-36.09,33.43-53.55,50.73-12.61,12.49-27.15,21.62-43.35,28.39-7.15,2.99-15.84-.88-19.22-8.22-3.26-7.08-3.04-13.86,.71-20.75,13.3-24.45,29.33-47.04,46.29-69.03,9.99-12.95,19-26.73,29.74-39.01,6.59-7.54,15.04-13.91,23.72-18.99,6.61-3.87,11.9-.75,15.54,6.15,3.17,6,6.52,11.86,4.02,19.2-1.68,4.95-4.83,7.78-9.5,9.84-4.67,2.06-10,4.07-13.2,7.72-9.72,11.08-18.6,22.9-27.65,34.55-1.08,1.4-1.17,3.57-1.71,5.38,1.51-.77,3.22-1.31,4.51-2.36,13.21-10.77,25.95-22.17,39.64-32.29,11.88-8.77,24.53-16.62,37.39-23.89,8.59-4.85,10.58-3.8,17.31,2.99,.56,.57,1.11,1.15,1.67,1.73,6.16,6.32,5.75,5.94,11.77-.5,5.93-6.34,12.37-12.38,19.38-17.46,8.9-6.45,13.13-14.47,13.15-25.39,.02-9.24,.87-18.49,1.57-27.73,.32-4.22-1.31-5.78-5.46-5.47-14.19,1.06-28.39,2-42.59,2.95-1.86,.13-3.73,.04-5.59,.13-19.03,.91-38.06,1.69-57.06,2.93-2.86,.19-6.55,1.84-8.2,4.05-8.52,11.38-16.5,23.17-24.65,34.83-.44,.63-.45,1.74-1,2.08-12.9,7.95-15.36,23.09-23.55,34.31-12.96,17.76-25.3,36.01-37.19,54.51-10.24,15.95-21.51,31.47-24.41,51.19-.52,3.54-5.7,7.33-9.59,9-1.75,.76-6.47-2.77-8.37-5.41-6.24-8.66-4.03-18.52-.91-27.29,3.81-10.69,8.86-21.15,14.81-30.83,12.43-20.22,25.85-39.83,38.74-59.77,2.27-3.5,4.02-7.36,5.81-11.14,.48-1.02,.26-2.36,.36-3.56-1.47,.23-3.24,.01-4.35,.77-4.58,3.12-8.95,6.54-13.42,9.82-20.28,14.91-40.5,29.91-60.88,44.68-18.54,13.42-37.03,26.94-56.05,39.66-6.5,4.35-6.58,11.02-9.03,16.77-2.76,6.46-4.11,13.52-6,20.34-1.37,4.92-3.21,9.36-1.78,15.12,2.22,8.93-4.57,17.61-14.88,21.53-7.15,2.72-14.81-.24-20.55-7.61-6.92-8.89-13.93-17.73-21.07-26.44-11.42-13.93-8.82-35.15,7.09-43.85,9.65-5.28,19.36-10.52,28.62-16.45,3.47-2.22,7.13-5.93,8.29-9.7,8.07-26.35,15.42-52.92,23.21-79.37,1.7-5.79,4.41-11.28,6.23-17.05,.42-1.33-.56-3.48-1.57-4.7-.36-.44-2.92,.41-4.09,1.23-14.18,10.04-28.41,20.02-42.39,30.34-18.44,13.61-36.7,27.47-54.99,41.27-18.93,14.29-38.46,27.88-56.55,43.17-19.37,16.37-38.09,33.54-54,53.65-9.74,12.31-21.21,23.33-32.56,34.26-4.21,4.05-10.04,6.72-15.55,9.04-5.9,2.49-13.61-1.41-15.63-7.55-2.43-7.39-2.92-14.74,2.33-21.5,10.46-13.45,21.27-26.66,31.02-40.61,12.05-17.24,23.2-35.1,34.6-52.78,1.02-1.59,.97-3.86,1.42-5.82-1.94,.29-4.01,.27-5.82,.93-27.75,10.25-51.74,26.32-72.89,46.89-7.99,7.77-15.94,15.72-24.84,22.34-5.73,4.27-12.92,7.09-19.88,9.04-5.51,1.54-10.92-.54-14.04-6.41-4.19-7.88-3.48-15.3,1.95-22.11,9.04-11.32,18.61-22.22,27.46-33.67,9.94-12.88,19.34-26.18,28.96-39.31,.16-.21,.27-.46,.35-.72,1.46-4.63,2.91-9.27,4.36-13.91-4.08,1.32-8.35,2.23-12.21,4.02-12.71,5.89-25.7,11.37-37.73,18.47-7.54,4.45-13.63,11.41-20.22,17.4-14.14,12.83-29.59,24.55-41.95,38.92-20.87,24.27-44.95,45.16-67.18,67.97-12.24,12.57-24.61,25.01-36.82,37.6-6.36,6.56-14.69,9.36-23.05,11.54-8.16,2.13-15.4-2.79-19.34-11.61-3.28-7.36-1.31-17.13,4.82-21.75,12.43-9.38,25.5-17.98,37.37-28.01,7.57-6.4,14.42-14.15,19.91-22.42,11.43-17.2,22.02-34.99,32.3-52.91,2.58-4.5,2.84-10.4,3.9-15.71,.66-3.33-1.13-4.23-4.43-4.83-10.58-1.91-19.12,3.62-28.1,7.19-18.36,7.29-36.06,15.82-52.32,27.35-4.84,3.44-11.53,5.16-17.55,5.72-3.51,.33-8-2.51-10.96-5.15-8.05-7.16-14.02-24.39-.91-33.74,3.37-2.4,7.43-4.11,11.43-5.3,12.38-3.66,24.93-6.76,37.33-10.36,13.41-3.89,26.78-7.94,40.07-12.2,14.06-4.51,28.33-6.6,42.41-1.36,11.51,4.28,19.93,16.57,17.18,30.06-.82,4.03-1.34,8.13-2.34,14.27,7.67-5.19,14.5-8.94,20.31-13.88,23.47-19.92,48.18-38.1,74.2-54.54,1.39-.88,2.35-2.43,3.51-3.67-1.83-.78-3.75-2.4-5.47-2.21-12.08,1.33-24.12,3.01-36.16,4.62-14.39,1.93-28.76,4.05-43.17,5.86-25.26,3.17-50.55,6.16-75.82,9.25-18.39,2.25-36.79,4.49-55.17,6.87-19.41,2.51-39.26,3.47-58.01,8.5-8.95,2.4-19.33,7.72-23.59,19.52-15.14,41.88-25.23,85.13-36.19,128.15-7.26,28.49-13.33,57.28-20.87,85.69-10.91,41.1-22.95,81.91-33.93,122.99-5.34,19.99-9.25,40.36-14.01,60.5-3.07,12.98-7.06,25.76-9.68,38.82-4.52,22.59-8.17,45.34-12.4,67.99-2.64,14.15-5.61,28.24-8.55,42.33-.42,2.01-1.16,4.25-2.52,5.64-.72,.73-4.46,0-4.51-.35-.58-4.57-1.16-9.22-.91-13.8,.46-8.4,1.21-16.8,2.33-25.14,1.84-13.77,4.05-27.48,6.16-41.21,.95-6.21,2.12-12.39,3.01-18.61,1.22-8.56,2.05-17.18,3.43-25.71,2.51-15.46,4.96-30.94,8.06-46.29,4.29-21.26,9-42.44,13.82-63.59,5.89-25.86,11.83-51.72,18.2-77.46,6.19-24.98,13.38-49.71,19.36-74.74,6.78-28.37,12.57-56.96,19.02-85.41,3.71-16.37,7.92-32.62,11.82-48.95,.4-1.68,.2-3.5,.28-5.25-1.52,.75-3.23,1.26-4.55,2.27-22.11,16.95-44.14,34-66.25,50.95-17.2,13.19-34.65,26.07-51.66,39.5-12,9.47-23.48,19.61-35.14,29.51-8.98,7.62-17.91,15.32-26.82,23.02-4.88,4.22-9.17,9.46-14.66,12.58-7.75,4.39-13.71,1.74-17.55-6.24-1.69-3.52-3.48-7.07-4.61-10.78-3.94-12.99,5.95-20.4,12.46-28.83,7.42-9.62,17.89-15.7,28.3-21.68,19.66-11.3,31.88-29.38,43.46-48.01,2.63-4.23,5.36-8.49,7.19-13.08,.96-2.41,.57-5.74-.32-8.27-.27-.77-4.36-.71-6.51-.2-13.5,3.18-26.8,7.57-40.46,9.67-17.52,2.69-25.78,1.65-31.89-17.85-1.06-3.39,.07-8.28,1.87-11.55,2.77-5.03,7-9.25,10.6-13.82,.82-1.04,2.13-2.05,2.28-3.2,1.41-10.3,9.66-13.11,17.17-18.03,10.85-7.11,20.75-16.18,29.58-25.77,17.81-19.36,33.86-40.19,44.97-64.31,5.57-12.08,10.84-24.31,15.92-36.61,3.37-8.18,10.16-13.65,18.28-13.85,7.69-.19,16.11,6.35,19.26,14.22,4.28,10.69-.46,19.71-5.56,28.14-13.59,22.45-30.37,42.58-47.6,62.29-8.81,10.08-18.05,19.78-26.99,29.75-1.11,1.24-1.57,3.07-2.34,4.63,1.7,0,3.48,.36,5.08-.04,18.11-4.51,36.04-9.9,54.33-13.53,22.45-4.45,45.18-7.47,67.8-11.08,4.17-.67,8.4-.98,12.52-1.87,4.5-.97,8.01-2.77,9.35-8.21,4.16-16.77,8.76-33.45,13.52-50.06,5.38-18.76,11.17-37.4,16.69-56.12,1.47-4.98,2.59-10.06,3.91-15.09,8.85-33.68,19.71-66.67,32.94-98.91,8.35-20.34,15.63-41.13,24.06-61.43,3.65-8.79,9.32-16.71,13.46-25.32,7.12-14.79,15.28-29,25.73-41.56,9.83-11.81,20.15-23.5,31.77-33.47,16.58-14.21,30.47-8.75,42.32,7.07,11.45,15.29,21.96,31.28,32.97,46.9,8.16,11.57,16.71,22.88,24.66,34.59,13.63,20.07,22.09,41.88,21.75,66.64-.07,5.44,1.92,10.88,2.11,16.35,.16,4.86-.43,9.86-1.44,14.64-5.26,24.86-15.55,47.01-32.53,66.48-19.26,22.09-43.27,37.25-67.78,52.34-16.08,9.9-30.91,21.84-46.32,32.84-13.58,9.69-27.22,19.31-40.76,29.06-2.53,1.82-4.7,4.13-7.04,6.21l.47,2.13c8.67-.61,17.37-.98,26.01-1.89,14.92-1.57,29.81-3.4,44.7-5.26,8.6-1.07,17.17-2.47,25.77-3.6,11.45-1.5,22.9-3,34.38-4.28,14.65-1.64,29.32-3.06,43.99-4.58,11.79-1.22,23.59-2.35,35.37-3.68,17.23-1.94,34.42-4.23,51.66-5.98,18.06-1.83,36.17-3.13,54.25-4.76,9.98-.9,19.94-1.97,29.91-3.01,6.81-.71,13.6-1.55,20.4-2.27,14.37-1.52,28.75-3.07,43.13-4.46,7.35-.71,14.75-1.01,22.1-1.7,19.91-1.86,39.8-3.84,59.71-5.73,1.58-.15,3.23-.21,4.78,.05,16.89,2.89,29.76-5.03,41.74-15.4,1-.87,1.85-2.18,3.01-2.58,11.77-4.07,16.6-13.45,19.88-24.54,3.48-11.77,13.75-17.23,25.69-8.88,5.67,3.97,12.95,4.96,17.72,11.02,5.6,7.11,6.24,10.38-.37,16.62-2.83,2.67-6.63,4.31-9.52,6.93-2.33,2.12-3.94,5.01-5.87,7.56,2.5,.72,5.05,2.18,7.51,2.04,21.87-1.21,43.72-2.88,65.6-4.05,12.7-.68,25.43-.62,38.15-1.04,9.53-.31,19.27-1.22,26.52-7.96,5.48-5.09,9.5-11.73,14.26-17.61,7.26-8.96,14.15-18.27,21.98-26.69,13.68-14.69,27.97-7.8,39.72,2.27,2.87,2.46,5.34,5.99,6.68,9.53,2.12,5.6-1.55,11.61-8.26,15.37-9.13,5.12-18.27,10.22-27.34,15.45-1.47,.85-2.59,2.31-3.87,3.48,1.52,.59,3.06,1.75,4.55,1.68,17.16-.72,34.32-1.63,51.48-2.46,1.86-.09,3.72,.11,5.58,.05,10.57-.33,21.16-.43,31.69-1.29,1.89-.16,4.61-3.26,5.08-5.41,1.8-8.19,2.83-16.56,4.17-24.86,2.29-14.26,4.52-28.53,6.92-42.78,2.8-16.58,5.52-33.18,8.7-49.69,3.66-19,7.41-38,11.77-56.86,8.66-37.44,17-74.99,27-112.08,5.11-18.95,8.91-38.91,21.05-55.19,5.19-6.96,10.78-14.62,21.97-12.41,9.53,1.88,15.59,7.33,19.22,15.9,.89,2.11,1.71,4.79,1.2,6.88-2.3,9.5-4.88,18.63-12.32,26.14-5.14,5.19-9.09,12.22-11.71,19.13-8.87,23.43-15.52,47.78-25.65,70.62-11.1,25.05-16.05,51.46-22.27,77.68-5.34,22.52-10.7,45.05-15.4,67.71-3.41,16.46-5.6,33.18-8.62,49.72-1.13,6.2-3.32,12.2-4.57,18.38-.95,4.66-.33,8.44,6.24,7.67,10.84-1.26,21.71-2.82,32.59-2.91,8.72-.07,12.93-6.64,18.69-10.71,10.54-7.45,20.36-15.92,30.37-24.09,3.05-2.49,6.06-5.13,8.57-8.14,6.26-7.5,14.7-8.53,21.14-1.13,10.57,12.14,10.95,13.51,3.22,26.01-2.62,4.23-5.19,8.5-7.86,12.7-2.09,3.29-.57,4.37,2.6,4.32,17.25-.27,34.51-.51,51.76-1.03,1.57-.05,3.64-1.7,4.52-3.18,12.86-21.63,30.33-39.58,46.99-58.08,7.84-8.71,17.47-15.9,26.73-23.24,12.01-9.52,24.15-18.94,36.79-27.59,11.73-8.03,23.78-15.82,36.43-22.26,27.08-13.78,54.15-27.77,82.15-39.46,20.08-8.38,41.52-13.68,62.61-19.43,27.4-7.47,55.52-10.72,83.87-9.52,34.46,1.47,67.1,9.95,93.96,32.78,23.06,19.61,38.12,44.43,43.68,74.79,4.67,25.49,5.12,51.18,3.96,76.8-.97,21.25-4.09,42.33-9.57,63.12-5.76,21.83-8.67,44.41-14.39,66.25-6.72,25.66-14.98,50.92-22.85,76.26-5.51,17.77-11.21,35.49-17.31,53.06-7.16,20.62-15.26,40.91-22.25,61.59-15.34,45.42-34.22,89.35-53.54,133.17-5.2,11.78-11.41,22.74-17.55,33.88-7.27,13.18-30.93,14.35-39.38,1.94-3.22-4.72-3.01-11.19,.51-15.5,3.66-4.48,9.04-5.4,15.05-2.33,2.33,1.19,4.65,2.6,6.6,4.33,4.68,4.15,8.08,2.07,10.41-2.29,7.18-13.46,15.09-26.66,20.82-40.74,8.76-21.52,16.09-43.64,23.73-65.6,11.19-32.18,22.82-64.23,32.99-96.73,12.79-40.84,24.46-82.04,36.27-123.18,4.83-16.84,9.31-33.82,12.98-50.94,4.11-19.21,7.07-38.66,10.63-57.98,4.45-24.15,4.91-48.67,3.75-72.92-1.16-24.34-3.66-49.02-17.94-70.45-18.34-27.52-44.33-41.96-76.44-47.72-15.78-2.83-31.57-3.26-47.3-2.97-14.36,.26-28.64,3.7-43.02,4.84-22.17,1.77-42.98,8.85-63.64,16.06-18.49,6.46-36.62,14.19-54.34,22.56-18.35,8.67-36.53,17.96-53.84,28.51-15.06,9.18-28.79,20.52-43.13,30.87-3.62,2.61-7.79,4.63-10.91,7.73-11.39,11.32-22.67,22.76-33.52,34.59-6.37,6.95-11.9,14.67-17.65,22.17-1.18,1.54-1.68,3.62-2.49,5.45,1.87,.51,3.72,1.45,5.6,1.48,31.05,.52,62.09,1.01,93.14,1.33,23.86,.25,47.74-.27,71.59,.49,27.27,.87,54.5,2.76,81.75,4.22,11.63,.62,23.27,1.12,34.88,1.96,20.76,1.5,41.48,3.85,62.26,4.67,17.05,.67,33.18,4.96,49.42,9.27,10.81,2.86,21.68,5.55,32.45,8.54,2.69,.75,5.13,2.41,8.49,4.04Zm-1594.05,50.8c5.04-1.84,8.72-2.34,11.32-4.27,10.76-7.99,21.16-16.46,31.77-24.65,8.32-6.43,16.68-12.81,25.17-19.02,8.71-6.37,17.65-12.43,26.39-18.75,9.99-7.21,19.93-14.5,29.8-21.87,16.62-12.41,33.63-24.36,49.6-37.56,12.19-10.08,22.36-22.14,31.06-35.73,8.52-13.31,15.15-27.25,17.8-42.47,1.9-10.93,.65-22.47,.29-33.72-.16-5.15-1-10.44-2.52-15.36-4.74-15.39-13.4-28.85-22.23-42.11-5.97-8.96-13.03-17.19-19.1-26.09-5.48-8.04-10.15-16.61-15.39-24.82-4.11-6.45-6.53-6.46-13.51-2.88-17.66,9.05-29.42,24.19-40.56,39.63-18.7,25.93-29.99,55.69-41.94,85.04-13.75,33.78-25.89,68.07-35.14,103.42-8.77,33.51-18.72,66.7-28.02,100.07-1.81,6.49-3,13.15-4.79,21.15Zm339.17,41.5c3.53-1.6,5.34-2.41,7.14-3.23,17.33-7.94,34.4-16.53,52.06-23.62,16.43-6.59,21.49-4.61,31.64,9.61,1.93,2.7,2.48,6.72,2.73,10.2,.52,7.07,.55,7.59,6.39,4.18,7.65-4.47,14.81-9.78,22.12-14.8,22.95-15.75,45.96-31.43,68.77-47.38,5.13-3.59,9.56-8.19,14.31-12.33-11.01-.56-21.05-.07-31.08,.46-.5,.03-.97,.47-1.48,.55-11.47,1.7-23.07,5.37-34.38,4.63-20.91-1.36-41.02,4.02-61.66,4.64-20.47,.61-40.85,3.93-61.29,5.78-4.92,.44-5.69,1.78-3.91,6.38,1.93,5,4.46,10.75,3.6,15.62-1.57,8.88-5.27,17.42-8.43,25.97-1.5,4.05-3.79,7.81-6.53,13.34Zm333.87-89.5c-.05-.44-.11-.88-.16-1.32-7.56,1.06-15.13,3.02-22.68,2.96-8.97-.07-11.79,5.24-13.93,12.18-7.38,23.93-14.82,47.84-22.12,71.79-.41,1.35,.18,3,.31,4.51,1.48-.36,3.14-.4,4.41-1.14,12.56-7.26,25.42-14.08,37.47-22.1,17.76-11.82,35.06-24.33,52.3-36.91,10.86-7.93,21.28-16.46,31.82-24.82,2.29-1.81,4.5-3.85,6.2-6.18,.45-.62-1.05-3.91-1.75-3.94-6.91-.3-13.89-.65-20.76-.07-17.06,1.43-34.07,3.33-51.11,5.05ZM228.36,469.66c-3.01,0-4.81-.2-6.54,.03-9.69,1.33-19.38,2.69-29.05,4.18-19.25,2.97-38.45,6.27-57.73,8.99-16.67,2.35-32.95,7.82-50.15,6.26-3.03-.28-6.82,.06-9.16,1.7-3.22,2.24-5.39,5.99-8.01,9.09,3.51,.85,7.01,1.76,10.54,2.49,.67,.14,1.47-.56,2.24-.65,6.75-.81,13.51-2.18,20.27-2.24,17.07-.15,29.78,17.81,24.36,33.87-.96,2.85-1.91,5.7-2.98,8.85,9.12-1.27,96.22-60.7,106.21-72.57Zm1090.2,4.5c2.39-.49,3.75-.48,4.84-1.03,7.82-3.96,15.52-8.16,23.38-12.04,9.84-4.86,11.62-6.22,9.51-16.48-3.59-17.46,2.38-32.81,8.64-48.18,2.55-6.26,6.37-12.01,9.71-17.94,2.65-4.72,1.51-7-4.04-6.76-10.82,.47-21.64,1.22-32.47,1.31-12.61,.11-23.63,2.35-27.97,16.38-.29,.94-1.38,1.61-1.9,2.51-5.29,9.22-10.63,18.42-15.73,27.76-.89,1.63-.7,3.86-1.01,5.81,2.05-.1,4.22,.21,6.11-.4,3.75-1.2,7.31-2.99,11.01-4.37,8.43-3.16,15.19-.37,20.63,6.68,6.61,8.56,6.51,16.86,1.35,25.75-3.87,6.66-7.67,13.36-12.06,21.01Zm147.07,30.97c-7.84-1.23-13.25,2.37-17.97,8.08-4.03,4.88-8.57,9.33-12.52,14.26-7.08,8.81-14,17.76-20.75,26.82-2.22,2.98-1.73,5.57,2.72,5.83,1.59,.09,3.33,.45,4.78-.03,16.84-5.49,33.81-10.67,50.39-16.88,10.29-3.86,19.98-9.33,29.93-14.1,8.56-4.1,17.15-8.14,25.61-12.44,1.38-.7,2.15-2.63,3.2-3.99-1.34-.59-2.64-1.59-4.03-1.72-20.44-2.01-40.9-3.91-61.35-5.83Zm33.57-78.34c-.61-1.08-1.23-2.17-1.84-3.25-35.58,11.88-70.22,25.98-103.21,44.94,3.69,2.6,7.19,4.32,10.89,5.21,4.58,1.11,9.35,1.4,13.99,2.27,12.98,2.43,25.31,2.79,34.64-9,1.43-1.81,3.76-2.89,5.53-4.47,13.35-11.88,26.67-23.79,40-35.7Zm-287.25-28.23c.89,.48,1.79,.95,2.68,1.43,5.3-4.51,10.74-8.87,15.83-13.61,2.38-2.21,4.08-5.16,6.1-7.77-3.48-.62-6.94-1.63-10.43-1.76-4.43-.16-9.56,.03-11.16,5.11-1.68,5.32-2.06,11.05-3.02,16.61Z"></path></g></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Signature.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const locale = useLocale();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_signature = __nuxt_component_1;
      const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mx-3 md:mx-8 xl:mx-auto max-w-6xl" }, _attrs))}><header class="mb-8"><div class="my-8 text-right"><button class="${serverRenderer.exports.ssrRenderClass({ "text-secondary": vue_cjs_prod.unref(locale) !== "ja" })}">JA</button> / <button class="${serverRenderer.exports.ssrRenderClass({ "text-secondary": vue_cjs_prod.unref(locale) === "ja" })}">EN</button></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(_component_signature, { class: "mx-auto my-8 w-32 dark:fill-white" }, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(_component_signature, { class: "mx-auto my-8 w-32 dark:fill-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="mx-auto flex max-w-2xl flex-row">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        class: "basis-1/4 text-center no-underline",
        to: "/"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u7D39\u4ECB", "About"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u7D39\u4ECB", "About")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        class: "basis-1/4 text-center no-underline",
        to: "/works"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u4F5C\u54C1", "Works"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u4F5C\u54C1", "Works")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        class: "basis-1/4 text-center no-underline",
        to: "/publications"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u51FA\u7248", "Publications"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u51FA\u7248", "Publications")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        class: "basis-1/4 text-center no-underline",
        to: "/contact"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(_ctx.$localize("\u9023\u7D61", "Contact"))}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(_ctx.$localize("\u9023\u7D61", "Contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><main>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main><footer class="my-8"> Copyright \xA9 Yuji Sasaki 2019-2022, All Rights Reserved. </footer></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$6);
    vueApp.component("App", _sfc_main$4);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u9023\u7D61 - \u4F50\u3005\u6728 \u96C4\u53F8", "Contact - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u3078\u306E\u9023\u7D61\u306FEmail(yuji@sasaki.dev)\u3084Twitter(@pochidev001)\u304B\u3089\u53EF\u80FD\u3067\u3059\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki can be contacted via Email (yuji@sasaki.dev) and Twitter (@pochidev001). Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, Twitter, Qiita, GitHub, Email, Facebook"
        },
        {
          property: "og:title",
          content: $localize("\u9023\u7D61 - \u4F50\u3005\u6728 \u96C4\u53F8", "Contact - SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/contact"
        }
      ]
    });
    const contact2 = [
      {
        title: "Email",
        link: "mailto:yuji@sasaki.dev",
        linkDisplay: "yuji@sasaki.dev",
        iconCategory: "fas",
        icon: "envelope"
      },
      {
        title: "Twitter",
        link: "//twitter.com/pochidev001",
        linkDisplay: "@pochidev001",
        iconCategory: "fab",
        icon: "twitter"
      },
      {
        title: "Facebook",
        link: "//www.facebook.com/ys8921",
        linkDisplay: "ys8921",
        iconCategory: "fab",
        icon: "facebook"
      },
      {
        title: "GitHub",
        link: "//github.com/jyu0414/",
        linkDisplay: "jyu0414",
        iconCategory: "fab",
        icon: "github"
      },
      {
        title: "Qiita",
        link: "//qiita.com/jyu0414",
        linkDisplay: "jyu0414",
        iconCategory: "fas",
        icon: "q"
      },
      {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/yujisasaki/",
        linkDisplay: "yujisasaki",
        iconCategory: "fab",
        icon: "linkedin"
      }
    ];
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = vue_cjs_prod.resolveComponent("font-awesome-icon");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><h1>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)("\u9023\u7D61", "Contact"))}</h1><div class="gric-cols-1 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"><!--[-->`);
      serverRenderer.exports.ssrRenderList(contact2, (item, key) => {
        _push(`<a${serverRenderer.exports.ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer" class="no-underline"><div class="relative aspect-[1.618/1] border border-primary p-4 dark:border-white"><span class="text-xl">${serverRenderer.exports.ssrInterpolate(item.title)}</span><address class="text-sm">${serverRenderer.exports.ssrInterpolate(item.linkDisplay)}</address>`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
          icon: [item.iconCategory, item.icon],
          size: "2x",
          class: "absolute bottom-8 right-8"
        }, null, _parent));
        _push(`</div></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const topImage = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchTopImage()), __temp = await __temp, __restore(), __temp);
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC"
        },
        {
          property: "og:title",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/"
        }
      ]
    });
    useJsonld({
      "@context": "https://schema.org",
      "@type": "Person",
      familyName: "Sasaki",
      givenName: "Yuji",
      gender: "male",
      affiliation: "Keio University",
      alumniOf: "Kwansei Gakuin",
      award: "WWDC17 Scholarship Winner",
      birthDate: "1999/08/09",
      birthPlace: "Hyogo, Japan",
      callSign: "JQ3CLP",
      email: "yuji@sasaki.dev",
      funder: "Masa-son Foundation",
      honorificPrefix: "Mr.",
      jobTitle: "Engineer",
      worksFor: "Bridge UI, Inc."
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_index_profile = _sfc_main$p;
      const _component_index_statement = _sfc_main$o;
      const _component_index_biography = _sfc_main$n;
      const _component_index_career = _sfc_main$m;
      const _component_index_activity = _sfc_main$l;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="md:flex" itemscope itemtype="http://schema.org/Person">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_profile, null, null, _parent));
      _push(`<div class="w-full md:w-1/4"><img class="rounded-lg md:mt-[160px]"${serverRenderer.exports.ssrRenderAttr("src", vue_cjs_prod.unref(topImage).profileimage.src)} itemprop="image" alt="" width="667" height="1000"></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_statement, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_biography, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_career, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_index_activity, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u51FA\u7248 - \u4F50\u3005\u6728 \u96C4\u53F8", "Publications - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en"),
        prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u306E\u7814\u7A76\u6210\u679C\u3068\u3057\u3066\u300C\u8108\u6CE2\u3092\u4F7F\u3063\u305F\u6642\u7CFB\u5217UX\u8A55\u4FA1\u624B\u6CD5\u306B\u95A2\u3059\u308B\u7814\u7A76\u300D\u300CAn Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students\u300D\u300C\u5C0F\u4E2D\u5B66\u751F\u5411\u3051\u7D71\u8A08\u5B66\u7FD2\u306E\u305F\u3081\u306E\u30DD\u30FC\u30BF\u30EB\u30B5\u30A4\u30C8\u300C\u30AD\u30C3\u30BA\u3059\u305F\u3063\u3068\u300D\u300D\u306A\u3069\u304C\u3042\u308B\uFF0E\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u306B\u3088\u308B\u6A5F\u5668\u64CD\u4F5C\u30B7\u30B9\u30C6\u30E0\u306E\u7279\u8A31\uFF08\u7279\u958B2021-145198\uFF09\u3092\u51FA\u9858\u4E2D\uFF0E\u65E5\u672C\u7D4C\u6E08\u65B0\u805E\uFF0C\u8AAD\u58F2\u65B0\u805E\uFF0C\u7523\u7D4C\u65B0\u805E\uFF0C\u671D\u65E5\u65B0\u805E\uFF0C\u30DE\u30A4\u30CA\u30D3\u30CB\u30E5\u30FC\u30B9\u7B49\u3078\u306E\u63B2\u8F09\u304C\u3042\u308B\uFF0EMacFan\u3078\u300CWWDC17 Scholarship Report\u300D\u306E\u8A18\u4E8B\u3092\u5BC4\u7A3F\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasakis research results include "A Study on Time Series UX Evaluation Methods Using Pulse Waves", "An Exploratory Study of the Relationship between Computational Thinking and Creative Attitudes among University Students" and "Kids Stat", a portal site for statistical learning for elementary and junior high school students. A patent for a device operation system by eye contact (JP 2021-145198) is pending. Contributed an article on "WWDC17 Scholarship Report" to MacFan.Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, Research, \u7814\u7A76 "
        },
        {
          property: "og:title",
          content: $localize("\u51FA\u7248 - \u4F50\u3005\u6728 \u96C4\u53F8", "Publications - SASAKI, Yuji")
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/publications"
        }
      ]
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publications_papers = _sfc_main$h;
      const _component_publications_patents = _sfc_main$g;
      const _component_publications_lectures = _sfc_main$f;
      const _component_publications_publishes = _sfc_main$e;
      const _component_publications_media = _sfc_main$d;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_papers, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_patents, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_lectures, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_publishes, null, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_publications_media, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/publications.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const publications = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $adobeFonts, $localize } = useNuxtApp();
    useHead({
      title: $localize("\u4F5C\u54C1 - \u4F50\u3005\u6728 \u96C4\u53F8", "Works - SASAKI, Yuji"),
      htmlAttrs: {
        lang: $localize("ja", "en")
      },
      meta: [
        {
          name: "description",
          content: $localize("\u4F50\u3005\u6728\u96C4\u53F8\u306FAI\u4F53\u9A13\u6559\u6750\u306E\u300CAIEdu\uFF08kombu.\uFF09\u300D\uFF0C\u5199\u771F\u3092\u773A\u3081\u3066\u6B21\u306E\u65C5\u5148\u306B\u51FA\u4F1A\u3046\u300CPhotrip\u300D\uFF0C\u6B21\u4E16\u4EE3\u306E\u8CB8\u501F\u8A18\u9332\u30A2\u30D7\u30EA\u300CCredy\u300D\uFF0C\u30B3\u30F3\u30D4\u30E5\u30C6\u30FC\u30B7\u30E7\u30CA\u30EB\u30B7\u30F3\u30AD\u30F3\u30B0\u80B2\u6210\u6559\u6750\u300CKasgai\u300D\u306A\u3069\u3092\u958B\u767A\u3057\u3066\u3044\u308B\uFF0E\u7DCF\u52D9\u7701\u306B\u63D0\u6848\u3057\u305F\u30B5\u30FC\u30D3\u30B9\u300CKids Stat\u300D\u306F\u7DCF\u52D9\u5927\u81E3\u8CDE\u3092\u53D7\u8CDE\u3057\u73FE\u5728\u7DCF\u52D9\u7701\u7D71\u8A08\u5C40\u306B\u3088\u3063\u3066\u904B\u7528\u3055\u308C\u3066\u3044\u308B\uFF0E\u4F50\u3005\u6728 \u96C4\u53F8\uFF08\u3055\u3055\u304D \u3086\u3046\u3058\u30011999\u5E748\u67089\u65E5-\uFF09\u306F\uFF0CBridge UI\u682A\u5F0F\u4F1A\u793E \u793E\u9577\uFF0C\u6176\u61C9\u7FA9\u587E\u5927\u5B66 \u653F\u7B56\u30E1\u30C7\u30A3\u30A2\u7814\u7A76\u79D1 \u4FEE\u58EB\u8AB2\u7A0B\uFF0C\u30A8\u30F3\u30B8\u30CB\u30A2\uFF0C\u7814\u7A76\u8005\uFF0E\u5C02\u9580\u306FHuman-Computer Interaction\uFF0C\u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u958B\u767A\uFF0C\u6559\u80B2\u5DE5\u5B66\uFF0EWWDC17 Scholarship\uFF0CSTAT-DASH\u30B0\u30E9\u30F3\u30D7\u30EA\u512A\u52DD(\u7DCF\u52D9\u5927\u81E3\u8CDE)\uFF0CU22\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8 \u5546\u52D9\u60C5\u5831\u653F\u7B56\u5C40\u9577\u8CDE\u306A\u3069\u3092\u53D7\u8CDE\uFF0E2018\u5E74\u3088\u308A\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3 \u8CA1\u56E3\u751F\uFF0E\u73FE\u5728\u306E\u7814\u7A76\u306F\uFF0C\u65B0\u305F\u306A\u8868\u8A08\u7B97\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9\uFF0C\u8108\u6CE2\u306B\u3088\u308B\u30B9\u30C8\u30EC\u30B9\u6E2C\u5B9A\u3092\u7528\u3044\u305FUX\u8A55\u4FA1\u624B\u6CD5\uFF0C\u30A2\u30A4\u30B3\u30F3\u30BF\u30AF\u30C8\u3092\u7528\u3044\u305F\u5BB6\u96FB\u64CD\u4F5C\uFF0C\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3092\u7528\u3044\u305F\u5275\u9020\u6027\u80B2\u6210\u306A\u3069\uFF0E\u4EBA\u9593\u3068\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u3068\u306E\u3084\u308A\u3068\u308A\u306E\u6700\u9069\u5316\u3092\u901A\u3058\u3066\u300C\u601D\u3044\u901A\u308A\u306B\u52D5\u304F\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u300D\u3092\u4F5C\u308A\uFF0C\u4EBA\u9593\u306E\u53EF\u80FD\u6027\u3092\u62E1\u5927\u3059\u308B\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\uFF0E\u307E\u305F\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u4EBA\u5DE5\u77E5\u80FD\u306B\u95A2\u3059\u308B\u8B1B\u5EA7\u3084\uFF0C\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u3084\u7814\u7A76\u306E\u6307\u5C0E\u3082\u884C\u3063\u3066\u3044\u308B\uFF0E", 'Yuji Sasaki has developed AIEdu (kombu.), an AI experience teaching material; Photrip, an application for viewing photos and finding your next travel destination; Credy, a next-generation loan recording application; and Kasgai, a teaching material for fostering computational thinking. Kids Stat, a service proposed to the Ministry of Internal Affairs and Communications, won the Minister of Internal Affairs and Communications Award and is currently operated by the Statistics Bureau of the Ministry of Internal Affairs and Communications. Yuji Sasaki (9 August 1999-) is the president of Bridge UI Corporation, a masters degree student at the Graduate School of Media and Governance, Keio University, an engineer and researcher. He specialises in Human-Computer Interaction, User Interface, Software Development and Educational Engineering, and has won the WWDC17 Scholarship, the STAT-DASH Grand Prix Championship (Minister of Internal Affairs and Communications Award), the U22 Programming Contest Commerce and Information Policy Bureau Director-General Award, etc. Scholar, Masa-Son Foundation since 2018. His current research includes a new spreadsheet interface, a UX evaluation method using pulse wave stress measurement, home appliance operation using eye contact, and computer-based creativity development. His aim is to create "computers that work the way you want" through optimising the interaction between humans and computers, and to expand human potential. It also offers courses on programming and artificial intelligence, as well as guidance on programming and research.')
        },
        {
          name: "author",
          content: $localize("\u4F50\u3005\u6728 \u96C4\u53F8", "SASAKI, Yuji")
        },
        {
          name: "keywords",
          content: "\u4F50\u3005\u6728,\u96C4\u53F8,Yuji,Sasaki,\u95A2\u897F\u5B66\u9662,\u6176\u61C9\u7FA9\u587E\u5927\u5B66,\u30D7\u30ED\u30B0\u30E9\u30DE,\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2,\u5B6B\u6B63\u7FA9\u80B2\u82F1\u8CA1\u56E3,Swift,\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0,Human-Computer Interaction,UI,User Interface,UX,\u6559\u80B2\u5DE5\u5B66,Kwansei Gakuin, Keio University, Programmer, Software, \u30E6\u30FC\u30B6\u30A4\u30F3\u30BF\u30D5\u30A7\u30FC\u30B9, Masa-son Foundation, Programming, Creativity, Computational Thinking, \u5275\u9020\u6027, WWDC, kombu, kasgai, kids stat,\u30AD\u30C3\u30BA\u3059\u305F\u3063\u3068, e-stat junior, KabeCom, LuuX, Credy"
        },
        {
          property: "og:title",
          content: $localize("\u4F5C\u54C1 - \u4F50\u3005\u6728 \u96C4\u53F8", "Works - SASAKI, Yuji"),
          prefix: "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#"
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: "https://sasaki.dev/works"
        }
      ]
    });
    const { items: _works } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => fetchWorks()), __temp = await __temp, __restore(), __temp);
    const works2 = vue_cjs_prod.computed(() => {
      return _works.reverse();
    });
    vue_cjs_prod.onMounted(() => {
      $adobeFonts(document);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = vue_cjs_prod.resolveComponent("font-awesome-icon");
      const _component_underlined_link = _sfc_main$j;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><h1>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)("\u4F5C\u54C1", "Works"))}</h1><!--[-->`);
      serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(works2), (item, index2) => {
        _push(`<article class="md:gap-1/12 my-16 md:flex"><div class="md:8 md:w-1/2 lg:m-16"><img${serverRenderer.exports.ssrRenderAttr("src", item.image[0].src)} alt=""></div><div class="mt-3 md:ml-16 md:w-5/12 md:text-right"><p class="text-secondary">${serverRenderer.exports.ssrInterpolate(item.beginYear)} - `);
        if (!item.isCurrent) {
          _push(`<span>${serverRenderer.exports.ssrInterpolate(item.endYear)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><h1 class="my-0">${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(item.title, item.titleEnglish))}</h1><p>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(item.subTitle, item.subTitleEnglish))}</p><section class="mb-8 text-left">${vue_cjs_prod.unref($localize)(item.description, item.descriptionEnglish)}</section><aside class="text-left"><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.link, (link, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "link",
            class: "mr-2"
          }, null, _parent));
          _push(`<a${serverRenderer.exports.ssrRenderAttr("href", link.url)}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(link.title, link.titleEnglish))}</a></li>`);
        });
        _push(`<!--]--></ul></section><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.paper, (study, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "graduation-cap",
            class: "mr-2"
          }, null, _parent));
          _push(serverRenderer.exports.ssrRenderComponent(_component_underlined_link, {
            link: study.link,
            label: vue_cjs_prod.unref($localize)(study.title, study.titleEnglish)
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section><section><ul><!--[-->`);
        serverRenderer.exports.ssrRenderList(item.award, (award, key) => {
          _push(`<li class="mb-4 flex">`);
          _push(serverRenderer.exports.ssrRenderComponent(_component_font_awesome_icon, {
            icon: "crown",
            class: "mr-2"
          }, null, _parent));
          _push(` ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref($localize)(award.title, award.titleEnglish))}</li>`);
        });
        _push(`<!--]--></ul></section></aside></div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const works = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
