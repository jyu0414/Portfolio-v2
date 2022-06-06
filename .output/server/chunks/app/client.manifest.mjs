const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "file": "entry-0b78eda4.mjs",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/contact.vue",
      "pages/index.vue",
      "pages/publications.vue",
      "pages/works.vue"
    ],
    "css": [
      "entry.d2b88f50.css"
    ]
  },
  "pages/contact.vue": {
    "file": "contact-e5c4de7b.mjs",
    "src": "pages/contact.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-2d1c5b1d.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_IndentArticle-d177b570.mjs",
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "_IndentArticle-d177b570.mjs": {
    "file": "IndentArticle-d177b570.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/publications.vue": {
    "file": "publications-cb124ad6.mjs",
    "src": "pages/publications.vue",
    "isDynamicEntry": true,
    "imports": [
      "_UnderlinedLink-ea1cbfad.mjs",
      "node_modules/nuxt/dist/app/entry.mjs",
      "_IndentArticle-d177b570.mjs"
    ]
  },
  "_UnderlinedLink-ea1cbfad.mjs": {
    "file": "UnderlinedLink-ea1cbfad.mjs",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/works.vue": {
    "file": "works-ed75138e.mjs",
    "src": "pages/works.vue",
    "isDynamicEntry": true,
    "imports": [
      "_UnderlinedLink-ea1cbfad.mjs",
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
