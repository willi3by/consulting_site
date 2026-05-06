/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_CYS6YNYr.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$CaseStudyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudyCard;
  const { href, title, clientType, problem } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group relative block overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white/90 p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"> <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-transparent opacity-70"></div> <div class="text-sm font-medium text-blue-700">${clientType}</div> <h3 class="mt-3 text-[1.7rem] font-semibold leading-tight tracking-tight text-slate-950">${title}</h3> <p class="mt-4 leading-7 text-slate-600">${problem}</p> <div class="mt-6 font-medium text-slate-800">Read engagement overview <span class="inline-block transition group-hover:translate-x-1">→</span></div> </a>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/cards/CaseStudyCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const caseStudies = await getCollection("case-studies");
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Representative Engagements", "description": "Representative consulting engagements and selected work.", "eyebrow": "Selected work" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell"> <div class="mb-8 max-w-3xl"> <h2 class="h2">Representative engagements</h2> <p class="mt-5 text-lg leading-8 text-slate-600">
These examples show the kinds of projects Williamson Analytics supports across imaging methods,
          analytics, scientific writing, machine learning, and research operations.
</p> </div> <div class="grid gap-6 lg:grid-cols-2"> ${caseStudies.map((entry) => renderTemplate`${renderComponent($$result2, "CaseStudyCard", $$CaseStudyCard, { "href": `/case-studies/${entry.id}/`, "title": entry.data.title, "clientType": entry.data.clientType, "problem": entry.data.problem })}`)} </div> </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/index.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/index.astro";
const $$url = "/case-studies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
