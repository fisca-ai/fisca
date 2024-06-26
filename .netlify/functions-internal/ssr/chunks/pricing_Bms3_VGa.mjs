/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, $ as $$Base, a as useTranslatedPath, l as languages } from './_astro_content_NMXE1VyB.mjs';
import { $ as $$Cta } from './Cta_Dg0pTBYM.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("pricing", lang);
  const { title, description, plans, call_to_action } = entry.data;
  const tp = useTranslatedPath(lang);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0"> <div class="container"> <h1 class="text-center font-normal">${title}</h1> <div class="section row -mt-10 justify-center md:mt-0"> ${plans?.map((plan) => renderTemplate`<div${addAttribute(`col-12 md:col-4 ${!plan.recommended ? "lg:px-0" : "col-recommended"}`, "class")}> <div class="card text-center"> <h4>${plan.title}</h4> <div class="mt-5"> <span class="text-5xl text-dark">$${plan.price}</span> <span>/ ${plan.type}</span> </div> <h5 class="mt-2 font-normal text-text">${plan.subtitle}</h5> <ul class="mt-5"> ${plan?.features?.map((feature, index) => renderTemplate`<li class="mb-[10px] leading-5">${feature}</li>`)} </ul> <a${addAttribute(`btn mt-5 ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`, "class")}${addAttribute(tp(plan.button.link), "href")}> ${plan.button.label} </a> </div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "lang": lang, "cta": call_to_action })} ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/Pricing.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const prerender = true;
async function getStaticPaths() {
  return Object.entries(languages).map((l) => ({
    params: { lang: l[0] }
  }));
}
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BasePricing", $$Pricing$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/pricing.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/pricing.astro";
const $$url = "/[lang]/pricing";

export { $$Pricing as default, $$file as file, getStaticPaths, prerender, $$url as url };
