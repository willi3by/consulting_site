/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content__owumToC.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHTBP2oC.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$PaperCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PaperCard;
  const { href, title, summary, journal, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card p-8"> <div class="text-sm font-medium text-blue-700">${journal}</div> <h3 class="mt-3 text-2xl font-semibold text-slate-950">${title}</h3> <p class="mt-4 leading-7 text-slate-600">${summary}</p> <div class="mt-6 flex items-center justify-between gap-4"> <span class="text-sm text-slate-500">${date}</span> <a${addAttribute(href, "href")} class="btn-secondary text-sm">Download</a> </div> </article>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/cards/PaperCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const papers = (await getCollection("papers")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Research notes", "description": "Downloadable summaries, methods notes, and credibility assets for collaborators and prospective clients.", "eyebrow": "Research" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-6 lg:grid-cols-2"> ${papers.map((paper) => renderTemplate`${renderComponent($$result2, "PaperCard", $$PaperCard, { "href": `/papers/${paper.id}/`, "title": paper.data.title, "summary": paper.data.summary, "journal": paper.data.journal, "date": paper.data.publishDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) })}`)} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/index.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/index.astro";
const $$url = "/papers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
