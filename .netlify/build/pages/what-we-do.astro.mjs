/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CG41wOsC.mjs';
import { $ as $$Hero } from '../chunks/Hero_BDEPh2qT.mjs';
import { $ as $$FeatureGrid, a as $$CTASection } from '../chunks/CTASection_DvAjgbJR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$FeatureSplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureSplit;
  const {
    eyebrow,
    title,
    body,
    bullets = [],
    reverse = false,
    imageSrc,
    imageAlt = "",
    imageFit = "contain",
    imageCaption,
    imageBgClass = "bg-gradient-to-br from-blue-50 to-slate-100"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div${addAttribute([
    "container-shell grid gap-10 lg:grid-cols-2 lg:items-center",
    reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
  ], "class:list")}> <div class="card p-5 md:p-6 lg:p-8"> <div${addAttribute([
    "group relative overflow-hidden rounded-[2rem] border border-slate-200/80",
    imageSrc ? "min-h-[280px] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" : `aspect-[4/3] ${imageBgClass}`
  ], "class:list")}> ${imageSrc ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_42%)]"></div> <div class="relative flex min-h-[280px] items-center justify-center p-4 md:min-h-[320px] md:p-6"> <img${addAttribute(imageSrc, "src")}${addAttribute(imageAlt, "alt")}${addAttribute([
    "w-full rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition duration-500 group-hover:scale-[1.015]",
    imageFit === "contain" ? "max-h-[330px] object-contain" : "h-full min-h-[280px] object-cover"
  ], "class:list")} loading="lazy"> </div> ${imageCaption && renderTemplate`<div class="border-t border-slate-200/90 bg-slate-50/80 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500"> ${imageCaption} </div>`}` })}` : null} </div> </div> <div> ${eyebrow && renderTemplate`<div class="eyebrow">${eyebrow}</div>`} <h2 class="h2">${title}</h2> <p class="mt-5 text-lg leading-8 text-slate-600">${body}</p> ${bullets.length > 0 && renderTemplate`<ul class="mt-6 space-y-3 text-slate-700"> ${bullets.map((bullet) => renderTemplate`<li class="flex gap-3"><span class="mt-2 h-2 w-2 rounded-full bg-blue-600"></span><span>${bullet}</span></li>`)} </ul>`} </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/FeatureSplit.astro", void 0);

