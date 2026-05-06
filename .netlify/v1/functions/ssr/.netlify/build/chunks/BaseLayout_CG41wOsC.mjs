import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, i as renderHead, r as renderComponent, d as renderSlot } from './astro/server_yXjxRbVI.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

const $$Astro$1 = createAstro("https://williamson-analytics.netlify.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { href: "/what-we-do", label: "Services" },
    { href: "/how-it-works", label: "Process" },
    { href: "/pricing", label: "Engagements" },
    { href: "/selected-work", label: "Selected Work" },
    { href: "/publications", label: "Publications" },
    { href: "/team", label: "About" }
  ];
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl"> <div class="container-shell flex items-center justify-between gap-4 py-4"> <a href="/" class="flex items-center gap-3 font-semibold text-slate-950"> <span class="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-sm text-white shadow-soft"> <span class="absolute inset-[5px] rounded-[0.9rem] bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.95),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(192,132,252,0.85),transparent_30%),radial-gradient(circle_at_48%_72%,rgba(52,211,153,0.95),transparent_28%)]"></span> <span class="absolute h-px w-6 rotate-[26deg] bg-white/40"></span> <span class="absolute h-px w-5 -rotate-[28deg] bg-white/35"></span> <span class="relative text-[0.62rem] font-semibold tracking-[0.2em] text-white/90">WA</span> </span> <div class="hidden sm:block"> <div>Williamson Analytics</div> <div class="mt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-400">Neuroimaging • AI • Research strategy</div> </div> </a> <nav class="hidden items-center gap-1 rounded-full border border-white/80 bg-white/80 p-1 shadow-soft lg:flex"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "rounded-full px-4 py-2 text-sm font-medium transition",
    pathname === item.href ? "bg-slate-950 text-white shadow-card" : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
  ], "class:list")}> ${item.label} </a>`)} </nav> <div class="flex items-center gap-3"> <a href="/contact" class="btn-secondary hidden text-sm md:inline-flex">Contact</a> <a href="/demo" class="btn-primary text-sm">Start a consultation</a> </div> </div> </header>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-200/80 bg-white/70 backdrop-blur-xl"> <div class="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]"> <div> <div class="flex items-center gap-3 font-semibold text-slate-950"> <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-700 to-cyan-500 text-white shadow-soft">WA</span> <div> <div>Williamson Analytics</div> <div class="mt-0.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-slate-400">Research & technical consulting</div> </div> </div> <p class="mt-5 max-w-md text-sm leading-7 text-slate-600">
Consulting at the intersection of neuroimaging, biomedical AI, computational neuroscience, reproducible analytics,
        scientific writing, and research strategy.
</p> </div> <div> <div class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Explore</div> <ul class="mt-4 space-y-3 text-sm text-slate-600"> <li><a href="/what-we-do" class="hover:text-blue-700">Services</a></li> <li><a href="/selected-work" class="hover:text-blue-700">Selected work</a></li> <li><a href="/publications" class="hover:text-blue-700">Publications</a></li> <li><a href="/team" class="hover:text-blue-700">About</a></li> </ul> </div> <div> <div class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Connect</div> <ul class="mt-4 space-y-3 text-sm text-slate-600"> <li><a href="/contact" class="hover:text-blue-700">Contact</a></li> <li><a href="/demo" class="hover:text-blue-700">Start a consultation</a></li> <li><a href="/blog" class="hover:text-blue-700">Insights</a></li> <li><a href="/how-it-works" class="hover:text-blue-700">Process</a></li> </ul> </div> </div> </footer>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/components/layout/Footer.astro", void 0);

const $$Astro = createAstro("https://williamson-analytics.netlify.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Williamson Analytics | Consulting for imaging, analytics, and AI strategy",
    description = "A polished Astro starter tailored to independent consulting services in research, healthcare, analytics, and AI-enabled workflows."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.svg">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/willi3by/Desktop/code/entourage-style-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
