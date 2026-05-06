/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$SelectedWork = createComponent(($$result, $$props, $$slots) => {
  const engagements = [
    {
      number: "01",
      category: "Neuroimaging methods",
      title: "Advanced neuroimaging pipeline design and troubleshooting",
      challenge: "A research program needed more reliable processing, clearer QC, and a methods strategy that could support grant aims, manuscripts, and downstream interpretation.",
      contribution: "I helped shape the analytic approach, refine the pipeline architecture, identify failure points, and align technical decisions with the actual scientific question rather than just the available tooling.",
      outcome: "The result was a more reproducible workflow, stronger technical confidence, and a clearer path from raw imaging data to interpretable outputs.",
      figure: "/brain_mapping_figure.webp",
      alt: "Representative neuroimaging figure.",
      accent: "text-cyan-300",
      button: "bg-cyan-300 hover:bg-cyan-200"
    },
    {
      number: "02",
      category: "Machine learning",
      title: "Imaging AI feasibility, model design, and interpretation support",
      challenge: "A team wanted to use deep learning on biomedical imaging data but needed help deciding whether the problem was truly ML-ready, how the model should be structured, and how to present the work responsibly.",
      contribution: "I supported task framing, model-design decisions, evaluation strategy, interpretability planning, and the translation of technical choices into manuscript-ready scientific language.",
      outcome: "The engagement produced a more defensible machine-learning workflow and reduced the risk of building a model that looked impressive but would not hold up scientifically.",
      figure: "/imaging_ML_figure.jpg",
      alt: "Representative imaging machine learning figure.",
      accent: "text-emerald-300",
      button: "bg-emerald-400 hover:bg-emerald-300"
    },
    {
      number: "03",
      category: "Statistics and modeling",
      title: "Statistical modeling for complex imaging and translational datasets",
      challenge: "A project involved nontrivial structure in the data and needed more than a standard off-the-shelf analysis plan.",
      contribution: "I helped design a modeling strategy that matched the scientific question, emphasized reproducibility, and made the resulting figures and interpretation usable for collaborators, manuscripts, and presentations.",
      outcome: "The final deliverables were clearer, more statistically coherent, and easier for the broader team to defend and communicate.",
      figure: "/advanced_stats_figure.png",
      alt: "Representative advanced statistical modeling figure.",
      accent: "text-fuchsia-300",
      button: "bg-fuchsia-400 hover:bg-fuchsia-300"
    },
    {
      number: "04",
      category: "Computational neuroscience",
      title: "Network neuroscience and multilayer analytic support",
      challenge: "A neuroscience project needed methods support that sat between theory, network analysis, and practical implementation.",
      contribution: "I helped translate systems-level questions into a tractable computational workflow, supported graph and multilayer analysis decisions, and clarified how the outputs should be interpreted scientifically.",
      outcome: "The project gained a more coherent link between computational methods, biological interpretation, and publishable results.",
      figure: "/multilayer_figure.jpeg",
      alt: "Representative multilayer network neuroscience figure.",
      accent: "text-cyan-300",
      button: "bg-cyan-300 hover:bg-cyan-200"
    },
    {
      number: "05",
      category: "Infrastructure and QC",
      title: "Research pipeline, QA/QC, and internal tool development",
      challenge: "A team needed not just analysis, but a usable system for reviewing outputs, flagging problems, and making a complex workflow easier to run repeatedly.",
      contribution: "I worked on the logic, structure, and user-facing organization of the pipeline and QC process so the system supported both technical rigor and day-to-day operational use.",
      outcome: "The result was a more usable internal workflow with better visibility into quality issues and fewer avoidable bottlenecks.",
      figure: "/qc_viewer_fig.png",
      alt: "Representative quality-control viewer figure.",
      accent: "text-emerald-300",
      button: "bg-emerald-400 hover:bg-emerald-300"
    },
    {
      number: "06",
      category: "Scientific communication",
      title: "Manuscript, grant, and reviewer-response refinement",
      challenge: "A technically strong project still needed clearer writing, tighter logic, and more persuasive framing for manuscript or grant submission.",
      contribution: "I supported methods/results/discussion refinement, scientific editing, reviewer-response strategy, and the translation of complex technical work into cleaner prose.",
      outcome: "The work became easier to understand, easier to defend, and better aligned with the expectations of high-stakes scientific review.",
      figure: "/writing_panel.svg",
      alt: "Representative scientific writing and editing panel.",
      accent: "text-fuchsia-300",
      button: "bg-fuchsia-400 hover:bg-fuchsia-300"
    }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Selected Work", "description": "Representative consulting engagements showing how Williamson Analytics supports technically demanding work across neuroimaging, machine learning, analytics, infrastructure, and scientific communication.", "eyebrow": "Selected work" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="section pt-0"> <div class="container-shell dark-stage network-shell overflow-hidden rounded-[2.2rem] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-8 md:py-12"> <div class="mx-auto max-w-5xl text-center"> <div class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Representative engagements</div> <h2 class="mt-4 text-4xl font-semibold tracking-tight text-fuchsia-400 md:text-6xl">Selected work that shows how the practice actually helps</h2> <p class="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-200 md:text-xl">\nThese examples are framed around the kinds of problems clients bring in, the role I play, and the practical outcomes that matter. They are representative rather than client-named, but they are meant to show the shape of real engagements.\n</p> </div> </div> <div class="container-shell mt-10 grid gap-6 md:grid-cols-3"> <div class="surface-muted p-6 text-center reveal-up"> <div class="kicker-label">Challenge</div> <p class="mt-3 text-sm leading-7 text-slate-600">What problem the team was actually facing, whether scientific, technical, operational, or editorial.</p> </div> <div class="surface-muted p-6 text-center reveal-up reveal-delay-1"> <div class="kicker-label">Contribution</div> <p class="mt-3 text-sm leading-7 text-slate-600">Where I contributed across methods, modeling, pipelines, writing, strategy, and execution.</p> </div> <div class="surface-muted p-6 text-center reveal-up reveal-delay-2"> <div class="kicker-label">Outcome</div> <p class="mt-3 text-sm leading-7 text-slate-600">What the engagement produced: clearer decisions, stronger workflows, better communication, and more defensible outputs.</p> </div> </div> <div class="container-shell mt-10 space-y-8"> ', ` </div> <div class="container-shell mt-10"> <div class="premium-panel p-8 md:p-10 reveal-up"> <div class="eyebrow-premium">How to use this page</div> <h3 class="h3 max-w-3xl">Look for the work pattern, not a perfectly identical project title</h3> <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
Many consulting projects blend imaging methods, statistics, software, scientific writing, and operational planning. If your project spans multiple categories, that is usually a sign it is a good fit for a short scoping conversation.
</p> </div> </div> </section> <script>
    const items = Array.from(document.querySelectorAll('.reveal-up'));
    if (items.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16, rootMargin: '0px 0px -30px 0px' });
      items.forEach((item) => observer.observe(item));
    }
  <\/script> `])), maybeRenderHead(), engagements.map((item, index) => renderTemplate`<article${addAttribute(`premium-panel overflow-hidden p-0 reveal-up ${index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""}`, "class")}> <div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]"> <div class="p-8 md:p-10"> <div class="flex items-center justify-between gap-4"> <div> <div${addAttribute(`text-sm font-semibold uppercase tracking-[0.22em] ${item.accent}`, "class")}>${item.category}</div> <h3 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950">${item.title}</h3> </div> <div class="dark-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">${item.number}</div> </div> <div class="mt-8 grid gap-5"> <div class="rounded-[1.2rem] border border-slate-200 bg-white px-5 py-4 shadow-card"> <div class="kicker-label">Challenge</div> <p class="mt-2 text-sm leading-7 text-slate-700">${item.challenge}</p> </div> <div class="rounded-[1.2rem] border border-slate-200 bg-white px-5 py-4 shadow-card"> <div class="kicker-label">Contribution</div> <p class="mt-2 text-sm leading-7 text-slate-700">${item.contribution}</p> </div> <div class="rounded-[1.2rem] border border-slate-200 bg-white px-5 py-4 shadow-card"> <div class="kicker-label">Outcome</div> <p class="mt-2 text-sm leading-7 text-slate-700">${item.outcome}</p> </div> </div> </div> <div class="border-t border-slate-200 bg-slate-50 p-6 lg:border-l lg:border-t-0 lg:p-8"> <div class="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-card"> <img${addAttribute(item.figure, "src")}${addAttribute(item.alt, "alt")} class="h-full min-h-[300px] w-full object-contain bg-white p-3"> </div> <div class="mt-5 flex items-center justify-between gap-4"> <div class="text-sm leading-6 text-slate-500">Representative visual anchor for this type of engagement.</div> <a href="/contact/"${addAttribute(`inline-flex shrink-0 items-center justify-center rounded-2xl px-4 py-2.5 text-center text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 ${item.button}`, "class")}>Discuss a similar project</a> </div> </div> </div> </article>`)) })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/selected-work.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/selected-work.astro";
const $$url = "/selected-work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SelectedWork,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
