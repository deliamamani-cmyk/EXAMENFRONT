
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/lab1-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lab1-Angular"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YWACCYIZ.js"
    ],
    "route": "/lab1-Angular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5994, hash: 'f2f630980c1d2cb1549c277ba381d2a45d5f3b753df388c8ae2d7aec1303478d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6514, hash: '3e0ac51af6e8962751049329614ef232be920875142f2330373af5ef9821cda3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13691, hash: 'e17e2968b1f40bd878c67bca4c2511492e9177db20a529152a81a2d8dac665b6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8941, hash: 'fadc60586e1e6d7bf27b8d7a20303fcc89d686258345daa38f601400ce807af2', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
