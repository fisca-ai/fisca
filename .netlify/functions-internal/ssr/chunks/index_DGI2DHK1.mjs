/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { $ as $$Index$1 } from './Index_DiWKtf9R.mjs';
import { l as languages } from './_astro_content_B0xy4c18.mjs';

const $$Astro = createAstro("https://fisca.ai/");
const prerender = true;
async function getStaticPaths() {
  return Object.entries(languages).map((l) => ({
    params: { lang: l[0] }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  Astro2.cookies.set("lang", lang);
  return renderTemplate`${renderComponent($$result, "BaseIndex", $$Index$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

export { $$Index as default, $$file as file, getStaticPaths, prerender, $$url as url };
