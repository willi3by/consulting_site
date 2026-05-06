import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_DNrds6Fa.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description, eyebrow } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero section pb-12 md:pb-16"> <div class="container-shell"> <div class="masthead-shell px-8 py-10 md:px-10 md:py-12"> <div class="max-w-5xl"> ${eyebrow && renderTemplate`<div class="eyebrow-premium">${eyebrow}</div>`} <h1 class="h1 max-w-4xl">${title}</h1> ${description && renderTemplate`<p class="lead mt-6 max-w-3xl">${description}</p>`} </div> </div> </div> </section> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
