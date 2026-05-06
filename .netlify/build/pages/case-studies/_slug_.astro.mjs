/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content__owumToC.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DNrds6Fa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
async function getStaticPaths() {
  const caseStudies = await getCollection("case-studies");
  return caseStudies.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${entry.data.title} | Case Study`, "description": entry.data.problem }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container-shell max-w-4xl"> <div class="eyebrow">${entry.data.clientType}</div> <h1 class="h1">${entry.data.title}</h1> <div class="mt-10 grid gap-8"> <article class="card p-8"> <h2 class="text-2xl font-semibold text-slate-950">Problem</h2> <p class="mt-4 leading-8 text-slate-600">${entry.data.problem}</p> </article> <article class="card p-8"> <h2 class="text-2xl font-semibold text-slate-950">Solution</h2> <p class="mt-4 leading-8 text-slate-600">${entry.data.solution}</p> </article> <article class="card p-8"> <h2 class="text-2xl font-semibold text-slate-950">Outcomes</h2> <ul class="mt-4 space-y-3 text-slate-600"> ${entry.data.outcomes.map((outcome) => renderTemplate`<li>• ${outcome}</li>`)} </ul> <a${addAttribute(entry.data.ctaUrl, "href")} class="btn-primary mt-8">${entry.data.ctaLabel}</a> </article> </div> </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/[slug].astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/[slug].astro";
const $$url = "/case-studies/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
