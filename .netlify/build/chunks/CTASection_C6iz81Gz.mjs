import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, e as addAttribute } from './astro/server_H9DgDCgV.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro("https://williamson-analytics.netlify.app");
const $$FeatureGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureGrid;
  const { eyebrow, title, intro, items } = Astro2.props;
  const accents = ["from-cyan-500 to-blue-600", "from-fuchsia-500 to-violet-600", "from-emerald-500 to-cyan-500"];
  return renderTemplate`${maybeRenderHead()}<section class="section bg-white/55"> <div class="container-shell"> ${eyebrow && renderTemplate`<div class="eyebrow-premium">${eyebrow}</div>`} <div class="section-heading-wrap"> <h2 class="h2 max-w-3xl">${title}</h2> ${intro && renderTemplate`<p class="max-w-3xl text-lg leading-8 text-slate-600">${intro}</p>`} </div> <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"> ${items.map((item, index) => renderTemplate`<article class="feature-card-accent group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"> <div${addAttribute(`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accents[index % accents.length]} opacity-80`, "class")}></div> <div class="flex items-center justify-between gap-4"> <div class="kicker-label">${String(index + 1).padStart(2, "0")}</div> <span${addAttribute(`inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-gradient-to-br ${accents[index % accents.length]} px-2 text-sm font-semibold text-white shadow-card`, "class")}>${index + 1}</span> </div> <h3 class="mt-4 text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-950">${item.title}</h3> <p class="mt-4 leading-7 text-slate-600">${item.body}</p> </article>`)} </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/FeatureGrid.astro", void 0);

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASection;
  const { title, body, href = "/demo", label = "Start a consultation" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container-shell"> <div class="card overflow-hidden bg-slate-950 p-10 text-white md:p-14"> <div class="max-w-3xl"> <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">${title}</h2> <p class="mt-5 text-lg leading-8 text-slate-300">${body}</p> <a${addAttribute(href, "href")} class="btn-secondary mt-8 bg-white text-slate-950 hover:bg-slate-100">${label}</a> </div> </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/CTASection.astro", void 0);

export { $$FeatureGrid as $, $$CTASection as a };
