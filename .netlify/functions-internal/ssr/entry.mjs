import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D6Ogvz2N.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/page/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog/_single_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/_lang_/about.astro.mjs');
const _page6 = () => import('./pages/_lang_/contact.astro.mjs');
const _page7 = () => import('./pages/_lang_/faq.astro.mjs');
const _page8 = () => import('./pages/_lang_/pricing.astro.mjs');
const _page9 = () => import('./pages/_lang_/_regular_.astro.mjs');
const _page10 = () => import('./pages/_lang_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/page/[slug].astro", _page2],
    ["src/pages/blog/[single].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/[lang]/about.astro", _page5],
    ["src/pages/[lang]/contact.astro", _page6],
    ["src/pages/[lang]/faq.astro", _page7],
    ["src/pages/[lang]/pricing.astro", _page8],
    ["src/pages/[lang]/[regular].astro", _page9],
    ["src/pages/[lang]/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "b80d1961-0255-4dc1-9e97-d7d7b2c08a9b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
