import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_H9DgDCgV.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/willi3by/Desktop/code/entourage-style-site/","cacheDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/node_modules/.astro/","outDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/dist/","srcDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/src/","publicDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/public/","buildClientDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/dist/","buildServerDir":"file:///Users/willi3by/Desktop/code/entourage-style-site/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/demo","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/demo\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"demo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/demo.ts","pathname":"/api/demo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/newsletter","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/newsletter\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"newsletter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/newsletter.ts","pathname":"/api/newsletter","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/case-studies/[slug]","isIndex":false,"type":"page","pattern":"^\\/case-studies\\/([^/]+?)\\/?$","segments":[[{"content":"case-studies","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/case-studies/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/case-studies","isIndex":true,"type":"page","pattern":"^\\/case-studies\\/?$","segments":[[{"content":"case-studies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/case-studies/index.astro","pathname":"/case-studies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/demo","isIndex":false,"type":"page","pattern":"^\\/demo\\/?$","segments":[[{"content":"demo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/demo.astro","pathname":"/demo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/how-it-works","isIndex":false,"type":"page","pattern":"^\\/how-it-works\\/?$","segments":[[{"content":"how-it-works","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/how-it-works.astro","pathname":"/how-it-works","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/papers/[slug]","isIndex":false,"type":"page","pattern":"^\\/papers\\/([^/]+?)\\/?$","segments":[[{"content":"papers","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/papers/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/papers","isIndex":true,"type":"page","pattern":"^\\/papers\\/?$","segments":[[{"content":"papers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/papers/index.astro","pathname":"/papers","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/publications","isIndex":false,"type":"page","pattern":"^\\/publications\\/?$","segments":[[{"content":"publications","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/publications.astro","pathname":"/publications","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/selected-work","isIndex":false,"type":"page","pattern":"^\\/selected-work\\/?$","segments":[[{"content":"selected-work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/selected-work.astro","pathname":"/selected-work","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/what-we-do","isIndex":false,"type":"page","pattern":"^\\/what-we-do\\/?$","segments":[[{"content":"what-we-do","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/what-we-do.astro","pathname":"/what-we-do","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.dP6UG1-p.css"},{"type":"external","src":"/_astro/_slug_.DFO5ubWe.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://williamson-analytics.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/case-studies/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/case-studies/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/case-studies/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/papers/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/papers/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/papers/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/team.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/team@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/demo.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/how-it-works.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/publications.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/selected-work.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/willi3by/Desktop/code/entourage-style-site/src/pages/what-we-do.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/demo@_@ts":"pages/api/demo.astro.mjs","\u0000@astro-page:src/pages/api/newsletter@_@ts":"pages/api/newsletter.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/case-studies/[slug]@_@astro":"pages/case-studies/_slug_.astro.mjs","\u0000@astro-page:src/pages/case-studies/index@_@astro":"pages/case-studies.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/demo@_@astro":"pages/demo.astro.mjs","\u0000@astro-page:src/pages/how-it-works@_@astro":"pages/how-it-works.astro.mjs","\u0000@astro-page:src/pages/papers/[slug]@_@astro":"pages/papers/_slug_.astro.mjs","\u0000@astro-page:src/pages/papers/index@_@astro":"pages/papers.astro.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"pages/pricing.astro.mjs","\u0000@astro-page:src/pages/publications@_@astro":"pages/publications.astro.mjs","\u0000@astro-page:src/pages/selected-work@_@astro":"pages/selected-work.astro.mjs","\u0000@astro-page:src/pages/team@_@astro":"pages/team.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/what-we-do@_@astro":"pages/what-we-do.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BT5QF44Z.mjs","/Users/willi3by/Desktop/code/entourage-style-site/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/Users/willi3by/Desktop/code/entourage-style-site/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_BPkjsXU3.mjs","/Users/willi3by/Desktop/code/entourage-style-site/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DpSDJT5D.mjs","/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/ContactForm.astro?astro&type=script&index=0&lang.ts":"_astro/ContactForm.astro_astro_type_script_index_0_lang.EWPSvK4I.js","/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/DemoRequestForm.astro?astro&type=script&index=0&lang.ts":"_astro/DemoRequestForm.astro_astro_type_script_index_0_lang.B9_cWMpG.js","/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/NewsletterForm.astro?astro&type=script&index=0&lang.ts":"_astro/NewsletterForm.astro_astro_type_script_index_0_lang.kf_uyjEA.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/ContactForm.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('form[data-netlify-form][name=\"contact\"]').forEach(o=>{o.addEventListener(\"submit\",async e=>{e.preventDefault();const r=e.currentTarget,a=new URLSearchParams(new FormData(r)).toString();try{const t=await fetch(\"/__forms.html\",{method:\"POST\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\"},body:a});if(!t.ok)throw new Error(`Submission failed: ${t.status}`);window.location.href=r.getAttribute(\"action\")||\"/thank-you\"}catch(t){console.error(t),alert(\"Sorry, something went wrong sending your message. Please try again.\")}})});"],["/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/DemoRequestForm.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('form[data-netlify-form][name=\"consultation\"]').forEach(o=>{o.addEventListener(\"submit\",async e=>{e.preventDefault();const r=e.currentTarget,n=new URLSearchParams(new FormData(r)).toString();try{const t=await fetch(\"/__forms.html\",{method:\"POST\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\"},body:n});if(!t.ok)throw new Error(`Submission failed: ${t.status}`);window.location.href=r.getAttribute(\"action\")||\"/thank-you\"}catch(t){console.error(t),alert(\"Sorry, something went wrong sending your request. Please try again.\")}})});"],["/Users/willi3by/Desktop/code/entourage-style-site/src/components/forms/NewsletterForm.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('form[data-netlify-form][name=\"newsletter\"]').forEach(o=>{o.addEventListener(\"submit\",async e=>{e.preventDefault();const r=e.currentTarget,n=new URLSearchParams(new FormData(r)).toString();try{const t=await fetch(\"/__forms.html\",{method:\"POST\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\"},body:n});if(!t.ok)throw new Error(`Submission failed: ${t.status}`);window.location.href=r.getAttribute(\"action\")||\"/thank-you\"}catch(t){console.error(t),alert(\"Sorry, something went wrong subscribing. Please try again.\")}})});"]],"assets":["/_astro/_slug_.dP6UG1-p.css","/_astro/_slug_.DFO5ubWe.css","/__forms.html","/advanced_stats_figure.png","/brain_mapping_figure.webp","/favicon.svg","/imaging_ML_figure.jpg","/irb_panel.svg","/motif-network.svg","/multilayer_figure.jpeg","/qc_viewer_fig.png","/writing_panel.svg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"khEA4B+VVKnE5RRVryqHeOKkhM1rBNVHdL/+Kh6CgqE=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
