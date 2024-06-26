/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, m as markdownify, $ as $$Base, l as languages } from './_astro_content_NMXE1VyB.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Faq$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Faq$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("faq", lang);
  const { title, description, faqs } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center font-normal">${unescapeHTML(markdownify(title))}</h1> <div class="section row -mt-6"> ${faqs?.map((faq) => renderTemplate`<div class="col-12 mt-6 md:col-6"> <div class="p-12  shadow"> <div class="faq-head relative"> <h4>${unescapeHTML(markdownify(faq.title))}</h4> </div> <p class="faq-body mt-4">${unescapeHTML(markdownify(faq.answer))}</p> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/Faq.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const prerender = true;
async function getStaticPaths() {
  return Object.entries(languages).map((l) => ({
    params: { lang: l[0] }
  }));
}
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseFaq", $$Faq$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/faq.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/faq.astro";
const $$url = "/[lang]/faq";

export { $$Faq as default, $$file as file, getStaticPaths, prerender, $$url as url };