const $$WhatWeDo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Services | Williamson Analytics", "description": "Consulting services spanning neuroimaging, biomedical AI, computational neuroscience, analytics, scientific writing, and research operations." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "eyebrow": "Services", "title": "Specialized consulting for technically difficult scientific, clinical, and translational work", "description": "Williamson Analytics is built for projects that sit between disciplines: imaging methods, machine learning, statistics, infrastructure, scientific writing, and research operations. The service model is intentionally broad so the work can be scoped around the actual bottleneck instead of being forced into a narrow category.", "primaryHref": "/demo", "primaryLabel": "Start a consultation", "secondaryHref": "/contact", "secondaryLabel": "Discuss a project" })} ${maybeRenderHead()}<section class="section bg-white pt-0"> <div class="container-shell grid gap-6 lg:grid-cols-3"> <div class="card-premium p-7"> <div class="stat-kicker">Advisory</div> <h3 class="stat-title">Methods strategy, review, and technical direction</h3> <p class="stat-copy">Shorter engagements for study design, feasibility review, imaging-methods planning, manuscript critique, or scoped technical guidance.</p> </div> <div class="card-premium p-7"> <div class="stat-kicker">Build</div> <h3 class="stat-title">Hands-on pipelines, analytics, modeling, and writing support</h3> <p class="stat-copy">Scoped projects for implementation work such as reproducible analysis, machine learning, QC systems, dashboards, or substantive scientific editing.</p> </div> <div class="card-premium p-7"> <div class="stat-kicker">Collaborative support</div> <h3 class="stat-title">A longer-running methods partner for active programs</h3> <p class="stat-copy">A strong fit for research groups, imaging centers, and multidisciplinary teams that need recurring support across multiple workstreams.</p> </div> </div> </section> ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Advanced MRI and neuroimaging", "title": "Design, optimize, and troubleshoot imaging workflows for research and translational projects", "body": "This service line covers imaging-heavy work that needs both methodological depth and practical implementation judgment. It is a strong fit for protocol planning, advanced diffusion methods, connectometry, multimodal analysis, technical troubleshooting, and scalable quality-control strategy.", "bullets": [
    "MRI protocol development and optimization",
    "Diffusion MRI, tractography, connectometry, and multimodal analysis",
    "QC systems, harmonization strategy, and imaging-methods review"
  ], "imageSrc": "/brain_mapping_figure.webp", "imageAlt": "Representative neuroimaging figure showing brain maps and tract-related visualization", "imageFit": "contain", "imageCaption": "Representative neuroimaging and brain-mapping work" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Machine learning and deep learning", "title": "Build and evaluate ML workflows that are scientifically defensible and practically useful", "body": "Ideal for teams working on image analysis, predictive modeling, interpretable AI, segmentation, or classification workflows who want help balancing innovation with validation, reproducibility, and real-world research constraints.", "bullets": [
    "Imaging classification and segmentation workflows",
    "Interpretable deep learning and model review",
    "Prototype development, evaluation strategy, and validation support"
  ], "reverse": true, "imageSrc": "/imaging_ML_figure.jpg", "imageAlt": "Representative machine learning architecture figure for neuroimaging and biomedical imaging", "imageFit": "contain", "imageCaption": "Representative biomedical imaging and deep-learning workflow" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Statistical modeling and reproducible analytics", "title": "Support for rigorous study design, custom modeling, and publication-ready analytic workflows", "body": "This service is a strong fit for complex datasets, nonstandard methods questions, multivariate designs, power analysis, reproducible reporting, and situations where off-the-shelf statistics are not enough.", "bullets": [
    "Power analysis and design support for difficult studies",
    "Custom statistical modeling and reproducible reporting",
    "Methods support for manuscripts, grants, and internal decision-making"
  ], "imageSrc": "/advanced_stats_figure.png", "imageAlt": "Representative statistical modeling figure showing a smoothed effect estimate and uncertainty band", "imageFit": "contain", "imageCaption": "Representative modeling and advanced analytics figure" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Computational neuroscience and network science", "title": "A distinctive service line for work focused on brain networks, dynamics, and systems-level modeling", "body": "This service is built for connectomics, graph theory, multilayer networks, computational modeling, and multimodal approaches to systems neuroscience questions.", "bullets": [
    "Connectomics and graph-theoretic analysis",
    "Multilayer network and brain dynamics modeling",
    "Computational support for interdisciplinary neuroscience projects"
  ], "reverse": true, "imageSrc": "/multilayer_figure.jpeg", "imageAlt": "Representative multilayer network and computational neuroscience figure", "imageFit": "contain", "imageCaption": "Representative network-science and multilayer modeling figure" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Pipelines, QA/QC, and research infrastructure", "title": "Build robust systems that make research programs easier to run and easier to scale", "body": "This service line covers reproducible pipelines, imaging data infrastructure, review dashboards, automation, and workflow design for labs, imaging cores, and collaborative programs that need more durable technical systems.", "bullets": [
    "Reproducible analysis and QC pipelines",
    "Dashboards, internal tools, and workflow automation",
    "Technical architecture for imaging and analytics programs"
  ], "imageSrc": "/qc_viewer_fig.png", "imageAlt": "Representative QC viewer and review interface for imaging quality control", "imageFit": "contain", "imageCaption": "Representative QC viewer and infrastructure tooling" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "Scientific writing, review, and editing", "title": "Turn technically complex work into clear, persuasive scientific communication", "body": "Many strong technical teams still need help turning difficult methods and results into documents that are publication-ready, reviewer-ready, or proposal-ready. This service line covers manuscript and grant editing, structured review, response-to-reviewers support, and refinement of methods, results, and discussion sections.", "bullets": [
    "Scientific writing and substantive editing",
    "Grant, manuscript, and methods review",
    "Reviewer-response strategy and revision support"
  ], "reverse": true, "imageSrc": "/writing_panel.svg", "imageAlt": "Editorial-style panel representing scientific writing, manuscript review, and revision support", "imageFit": "contain", "imageCaption": "Editorial support for manuscripts, grants, and revision strategy" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "eyebrow": "IRB, protocol, and research operations support", "title": "Support the operational side of imaging and human-subjects research without losing sight of the science", "body": "This service focuses on protocol-development support, IRB-facing methods language, feasibility review, and alignment between ambitious scientific aims and the realities of running imaging studies responsibly.", "bullets": [
    "Imaging-study protocol and methods support",
    "Feasibility and risk-aware planning",
    "Research-operations guidance for collaborative or multisite work"
  ], "imageSrc": "/irb_panel.svg", "imageAlt": "Process-oriented panel representing protocol design, IRB fit, feasibility review, and study operations", "imageFit": "contain", "imageCaption": "Protocol design, feasibility review, and operational alignment" })} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, { "eyebrow": "How clients often use these services", "title": "A broader hybrid model, organized around concrete client needs", "intro": "Most projects cut across categories. These are the kinds of engagements this practice is designed to support.", "items": [
    { title: "Academic and translational research support", body: "Methods strategy, analytic planning, collaborative grant support, and troubleshooting for active studies." },
    { title: "Radiology and imaging consulting", body: "Advanced MRI workflows, connectometry, protocol optimization, brain-health imaging, and QC systems." },
    { title: "Biomedical AI and model development", body: "Image analysis, interpretable machine learning, evaluation pipelines, and model strategy." },
    { title: "Computational neuro methods", body: "Connectomics, graph theory, multilayer networks, and systems-level modeling for neuroscience applications." },
    { title: "Technical infrastructure and tooling", body: "Pipelines, dashboards, review systems, data architecture, and practical automation." },
    { title: "Scientific communication", body: "Editing, review, reviewer responses, and stronger methods/results/discussion sections for high-stakes submissions." }
  ] })} <section class="section bg-white"> <div class="container-shell"> <div class="premium-panel p-8 md:p-10"> <div class="eyebrow-premium">How to choose the right entry point</div> <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"> <div> <h2 class="h2 max-w-2xl">You do not need to know exactly which service line your project belongs to</h2> <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
Many inquiries start with one visible need, such as a manuscript, a pipeline, or a modeling problem, and then expand once the real bottleneck is clearer.
              The intake and consultation process are designed to help scope the work around what will actually move the project forward.
</p> </div> <div class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft"> <div class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Common starting points</div> <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600"> <li>A study needs stronger methods, analysis, or imaging design before data collection advances.</li> <li>A manuscript or grant is technically solid but needs clearer writing, review, or revision strategy.</li> <li>A pipeline, dashboard, or analysis workflow exists but is brittle, slow, or difficult to maintain.</li> <li>A team is exploring machine learning or connectomics and wants an experienced scientific partner.</li> </ul> </div> </div> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Have a project that does not fit neatly into a standard package?", "body": "That is common in consulting. Use the intake flow to describe the scientific question, technical bottleneck, writing need, or operational constraint and then scope the right format together.", "href": "/contact", "label": "Discuss your project" })} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/what-we-do.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/what-we-do.astro";
const $$url = "/what-we-do";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WhatWeDo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
