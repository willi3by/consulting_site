/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Thank you", "description": "Your message has been received.", "eyebrow": "Message received" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell max-w-3xl"> <div class="card p-8 md:p-10"> <h2 class="text-3xl font-semibold text-slate-950">Thank you — your message was received.</h2> <p class="mt-5 leading-8 text-slate-600">
I appreciate you reaching out. I’ll review your message and follow up soon.
</p> <a class="btn-primary mt-8 inline-flex" href="/">Return home</a> </div> </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/thank-you.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
