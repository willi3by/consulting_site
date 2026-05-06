/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$DemoRequestForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form name="consultation" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" class="card grid gap-4 p-8"> <input type="hidden" name="form-name" value="consultation"> <input type="hidden" name="subject" value="New consultation request from Williamson Research Consulting"> <p class="hidden"> <label>
Don’t fill this out if you’re human:
<input name="bot-field"> </label> </p> <div class="grid gap-4 md:grid-cols-2"> <input class="input" type="text" name="name" placeholder="Full name" required> <input class="input" type="email" name="email" placeholder="Email" required> </div> <div class="grid gap-4 md:grid-cols-2"> <input class="input" type="text" name="organization" placeholder="Institution / company"> <input class="input" type="text" name="role" placeholder="Role"> </div> <select class="input" name="serviceArea"> <option value="">Primary area of need</option> <option>Neuroimaging / MRI</option> <option>Machine learning / deep learning</option> <option>Statistical modeling / analytics</option> <option>Computational neuroscience / network science</option> <option>Pipeline / QA-QC / infrastructure</option> <option>Scientific writing / review / editing</option> <option>IRB / protocol / research operations</option> <option>Not sure yet</option> </select> <select class="input" name="projectStage"> <option value="">Project stage</option> <option>Idea / planning</option> <option>Grant development</option> <option>Active study</option> <option>Analysis / interpretation</option> <option>Manuscript / revision</option> <option>Infrastructure / workflow build</option> </select> <select class="input" name="timeline"> <option value="">Timeline</option> <option>ASAP</option> <option>Within 1 month</option> <option>Within 1 quarter</option> <option>Exploratory</option> </select> <textarea class="input min-h-36" name="goals" placeholder="Briefly describe the project, technical challenge, writing/editing need, or outcome you want." required></textarea> <button class="btn-primary w-full md:w-fit" type="submit">Request consultation</button> </form>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/DemoRequestForm.astro", void 0);

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Book a Consultation", "description": "Structured intake for consulting work in neuroimaging, biomedical AI, analytics, scientific writing, and research operations.", "eyebrow": "Consultation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"> <div> <h2 class="text-2xl font-semibold text-slate-950">Start a consultation</h2> <p class="mt-5 leading-8 text-slate-600">
This intake is meant to capture enough detail to understand fit, identify whether the next step should be a short call or a scoped proposal,
          and keep the process professional for both sides. It works for technical consulting, scientific writing/editing, and collaborative research support.
</p> <div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600"> <div class="font-semibold text-slate-950">Good information to include</div> <ul class="mt-4 space-y-2"> <li>Project stage: idea, grant, active study, analysis, manuscript, or infrastructure build</li> <li>Main area of need and where the bottleneck currently is</li> <li>Timeline, stakeholders, and whether external review or writing support is involved</li> <li>Whether you need advisory input, hands-on execution, or a longer collaboration</li> </ul> </div> </div> ${renderComponent($$result2, "DemoRequestForm", $$DemoRequestForm, {})} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/demo.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
