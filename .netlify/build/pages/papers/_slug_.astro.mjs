/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, d as renderSlot } from '../../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_CYS6YNYr.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CG41wOsC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://williamson-analytics.netlify.app");
const $$PaperLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PaperLayout;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.seoTitle ?? entry.data.title, "description": entry.data.seoDescription ?? entry.data.summary }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="section"> <div class="container-shell max-w-4xl"> <div class="eyebrow">${entry.data.journal}</div> <h1 class="h1">${entry.data.title}</h1> <p class="mt-6 text-sm text-slate-500"> ${entry.data.authors.join(", ")} · ${entry.data.publishDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} </p> <a${addAttribute(entry.data.downloadUrl, "href")} class="btn-primary mt-8">Download PDF</a> <div class="prose prose-slate mt-10 max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </article> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/layouts/PaperLayout.astro", void 0);

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
async function getStaticPaths() {
  const papers = await getCollection("papers");
  return papers.map((paper) => ({ params: { slug: paper.id }, props: { paper } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { paper } = Astro2.props;
  const { Content } = await renderEntry(paper);
  return renderTemplate`${renderComponent($$result, "PaperLayout", $$PaperLayout, { "entry": paper }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/[slug].astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/[slug].astro";
const $$url = "/papers/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
