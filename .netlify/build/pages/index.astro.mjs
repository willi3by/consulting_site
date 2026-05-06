/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, f as renderScript, r as renderComponent } from '../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DNrds6Fa.mjs';
import { $ as $$Hero } from '../chunks/Hero_Bb_Db31d.mjs';
import 'clsx';
import { $ as $$FeatureGrid, a as $$CTASection } from '../chunks/CTASection_C6iz81Gz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://williamson-analytics.netlify.app");
const $$TrustBand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TrustBand;
  const { title = "Best for organizations that need expert judgment plus hands-on delivery", items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="pb-8 md:pb-12"> <div class="container-shell"> <div class="premium-panel px-6 py-6 md:px-8"> <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"> <div> <div class="eyebrow-premium">Why this model works</div> <h2 class="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">${title}</h2> </div> <div class="grid gap-3 sm:grid-cols-2"> ${items.map((item) => renderTemplate`<div class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-soft">${item}</div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/TrustBand.astro", void 0);

const $$Astro$1 = createAstro("https://williamson-analytics.netlify.app");
const $$ProofGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProofGrid;
  const { eyebrow, title, intro, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section bg-white"> <div class="container-shell"> ${eyebrow && renderTemplate`<div class="eyebrow-premium">${eyebrow}</div>`} <div class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"> <div> <h2 class="h2 max-w-2xl">${title}</h2> ${intro && renderTemplate`<p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">${intro}</p>`} <div class="mt-8 rounded-[1.8rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-soft"> <div class="editorial-kicker text-cyan-300">Why this model converts well</div> <p class="mt-4 text-lg leading-8 text-slate-200">It gives technically sophisticated clients confidence that the work will be rigorous, usable, and clearly communicated—not just statistically correct.</p> </div> </div> <div class="grid gap-5 md:grid-cols-2"> ${items.map((item) => renderTemplate`<article class="relative overflow-hidden rounded-[1.85rem] border border-slate-200/80 bg-white/90 p-7 shadow-card"> <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/70 via-cyan-500/60 to-transparent"></div> <div class="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">${item.label}</div> <h3 class="mt-3 text-[1.35rem] font-semibold leading-tight tracking-tight text-slate-950">${item.title}</h3> <p class="mt-4 leading-7 text-slate-600">${item.body}</p> </article>`)} </div> </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/ProofGrid.astro", void 0);

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$EngagementSteps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EngagementSteps;
  const { eyebrow, title, steps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container-shell"> ${eyebrow && renderTemplate`<div class="eyebrow-premium">${eyebrow}</div>`} <h2 class="h2 max-w-3xl">${title}</h2> <div class="mt-10 grid gap-5 lg:grid-cols-4"> ${steps.map((step, idx) => renderTemplate`<article class="card-premium p-7"> <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-sm font-semibold text-blue-700">0${idx + 1}</div> <h3 class="mt-5 text-xl font-semibold text-slate-950">${step.title}</h3> <p class="mt-4 leading-7 text-slate-600">${step.body}</p> </article>`)} </div> </div> </section>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/sections/EngagementSteps.astro", void 0);

const $$NewsletterForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form name="newsletter" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" class="card flex flex-col gap-4 p-8 md:flex-row md:items-center" data-netlify-form> <input type="hidden" name="form-name" value="newsletter"> <input type="hidden" name="subject" value="New newsletter signup from Williamson Research Consulting"> <p class="hidden"> <label>
Don’t fill this out if you’re human:
<input name="bot-field"> </label> </p> <input class="input md:flex-1" type="email" name="email" placeholder="Enter your email for occasional updates" required> <button class="btn-primary" type="submit">Subscribe</button> </form> ${renderScript($$result, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/NewsletterForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/NewsletterForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Williamson Analytics | Advanced neuroimaging, biomedical AI, and research strategy consulting", "description": "Consulting at the intersection of neuroimaging, biomedical data science, machine learning, computational neuroscience, scientific writing, and research operations." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "eyebrow": "Advanced neuroimaging, biomedical AI, and research strategy consulting", "title": "Advanced neuroimaging, biomedical AI, and research strategy consulting", "description": "I help academic, clinical, and translational teams design stronger studies, build better analytic pipelines, and turn complex imaging and biomedical data into credible, actionable insight.", "primaryHref": "/demo", "primaryLabel": "Start a consultation", "secondaryHref": "/what-we-do", "secondaryLabel": "Explore services" })} ${renderComponent($$result2, "TrustBand", $$TrustBand, { "title": "For teams who need more than a statistician, more than a programmer, and more than a generic AI consultant", "items": [
    "Neuroimaging, analytics, machine learning, scientific writing, and research strategy can all live inside the same engagement when the problem requires it.",
    "Work is structured around the stage of the project: concept, protocol, active study, analysis, manuscript, grant, infrastructure, or technical troubleshooting.",
    "Engagements can be advisory, build-focused, writing/review-oriented, or ongoing collaborative support depending on what will move the work forward fastest.",
    "The goal is not just to run an analysis, but to improve scientific judgment, reduce avoidable errors, and leave behind usable systems and clearer outputs."
  ] })} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, { "eyebrow": "Core services", "title": "Services built for complex scientific, clinical, and translational work", "intro": "Williamson Analytics supports technically demanding projects that sit at the boundary of imaging science, statistical modeling, software infrastructure, AI, and high-stakes scientific communication.", "items": [
    { title: "Advanced MRI and neuroimaging", body: "Protocol design, diffusion MRI, connectometry, tractography, multimodal analysis, quality control systems, and troubleshooting for research and translational imaging projects." },
    { title: "Machine learning and deep learning", body: "Model development, evaluation, interpretable AI workflows, segmentation and classification pipelines, and practical guidance on when ML is and is not the right tool." },
    { title: "Statistical modeling and reproducible analytics", body: "Study design, power analysis, multivariate and nonparametric modeling, reproducible reporting, and analytic support for grants, manuscripts, and internal decision-making." },
    { title: "Computational neuroscience and network science", body: "Connectomics, graph-theoretic analysis, multilayer networks, computational modeling, and systems-level approaches to brain and behavior data." },
    { title: "Pipelines, QA/QC, and research infrastructure", body: "Reproducible workflows, imaging data systems, dashboards, automation, and technical architecture for scalable research operations." },
    { title: "Scientific writing, review, and editing", body: "Manuscript refinement, grant editing, methods/results/discussion support, reviewer-response development, and high-stakes scientific communication." },
    { title: "IRB and research operations expertise", body: "Protocol-development support, feasibility review, risk-aware methods planning, and alignment between scientific aims and operational execution." }
  ] })} ${renderComponent($$result2, "ProofGrid", $$ProofGrid, { "eyebrow": "Why Williamson Analytics", "title": "Breadth where it matters. Depth where it counts.", "intro": "My background combines faculty-level neuroimaging and neuroscience expertise with hands-on work in analytics, infrastructure, AI, scientific communication, and study operations.", "items": [
    {
      label: "Scientific leadership",
      title: "Grounded in active faculty, imaging leadership, and funded collaborative work",
      body: "This practice is informed by active roles across Radiology, Neuroscience, imaging leadership, teaching, grant development, and research operations rather than by a narrow single-specialty consulting model."
    },
    {
      label: "Methods depth",
      title: "A strong fit for difficult projects that cut across methods, software, and communication",
      body: "The differentiator is the ability to move between MRI methods, analysis, machine learning, software tooling, and publication-quality scientific writing inside the same project."
    },
    {
      label: "Operational realism",
      title: "Designed for the actual constraints of research programs, cores, and multidisciplinary teams",
      body: "Many engagements involve not just technical choices, but feasibility, workflow design, stakeholder alignment, revision cycles, and the realities of regulated human-subjects research."
    },
    {
      label: "Scientific communication",
      title: "Technical work paired with manuscript, grant, editing, and reviewer-response support",
      body: "Many projects do not fail because the analysis is impossible. They fail because the methods are unclear, the workflow is brittle, or the scientific narrative never becomes persuasive."
    }
  ] })} ${maybeRenderHead()}<section class="section bg-white"> <div class="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"> <div> <div class="eyebrow-premium">Who I work with</div> <h2 class="h2 max-w-2xl">Built for teams working on complex data, difficult methods questions, or high-stakes scientific deliverables</h2> <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">I work best with groups that need a combination of technical depth, scientific judgment, and practical delivery rather than a narrow one-skill service model.</p> <div class="mt-6 grid gap-4 sm:grid-cols-2"> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Academic investigators and research labs</div> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Radiology, neurology, and neuroimaging groups</div> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Clinical and translational research teams</div> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Neuroscience and psychology researchers</div> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Imaging cores and research centers</div> <div class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft">Health-tech and biomedical AI organizations</div> </div> </div> <div class="premium-panel p-8"> <div class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected credibility</div> <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-700"> <li>Faculty appointments in Radiology and Neuroscience.</li> <li>Scientific Director of an imaging research, development, and innovation center.</li> <li>Teaching in Artificial Intelligence in Radiology, Biostatistics, and Computational Neuroscience/NeuroAI.</li> <li>Current service on the Institutional Review Board, MRI Safety Committee, and Radiation Safety Committee.</li> <li>Publications spanning neuroimaging, stroke, network neuroscience, imaging methods, and biomedical AI.</li> </ul> </div> </div> <div class="container-shell mt-10"> <div class="dark-stage network-shell overflow-hidden rounded-[2.2rem] px-6 py-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-8 md:py-10"> <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"> <div> <div class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Featured proof</div> <h2 class="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">An editorial-style bridge between services, selected work, and publications</h2> <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-200">A quick way to move from services to representative engagements to publications, without losing the thread of how the practice works.</p> </div> <div class="grid gap-4 text-center md:grid-cols-3"> <a href="/selected-work" class="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"> <div class="editorial-kicker text-cyan-300">Selected work</div> <div class="mt-3 text-xl font-semibold">Representative engagements</div> <p class="mt-3 text-sm leading-7 text-slate-300">Methods, infrastructure, AI, and scientific writing framed as real project entry points.</p> </a> <a href="/publications" class="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"> <div class="editorial-kicker text-fuchsia-300">Publications</div> <div class="mt-3 text-xl font-semibold">Scholarly output and works in progress</div> <p class="mt-3 text-sm leading-7 text-slate-300">A visible record of methods depth, collaboration, and scientific communication.</p> </a> <a href="/blog" class="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"> <div class="editorial-kicker text-emerald-300">Insights</div> <div class="mt-3 text-xl font-semibold">Methods notes and commentary</div> <p class="mt-3 text-sm leading-7 text-slate-300">Shorter pieces on study design, analysis decisions, and scientific strategy.</p> </a> </div> </div> </div> </div> </section> ${renderComponent($$result2, "EngagementSteps", $$EngagementSteps, { "eyebrow": "How engagements typically work", "title": "Flexible enough for real research work, structured enough to reduce ambiguity", "steps": [
    { title: "Initial consultation", body: "Clarify the problem, project stage, stakeholders, and whether advisory support, build work, writing/editing, or a longer collaboration is the best fit." },
    { title: "Scoping and approach", body: "Define deliverables, data or materials needed, timeline, review checkpoints, and what success should look like for the work." },
    { title: "Technical and scientific delivery", body: "Deliver the right mix of analysis, methods review, pipeline development, strategic guidance, scientific writing support, or operational planning." },
    { title: "Handoff and next steps", body: "Leave you with usable outputs, cleaner documentation, stronger language, and a practical plan for implementation, revision, or follow-on support." }
  ] })} <section class="section bg-white"> <div class="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"> <div> <div class="eyebrow-premium">Insights and thought leadership</div> <h2 class="h2 max-w-2xl">Use the site to show how you think, not just what you offer</h2> <p class="mt-5 max-w-xl text-lg leading-8 text-slate-600">
Use this section for short methods notes, technical essays, and commentary that help prospective clients understand how you think before they reach out.
</p> </div> <div class="premium-panel p-8"> <div class="grid gap-5 md:grid-cols-2"> <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"> <div class="text-sm font-medium text-blue-700">Good uses for this section</div> <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600"> <li><a href="/publications" class="text-blue-700 hover:underline">Selected publications and current manuscripts</a></li> <li>Methods explainers and implementation notes</li> <li><a href="/selected-work" class="text-blue-700 hover:underline">Representative engagements and project narratives</a></li> <li>Grant and manuscript strategy insights</li> <li>Commentary on imaging, AI, and computational methods</li> </ul> </div> ${renderComponent($$result2, "NewsletterForm", $$NewsletterForm, {})} </div> </div> </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, { "title": "Need help with a technically difficult imaging, analytics, or scientific communication problem?", "body": "Let\u2019s discuss your study, pipeline, manuscript, grant, or research program and determine whether a short advisory engagement, build-focused project, writing/editing support, or ongoing collaboration is the best fit.", "href": "/contact", "label": "Start the conversation" })} ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/index.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
