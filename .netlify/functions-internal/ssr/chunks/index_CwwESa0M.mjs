/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { $ as $$Index$1 } from './Index_D1j6Ts38.mjs';

const $$Astro = createAstro("https://fisca.ai/");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = Astro2.preferredLocale ?? "en";
  console.log("Preferred locale:", Astro2.preferredLocale);
  console.log("Preferred locale list:", Astro2.preferredLocaleList);
  console.log(
    "Accept-Language header:",
    Astro2.request.headers.get("Accept-Language")
  );
  return renderTemplate`${renderComponent($$result, "BaseIndex", $$Index$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/index.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
