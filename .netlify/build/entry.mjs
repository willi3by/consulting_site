import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B_1d-7e-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/api/demo.astro.mjs');
const _page3 = () => import('./pages/api/newsletter.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/case-studies/_slug_.astro.mjs');
const _page7 = () => import('./pages/case-studies.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/demo.astro.mjs');
const _page10 = () => import('./pages/how-it-works.astro.mjs');
const _page11 = () => import('./pages/papers/_slug_.astro.mjs');
const _page12 = () => import('./pages/papers.astro.mjs');
const _page13 = () => import('./pages/pricing.astro.mjs');
const _page14 = () => import('./pages/publications.astro.mjs');
const _page15 = () => import('./pages/selected-work.astro.mjs');
const _page16 = () => import('./pages/team.astro.mjs');
const _page17 = () => import('./pages/thank-you.astro.mjs');
const _page18 = () => import('./pages/what-we-do.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/api/demo.ts", _page2],
    ["src/pages/api/newsletter.ts", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/case-studies/[slug].astro", _page6],
    ["src/pages/case-studies/index.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/demo.astro", _page9],
    ["src/pages/how-it-works.astro", _page10],
    ["src/pages/papers/[slug].astro", _page11],
    ["src/pages/papers/index.astro", _page12],
    ["src/pages/pricing.astro", _page13],
    ["src/pages/publications.astro", _page14],
    ["src/pages/selected-work.astro", _page15],
    ["src/pages/team.astro", _page16],
    ["src/pages/thank-you.astro", _page17],
    ["src/pages/what-we-do.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1988e5ec-6908-4b00-84b4-909d928fc911"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
