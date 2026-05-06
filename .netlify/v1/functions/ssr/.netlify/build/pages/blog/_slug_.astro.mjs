/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from '../../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content__owumToC.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DNrds6Fa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://williamson-analytics.netlify.app");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.seoTitle ?? entry.data.title, "description": entry.data.seoDescription ?? entry.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="section"> <div class="container-shell max-w-4xl"> <div class="eyebrow">${entry.data.category}</div> <h1 class="h1">${entry.data.title}</h1> <p class="mt-6 text-sm text-slate-500"> ${entry.data.author} · ${entry.data.publishDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} </p> <div class="prose prose-slate mt-10 max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </article> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/layouts/BlogPostLayout.astro", void 0);

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "entry": post }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
