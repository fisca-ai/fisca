/* empty css                             */
import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, $ as $$Base, m as markdownify } from './_astro_content_C5hqh1Bd.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$404$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$404$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("404", lang);
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> <h1 class="mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/404.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const lang = Astro2.cookies.get("lang")?.value || "en";
  return renderTemplate`${renderComponent($$result, "Base404", $$404$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/404.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
