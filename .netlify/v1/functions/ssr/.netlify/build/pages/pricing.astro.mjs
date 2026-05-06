/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Engagement Models", "description": "Engagement models for advisory work, scoped projects, writing/editing support, and retained scientific consulting.", "eyebrow": "Engagement models" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-6 lg:grid-cols-4"> ${[
    ["Advisory", "Starting at $750", "Best for focused strategy calls, technical review, methods troubleshooting, or expert input on a specific decision.", ["Discovery call", "Fast turnaround", "Optional written summary"]],
    ["Scoped project", "Custom proposal", "Best for analyses, pipeline development, reproducible systems, protocol work, dashboards, or implementation-heavy technical support.", ["Defined deliverables", "Milestones and timeline", "Clear handoff"]],
    ["Writing / review", "Custom proposal", "Best for manuscript editing, grant review, methods/results/discussion refinement, and reviewer-response support.", ["Substantive feedback", "Revision rounds", "Structured scientific review"]],
    ["Retained support", "Monthly retainer", "Best for teams that need ongoing strategy, collaborative methods support, scientific review, or iterative technical delivery.", ["Reserved capacity", "Recurring check-ins", "Flexible support"]]
  ].map(([name, price, body, bullets]) => renderTemplate`<article class="card p-8"> <h2 class="text-2xl font-semibold text-slate-950">${name}</h2> <div class="mt-4 text-4xl font-semibold text-blue-700">${price}</div> <p class="mt-5 leading-7 text-slate-600">${body}</p> <ul class="mt-6 space-y-3 text-slate-700"> ${bullets.map((bullet) => renderTemplate`<li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-blue-600"></span><span>${bullet}</span></li>`)} </ul> <a href="/demo" class="btn-primary mt-8">Start a consultation</a> </article>`)} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/pricing.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
