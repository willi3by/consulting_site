/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, e as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Publications = createComponent(($$result, $$props, $$slots) => {
  const featured = [
    {
      journal: "Nature Communications 2023",
      focus: "Network neuroscience and language development",
      title: "In-Silico Attacks Reveal Increasing Vulnerability of the Language Network from Early Childhood through Adolescence",
      figure: "/multilayer_figure.jpeg",
      alt: "Representative multilayer network neuroscience figure.",
      accent: "text-cyan-300",
      button: "bg-cyan-300 hover:bg-cyan-200"
    },
    {
      journal: "Circulation: Cardiovascular Imaging 2024",
      focus: "Interpretable deep learning in imaging",
      title: "Machine Learning Detects Symptomatic Plaques in Patients with Carotid Atherosclerosis on CT Angiography",
      figure: "/imaging_ML_figure.jpg",
      alt: "Representative imaging machine learning figure.",
      accent: "text-emerald-300",
      button: "bg-emerald-400 hover:bg-emerald-300"
    },
    {
      journal: "Scientific Reports 2025",
      focus: "Translational neuroimaging and vascular brain health",
      title: "Microstructural and microvascular features of white matter hyperintensities and their association with small vessel disease markers",
      figure: "/brain_mapping_figure.webp",
      alt: "Representative neuroimaging figure.",
      accent: "text-fuchsia-300",
      button: "bg-fuchsia-400 hover:bg-fuchsia-300"
    }
  ];
  const themeGroups = [
    {
      title: "Neuroimaging and MRI",
      description: "Diffusion imaging, connectometry, language mapping, pediatric and stroke-related neuroimaging, and imaging biomarkers.",
      items: [
        "Optimizing the Approach to Calculating CST Lesion Load in Ischemic Stroke Patients for Understanding Motor Outcomes.",
        "Association of Corticospinal Tract Asymmetry With Ambulatory Ability After Intracerebral Hemorrhage.",
        "Structural connectivity at term equivalent age predicts language outcomes in children born preterm.",
        "Language mapping in pediatrics using repetitive transcranial magnetic stimulation (rTMS)."
      ]
    },
    {
      title: "Machine learning and AI",
      description: "Interpretable deep learning and predictive modeling for clinically meaningful imaging problems.",
      items: [
        "Machine Learning Detects Symptomatic Plaques in Patients with Carotid Atherosclerosis on CT Angiography.",
        "Predicting Hemorrhagic Transformation After Thrombolytics with Computed Tomography using a 3D Convolutional Neural Network.",
        "Interpretable deep learning workflows for biomedical imaging applications."
      ]
    },
    {
      title: "Computational neuroscience and networks",
      description: "Graph theory, multilayer networks, connectomics, and systems-level modeling of brain function.",
      items: [
        "In-Silico Attacks Reveal Increasing Vulnerability of the Language Network from Early Childhood through Adolescence.",
        "Detrended connectometry analysis to assess white matter correlates of performance in childhood.",
        "Mapping Critical Language Sites in Children Performing Verb Generation: Whole-Brain Connectivity and Graph Theoretical Analysis in MEG."
      ]
    },
    {
      title: "Translational and clinical collaborations",
      description: "Stroke, vascular brain health, recovery, and other clinically grounded imaging studies.",
      items: [
        "Assessing Population-Based Radiological Brain Health in Stroke Epidemiology (APRISE): Rationale and Design.",
        "Psychosocial Stress is an Independent Risk Factor for Intracerebral Hemorrhage.",
        "Projecting the United States population eligibility for minimally invasive surgical evacuation of intracerebral hemorrhage."
      ]
    }
  ];
  const published = [
    "Williamson, B. J., Behymer, T., Schwarz, A., Vagal, A. S., \u2026 Cramer, S. C. (2026). Optimizing the Approach to Calculating CST Lesion Load in Ischemic Stroke Patients for Understanding Motor Outcomes. Neurorehabilitation and Neural Repair. Advance online publication.",
    "Aziz, Y. N., Langefeld, C. D., Comeau, M. E., Marion, M. C., Behymer, T. P., Gilkerson, L. A., Sekar, P., Yuan, W., Khandwala, V., Williamson, B. J., Roh, D., \u2026 Demel, S. L. (2025). Association of Corticospinal Tract Asymmetry With Ambulatory Ability After Intracerebral Hemorrhage. Annals of Clinical and Translational Neurology. Advance online publication.",
    "Boyne, P., Williamson, B. J., Buclez, J., Lin, D. (2025). Probabilistic normative maps of the corticospinal and cortico-reticulospinal tracts in streamline and volumetric formats. Journal of Neuroscience Methods.",
    "Aziz, Y., \u2026 Williamson, B. J., \u2026 Khatri, P. (2025). Extensive Ischemic Change in Late Stroke Presentation is Uncommon: A Population-Based Study. Journal of Stroke and Cerebrovascular Diseases.",
    "Walsh, K., \u2026 Williamson, B. J., \u2026 Woo, D. (2025). Neutrophil Degranulation is Increased at Seven Days after Human Intracerebral Hemorrhage, but not at 72 Hours, and Correlates with Decreased miR-3613 and miR-3690. BMC Neurology.",
    "Wechsler, P., \u2026 Williamson, B. J., \u2026 Khatri, P. (2025). Projecting the United States population eligibility for minimally invasive surgical evacuation of intracerebral hemorrhage. Stroke.",
    "Espay, A. J., \u2026 Williamson, B. J., \u2026 Manfredsson, F. P. (2025). Physics of Protein Aggregation in the Neurology of Aging. BioEssays.",
    "Vedala, K., \u2026 Williamson, B. J., \u2026 Greiner, H. (2025). Language mapping in pediatrics using repetitive transcranial magnetic stimulation (rTMS). Journal of Clinical Neurophysiology.",
    "Wang, L. L., Williamson, B. J., \u2026 DiFrancesco, M. (2025). Microstructural and microvascular features of white matter hyperintensities and their association with small vessel disease markers. Scientific Reports.",
    "Khatri, P., Sucharew, H., \u2026 Williamson, B. J., \u2026 Vagal, A. (2025). Assessing Population-Based Radiological Brain Health in Stroke Epidemiology (APRISE): Rationale and Design. Cerebrovascular Diseases.",
    "Behymer, T. P., Sekar, P., \u2026 Williamson, B. J., \u2026 Woo, D. (2025). Psychosocial Stress is an Independent Risk Factor for Intracerebral Hemorrhage. Journal of the American Heart Association.",
    "Barnes-Davis, M. E*., Williamson, B. J*., Kline, J. E., Yuan, W., Parikh, N. A. (2024). Structural connectivity at term equivalent age predicts language functioning in preterm children at 2 to 3 years: a comparison of higher order diffusion models. Brain Communications. *co-first authorship.",
    "Williamson, B. J*., Pisu, F*., Nardi, V., \u2026 Saba, L. (2024). Machine Learning Detects Symptomatic Plaques in Patients with Carotid Atherosclerosis on CT Angiography. Circulation: Cardiovascular Imaging. *co-first authorship.",
    "Williamson, B. J., Greiner, H., Kadis, D. S. (2023). In-Silico Attacks Reveal Increasing Vulnerability of the Language Network from Early Childhood through Adolescence. Nature Communications.",
    "Greiner, H., Maue, E., Horn, P., Vannest, J., Vedala, K., Leach, J., Tenney, J., Williamson, B. J., Fujiwara, H., Coghill, R., Mangano, F., Kadis, D. S. (2023). Tolerability of TMS Language Mapping in Children. Epilepsy Research.",
    "Williamson, B. J., Barnes-Davis, M. E., Vannest, J., Anixt, J., Heydarian, H. C., Kuan, L., Laue, C. S., Pratap, J., Schapiro, M., Tseng, S. Y., Kadis, D. S. (2023). Altered White Matter Connectivity in Children with Congenital Heart Disease with Single Ventricle Physiology. Scientific Reports.",
    "Williamson, B. J., Vagal, A. S. (2022). Beyond the AJR: White Matter Microstructural Differences Detectable in Patients Recovered from COVID-19 at 1-year Follow-Up. American Journal of Roentgenology.",
    "Williamson, B. J., Khandwala, V., \u2026 Vagal, A. S. (2022). Automated Grading of Enlarged Perivascular Spaces Using an Interpretable, 3D Deep Learning Framework. Scientific Reports.",
    "Williamson, B. J., Wang, D., Khandwala, V., Scheler, J., Vagal, A. S. (2022). Improving Deep Neural Network Interpretation for Neuroimaging using Multivariate Modeling. Springer Nature Computer Science.",
    "Barnes-Davis, M. E*., Williamson, B. J*., Merhar, S. L., Nagaraj, U. D., Parikh, N. A., Kadis, D. S. (2022). Extracallosal structural connectivity is positively associated with language performance in well-performing children born extremely preterm. Frontiers in Pediatrics. *co-first authorship.",
    "Boyne, P., DiFrancesco, M., Awosika, O. O., Williamson, B., & Vannest, J. (2022). Mapping the human corticoreticular pathway with multimodal delineation of the gigantocellular reticular nucleus and high-resolution diffusion tractography. Journal of the Neurological Sciences.",
    "Mahammedi, A., Wang, L. L., Williamson, B. J., \u2026 Vagal, A. S. (2021). Small Vessel Disease \u2014 A Marker of Brain Health: What the radiologist needs to know. American Journal of Neuroradiology.",
    "Tenney, J. R., Williamson, B. J., & Kadis, D. S. (2021). Cross-Frequency Coupling in Childhood Absence Epilepsy. Brain Connectivity.",
    "Sharma, V. V., Vannest, J., Greiner, H. M., Fujiwara, H., Tenney, J. R., Williamson, B. J., & Kadis, D. S. (2021). Beta synchrony for expressive language lateralizes to the right hemisphere in development. Scientific Reports.",
    "Williamson, B. J., De Domenico, M., Kadis, D. S. (2020). Multilayer connector hub mapping reveals key brain regions supporting expressive language. Brain Connectivity.",
    "Mahammedi, A., \u2026 Williamson, B. J., et al. (2020). Brain and Lung Imaging Correlation in COVID-19 Patients: Could the Severity of Lung Disease Reflect the Prevalence of Neuroimaging Abnormalities? A Global Multicenter Observational Study. American Journal of Neuroradiology.",
    "Barnes-Davis, M., Williamson, B. J., Merhar, S., Holland, S., Kadis, D. (2020). Extremely preterm children exhibit altered cortical thickness in language areas. Scientific Reports.",
    "Barnes-Davis, M*., Williamson, B. J*., Merhar, S., Holland, S., Kadis, D. (2020). Rewiring the extremely preterm brain: Altered structural connectivity relates to language function. NeuroImage: Clinical. *co-first authorship.",
    "Williamson, B. J. (2019). Towards Connectionist Neuroimaging: Brain Connector Hubs for Expressive Language. Doctoral Dissertation. University of Cincinnati.",
    "Williamson, B. J., Altaye, M., Kadis, D. (2018). Detrended connectometry analysis to assess white matter correlates of performance in childhood. NeuroImage.",
    "Williamson, B. J. (2017). Diffusion Connectometry and Graph Theoretical Analyses Reveal Network \u2018Sweet Spot\u2019 for Language Performance in Childhood. Master\u2019s Thesis. University of Cincinnati.",
    "Youssofzadeh, V., Williamson, B. J., & Kadis, D. S. (2017). Mapping Critical Language Sites in Children Performing Verb Generation: Whole-Brain Connectivity and Graph Theoretical Analysis in MEG. Frontiers in Human Neuroscience.",
    "Mano, Q. R., Williamson, B., Pae, H. K., & Osmon, D. C. (2015). Stroop interference associated with efficient reading fluency and prelexical orthographic processing. Journal of Clinical and Experimental Neuropsychology."
  ];
  const underReview = [
    "Williamson, B. J., Behymer, T., Cramer, S., ENIGMA Stroke Recovery Consortium. (2025). Optimizing the Approach to Calculating CST Lesion Load in Ischemic Stroke Patients for Understanding Motor Outcomes. Neurorehabilitation and Neural Repair. Final revisions.",
    "Kushman, S. \u2026 Williamson, B. J., \u2026 Shatz, R. (2025). Sleep Apnea and Glymphatic Flow: A Mechanism for Executive Dysfunction in Cancer-Related Cognitive Impairment. Journal of the National Cancer Institute. Under revision.",
    "Williamson, B. J*., Vagal, A. S*., \u2026 Khatri, P. (2025). Brain Health in a Large-Scale Stroke Population: Distinct Radiological Phenotypes. JAMA Neurology. Under review. *co-first authorship.",
    "Robinson, D. \u2026 Williamson, B. J., \u2026 Vagal, A. S. (2025). Using radiological brain health to predict recurrent stroke: A population-based study. Neurology. Under review."
  ];
  const inProgress = [
    "Williamson, B. J., Ismail, M., Greiner, H., Kadis, D. S. (2025). Mapping Pediatric Language Network Hubs Using Iterative In-Silico Random Attacks on MEG Connectivity Data During Expressive Language. Nature Methods. In progress.",
    "Roh, D*., Williamson, B. J*., \u2026 Woo, D. (2025). Acute anemia after intracerebral hemorrhage and relationships with impaired white matter connectivity. In progress. *co-first authorship.",
    "Williamson, B. J., Foreman, B., Romo-Nava, F. (2025). Brain-Body Circadian Dynamics within First 120 hours of Injury Associated with Recovery of Consciousness. In progress.",
    "Stanton, R., \u2026 Williamson, B. J., \u2026 Woo, D. (2025). Predicting Hemorrhagic Transformation After Thrombolytics with Computed Tomography using a 3D Convolutional Neural Network. Radiology: AI. In progress.",
    "Hooper, D., \u2026 Williamson, B. J., \u2026 Woo, D. (2025). Inflammatory mRNA Pathways are Associated with Poor Outcomes after Intracerebral Hemorrhage. In progress.",
    "Vagal, V. \u2026 Williamson, B. J., \u2026 Woo, D. (2025). Effect of IVH-Related Stretching of Corticospinal Tracts on Long-Term Incontinence and Gait Dysfunction. In progress.",
    "Bispo, M. \u2026 Williamson, B. J., Ogbu, E. (2025). Brain Imaging Patterns in Childhood Lupus Cerebrovascular Disease. In progress.",
    "Williamson, B. J., Foreman, B., Romo-Nava, F. (2025). Actigraphy-based Circadian Rhythm Modeling in Patients with Binge Eating Disorder. In progress.",
    "Williamson, B. J., Anderson, M., Chemero, A. (TBD). Entity Realism in Cognitive Neuroscience. Synthese. In progress.",
    "Williamson, B. J., Harness, C., Brien, D., Lindsay, M. (TBD). Sub-millimeter MRI and High-Resolution Diffusion Spectrum Imaging in Cadavers Scanned Less than 6 hours Postmortem. The FASEB Journal. In progress.",
    "Ahmed, A., Williamson, B. J., Joshi, A., Tummala, N., Thakkar, P., Lee, E. (TBD). The Impact of Hypoalbuminemia on Blood Transfusions During Head and Neck Free Flap Surgery: A NSQIP Study. Investigative Otolaryngology. In progress.",
    "Khorshid, N., Williamson, B. J., Kadis, D. S. (TBD). Structural network topography, not topology, reveals a pediatric advantage for language. In progress."
  ];
  return renderTemplate`const totalScholarlyWorks = published.length + underReview.length + inProgress.length;
${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Publications", "description": "Featured publications, thematic scholarship areas, and the broader publication record associated with Brady J. Williamson, PhD.", "eyebrow": "Publications" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", '<section class="section pt-0"><div class="container-shell dark-stage network-shell overflow-hidden rounded-[2.2rem] px-6 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:px-8 md:py-12"><div class="mx-auto max-w-5xl text-center"><div class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Scholarship and methods depth</div><h2 class="mt-4 text-4xl font-semibold tracking-tight text-fuchsia-400 md:text-6xl">Publications organized to show intellectual shape, not just volume</h2><p class="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-200 md:text-xl">\nThis page is organized to make the main themes in the work easier to scan: neuroimaging, machine learning, computational neuroscience, and translational collaboration.\n</p></div><div class="mt-12 grid gap-6 xl:grid-cols-3">', '</div></div><div class="container-shell mt-10 grid gap-4 md:grid-cols-3"><div class="metric-pill rounded-[1.35rem] p-6 text-center reveal-up"><div class="kicker-label">Total scholarly works</div><div class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">', '</div><div class="mt-2 text-sm leading-7 text-slate-600">Published, under review, and in-progress scholarly work represented on this page.</div></div><div class="metric-pill rounded-[1.35rem] p-6 text-center reveal-up reveal-delay-1"><div class="kicker-label">Published</div><div class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">', '</div><div class="mt-2 text-sm leading-7 text-slate-600">Published papers plus dissertation and thesis work listed below.</div></div><div class="metric-pill rounded-[1.35rem] p-6 text-center reveal-up reveal-delay-2"><div class="kicker-label">Under review / in progress</div><div class="mt-2 text-3xl font-semibold tracking-tight text-slate-950">', '</div><div class="mt-2 text-sm leading-7 text-slate-600">Current manuscripts moving through review, revision, or active development.</div></div></div><div id="themes" class="container-shell mt-10"><div class="premium-panel p-8 md:p-10 reveal-up"><div class="eyebrow-premium">Browse by theme</div><h3 class="h3">A quicker way to understand what kind of scholarship sits behind the consulting</h3><div class="mt-8 grid gap-6 xl:grid-cols-2">', '</div></div></div><div id="published" class="container-shell mt-10"><div class="card-premium p-8 md:p-10 reveal-up"><div class="eyebrow-premium">Full publication list</div><h3 class="h3">Published work, dissertation, and thesis</h3><ol class="mt-6 space-y-4 text-sm leading-7 text-slate-700">', '</ol></div></div><div class="container-shell mt-10 grid gap-8 xl:grid-cols-2"><div class="premium-panel p-8 md:p-10 reveal-up"><div class="eyebrow-premium">Under review / revision</div><h3 class="h3">Current manuscripts in external review or revision</h3><ul class="mt-6 space-y-4 text-sm leading-7 text-slate-700">', '</ul></div><div class="premium-panel p-8 md:p-10 reveal-up reveal-delay-1"><div class="eyebrow-premium">In progress</div><h3 class="h3">Active scholarly work and developing manuscripts</h3><ul class="mt-6 space-y-4 text-sm leading-7 text-slate-700">', "</ul></div></div></section><script>\n    const items = Array.from(document.querySelectorAll('.reveal-up'));\n    if (items.length) {\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('is-visible');\n            observer.unobserve(entry.target);\n          }\n        });\n      }, { threshold: 0.16, rootMargin: '0px 0px -30px 0px' });\n      items.forEach((item) => observer.observe(item));\n    }\n  <\/script>"])), maybeRenderHead(), featured.map((item, index) => renderTemplate`<article${addAttribute(`stagger-card reveal-up ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""} publication-card p-6`, "class")}><div class="flex h-full flex-col"><div class="flex items-start justify-between gap-4"><div><div${addAttribute(`text-xl font-semibold ${item.accent}`, "class")}>${item.journal}</div><div class="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">${item.focus}</div></div><div class="dark-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">Featured</div></div><div class="mt-6 overflow-hidden rounded-[1rem] bg-white shadow-inner"><img${addAttribute(item.figure, "src")}${addAttribute(item.alt, "alt")} class="h-[11.5rem] w-full object-cover object-center"></div><div class="mt-6 text-lg leading-8 text-white">${item.title}</div><div class="mt-6 pt-2"><a href="#themes"${addAttribute(`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-center text-lg font-medium text-slate-950 transition hover:-translate-y-0.5 ${item.button}`, "class")}>Browse themes</a></div></div></article>`), totalScholarlyWorks, published.length, underReview.length + inProgress.length, themeGroups.map((group, index) => renderTemplate`<div${addAttribute(`rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-card ${index % 2 === 1 ? "reveal-delay-1" : ""}`, "class")}><div class="kicker-label">${group.title}</div><p class="mt-3 text-sm leading-7 text-slate-600">${group.description}</p><ul class="mt-4 space-y-3 text-sm leading-7 text-slate-700">${group.items.map((item) => renderTemplate`<li class="rounded-xl bg-slate-50 px-4 py-3">${item}</li>`)}</ul></div>`), published.map((entry) => renderTemplate`<li class="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-card">${entry}</li>`), underReview.map((entry) => renderTemplate`<li class="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-card">${entry}</li>`), inProgress.map((entry) => renderTemplate`<li class="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 shadow-card">${entry}</li>`)) })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/publications.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Publications,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
