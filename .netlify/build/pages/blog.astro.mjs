/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content__owumToC.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHTBP2oC.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { href, title, description, category, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="card block p-8 hover:-translate-y-0.5 hover:border-blue-300"> <div class="text-sm font-medium text-blue-700">${category}</div> <h3 class="mt-3 text-2xl font-semibold text-slate-950">${title}</h3> <p class="mt-4 leading-7 text-slate-600">${description}</p> <div class="mt-6 text-sm text-slate-500">${date}</div> </a>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/cards/BlogCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Blog", "description": "Thought leadership, updates, and operational guidance.", "eyebrow": "Insights" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-6 lg:grid-cols-2"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "href": `/blog/${post.id}/`, "title": post.data.title, "description": post.data.description, "category": post.data.category, "date": post.data.publishDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) })}`)} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/index.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
