/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHTBP2oC.mjs';
import { $ as $$FeatureGrid, a as $$CTASection } from '../chunks/CTASection_C6iz81Gz.mjs';
export { renderers } from '../renderers.mjs';

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "How We Work", "description": "A consulting process built around discovery, scope, technical delivery, scientific review, and useful handoff.", "eyebrow": "Process" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, { "title": "A workflow designed for complex scientific and technical projects", "intro": "Not every engagement looks the same, but the process is meant to keep ambiguity manageable and make it clear what happens next. It works for advisory calls, technical builds, editing/review support, and longer collaborative relationships.", "items": [
    { title: "1. Discovery", body: "Clarify the problem, scientific context, stakeholders, constraints, and the outcome that would actually be useful." },
    { title: "2. Scoping", body: "Define deliverables, materials needed, timeline, review cadence, and the right engagement format." },
    { title: "3. Diagnostic review", body: "Review existing data, code, workflows, manuscripts, grant drafts, protocols, or technical assets as needed." },
    { title: "4. Deliver the work", body: "Provide the relevant mix of strategy, analysis, implementation, modeling, writing/editing, or operational planning." },
    { title: "5. Review and refine", body: "Iterate on outputs, answer questions, stress-test the work, and adapt deliverables to real-world use." },
    { title: "6. Handoff and next steps", body: "Leave you with cleaner assets, clearer decisions, and a practical plan for implementation or follow-on support." }
  ] })} ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Not every engagement needs a large build", "body": "This structure works equally well for one-off advisory conversations, technical reviews, manuscript editing, multi-week implementation projects, and retained scientific support.", "href": "/pricing", "label": "View engagement models" })} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/how-it-works.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/how-it-works.astro";
const $$url = "/how-it-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowItWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
