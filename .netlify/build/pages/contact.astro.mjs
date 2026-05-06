/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_yXjxRbVI.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_UNgYtDwD.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form name="contact" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field" class="card grid gap-4 p-8"> <input type="hidden" name="form-name" value="contact"> <input type="hidden" name="subject" value="New contact form submission from Williamson Research Consulting"> <p class="hidden"> <label>
Don’t fill this out if you’re human:
<input name="bot-field"> </label> </p> <div class="grid gap-4 md:grid-cols-2"> <input class="input" type="text" name="firstName" placeholder="First name" required> <input class="input" type="text" name="lastName" placeholder="Last name" required> </div> <input class="input" type="email" name="email" placeholder="Email" required> <input class="input" type="text" name="organization" placeholder="Institution / lab / company"> <select class="input" name="engagementType"> <option value="">What kind of help do you need?</option> <option>Advisory / strategy</option> <option>Scoped technical project</option> <option>Scientific writing / review / editing</option> <option>IRB / protocol / research operations</option> <option>Retained collaborative support</option> <option>Training / speaking</option> </select> <select class="input" name="projectStage"> <option value="">Current stage</option> <option>Idea / planning</option> <option>Grant development</option> <option>Active study</option> <option>Analysis / interpretation</option> <option>Manuscript / revision</option> <option>Infrastructure / workflow build</option> </select> <textarea class="input min-h-36" name="message" placeholder="What are you trying to accomplish, what is the bottleneck, and what kind of outcome would be most helpful?" required></textarea> <button class="btn-primary w-full md:w-fit" type="submit">Send message</button> </form>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Contact", "description": "Reach out about advisory work, scoped technical projects, scientific writing/editing, or longer collaborative support.", "eyebrow": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-0"> <div class="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"> <div> <h2 class="text-2xl font-semibold text-slate-950">Tell me a bit about the problem</h2> <p class="mt-5 leading-8 text-slate-600">
The most helpful inquiries include a little context on the project, the current stage of the work, the main technical or scientific bottleneck,
          the timeline, and whether you are looking for advisory support, hands-on build work, scientific writing/editing, review, or an ongoing collaboration.
</p> <div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600"> <div class="font-semibold text-slate-950">Common reasons people reach out</div> <ul class="mt-4 space-y-2"> <li>Imaging-study design, protocol planning, or QA/QC strategy</li> <li>Machine learning, deep learning, or statistical modeling support</li> <li>Computational neuroscience and network-analysis projects</li> <li>Pipeline, dashboard, or technical infrastructure development</li> <li>Manuscript editing, grant review, or response-to-reviewers support</li> <li>IRB-facing methods support or research-operations planning</li> </ul> </div> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> ` })}`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/contact.astro", void 0);

const $$file = "/Users/willi3by/Desktop/code/entourage-style-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
