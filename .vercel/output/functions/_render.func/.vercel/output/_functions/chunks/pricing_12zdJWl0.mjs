/* empty css                             */
import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, s as addAttribute } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, $ as $$Base } from './_astro_content_C5hqh1Bd.mjs';
import { $ as $$Cta } from './Cta_C7pZ1vg5.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("pricing", lang);
  const { title, description, plans, call_to_action } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pb-0"> <div class="container"> <h1 class="text-center font-normal">${title}</h1> <div class="section row -mt-10 justify-center md:mt-0"> ${plans?.map((plan) => renderTemplate`<div${addAttribute(`col-12 md:col-4 ${!plan.recommended ? "lg:px-0" : "col-recommended"}`, "class")}> <div class="card text-center"> <h4>${plan.title}</h4> <div class="mt-5"> <span class="text-5xl text-dark">$${plan.price}</span> <span>/ ${plan.type}</span> </div> <h5 class="mt-2 font-normal text-text">${plan.subtitle}</h5> <ul class="mt-5"> ${plan?.features?.map((feature, index) => renderTemplate`<li class="mb-[10px] leading-5">${feature}</li>`)} </ul> <a${addAttribute(`btn mt-5 ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`, "class")}${addAttribute(plan.button.link, "href")}> ${plan.button.label} </a> </div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, { "cta": call_to_action })} ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/Pricing.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const lang = Astro2.cookies.get("lang")?.value || "en";
  return renderTemplate`${renderComponent($$result, "BasePricing", $$Pricing$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/pricing.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/pricing.astro";
const $$url = "/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
