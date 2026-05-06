/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_H9DgDCgV.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content__owumToC.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_CHTBP2oC.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { name, role, bio, linkedin, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card p-8"> <div class="mb-5 h-16 w-16 rounded-2xl bg-slate-100"></div> <h3 class="text-xl font-semibold text-slate-950">${name}</h3> <p class="mt-2 text-sm font-medium text-blue-700">${role}</p> <p class="mt-4 leading-7 text-slate-600">${bio}</p> <div class="mt-6 flex gap-4 text-sm"> ${linkedin && renderTemplate`<a${addAttribute(linkedin, "href")} class="font-medium text-slate-700 hover:text-blue-700">LinkedIn</a>`} ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")} class="font-medium text-slate-700 hover:text-blue-700">Email</a>`} </div> </article>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/cards/TeamCard.astro", void 0);

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const team = (await getCollection("team")).sort((a, b) => a.data.sortOrder - b.data.sortOrder);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "About", "description": "About Brady J. Williamson, PhD and the hybrid consulting model behind Williamson Analytics.", "eyebrow": "About" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"> <div class="premium-panel p-8 md:p-10"> <div class="eyebrow-premium">Williamson Analytics</div> <h2 class="h2 max-w-3xl">A hybrid consulting practice built for research teams working where methods, infrastructure, and scientific judgment intersect</h2> <p class="mt-5 text-lg leading-8 text-slate-600">
I’m Brady J. Williamson, PhD, a researcher and consultant working at the intersection of neuroimaging, biomedical data science,
          machine learning, computational neuroscience, research strategy, and scientific communication. Williamson Analytics is designed for teams
          that need more than a narrow one-skill service model, especially when projects involve imaging-heavy methods, complex data,
          manuscript or grant pressure, operational complexity, or technically difficult implementation decisions.
</p> <p class="mt-5 text-lg leading-8 text-slate-600">
The practice is intentionally broad, but still cohesive. The goal is to bring faculty-level methods expertise together with hands-on execution,
          whether the need is study design, modeling, pipelines, review systems, scientific writing, or support translating ambitious ideas into work that is
          rigorous, practical, and ready to move forward.
</p> </div> <div class="card-premium p-8 md:p-10"> <div class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected credentials</div> <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-700"> <li>Assistant Professor, Department of Radiology, University of Cincinnati</li> <li>Scientific Director, Imaging Research, Development, and Innovation Center</li> <li>Director of Medical Student Research, Department of Radiology</li> <li>Faculty, Neuroscience Graduate Program; Adjunct Assistant Professor, Department of Neuroscience</li> <li>Current service on the Institutional Review Board, MRI Safety Committee, and Radiation Safety Committee</li> <li>Teaching in Artificial Intelligence in Radiology, Biostatistics, and Computational Neuroscience/NeuroAI</li> </ul> </div> </div> <div class="container-shell mt-10 grid gap-6 lg:grid-cols-3"> <div class="card-premium p-7"> <div class="stat-kicker">Methods depth</div> <h3 class="stat-title">Breadth across imaging, modeling, and quantitative methods</h3> <p class="stat-copy">Experience across dMRI, fMRI, structural MRI, MEG, EEG, graph theory, multilayer networks, machine learning, deep learning, and image and signal processing.</p> </div> <div class="card-premium p-7"> <div class="stat-kicker">Execution</div> <h3 class="stat-title">Built for real technical delivery, not just advice</h3> <p class="stat-copy">Hands-on work building imaging infrastructure, optimizing workflows, developing protocols, and creating reproducible systems and analysis tools for collaborative programs.</p> </div> <div class="card-premium p-7"> <div class="stat-kicker">Scientific communication</div> <h3 class="stat-title">Strong fit for writing, review, and revision-heavy work</h3> <p class="stat-copy">A practical partner for manuscripts, grants, methods-heavy writing, reviewer responses, and editorial refinement where clarity and technical precision matter.</p> </div> </div> <div class="container-shell mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"> <div class="card p-8 md:p-10"> <div class="eyebrow">How I tend to work</div> <h3 class="text-2xl font-semibold text-slate-950">Designed for projects that do not fit neatly into a single discipline</h3> <p class="mt-5 leading-8 text-slate-600">
Many consulting engagements begin with one obvious need, such as a model, an analysis plan, a manuscript, or a technical workflow.
          In practice, the bottleneck is often broader. A modeling problem may actually be a study-design problem. A writing problem may really be a methods problem.
          A pipeline problem may also require scientific review, stakeholder communication, and operational redesign.
</p> <p class="mt-5 leading-8 text-slate-600">
That is why Williamson Analytics is structured as a hybrid practice. The work can move between advisory support, hands-on build work,
          scientific writing and editing, and longer collaborative support depending on what will actually improve the project.
</p> </div> <div class="premium-panel p-8 md:p-10"> <div class="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected publication and funding themes</div> <ul class="mt-5 space-y-4 text-sm leading-7 text-slate-700"> <li>Network neuroscience, connectometry, and language systems</li> <li>Stroke imaging, brain health, and translational neuroimaging</li> <li>Machine learning and interpretable deep learning in radiology</li> <li>Pediatric neuroimaging and developmental connectivity</li> <li>Imaging-lead roles across NIH, AHA, DoD, foundation, and institutional projects</li> </ul> </div> </div> <div class="container-shell mt-10"> <div class="premium-panel p-8 md:p-10"> <div class="eyebrow-premium">Who this is for</div> <h3 class="text-2xl font-semibold text-slate-950">A strong fit for academic, clinical, and translational teams facing technically difficult work</h3> <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Investigators designing or revising imaging-heavy studies</div> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Research groups building custom analysis or QC pipelines</div> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Teams exploring machine learning or deep learning in biomedical settings</div> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Collaborators preparing grants, manuscripts, or reviewer responses</div> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Imaging cores and centers improving infrastructure and workflows</div> <div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">Organizations needing a scientifically fluent technical partner</div> </div> </div> </div> <div class="container-shell mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-2"> ${team.map((member) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { ...member.data })}`)} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/team.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
