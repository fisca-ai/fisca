import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, p as renderComponent, u as unescapeHTML, s as addAttribute } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import './astro/assets-service_DFhx4_s8.mjs';
import { $ as $$Image } from './_astro_assets_3vjGwHZ7.mjs';
import { m as markdownify } from './_astro_content_C5hqh1Bd.mjs';

const $$Astro = createAstro("https://fisca.ai/");
const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cta;
  const { cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section px-4"> <div class="section container rounded-xl shadow"> <div class="row mx-auto items-center justify-center"> <div class="md:col-5 lg:col-4"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full", "src": cta?.image, "alt": "call to action image", "width": 325, "height": 206 })} </div> <div class="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5"> <h2>${cta?.title}</h2> <p class="mt-6">${unescapeHTML(markdownify(cta?.content))}</p> ${cta.button.enable && renderTemplate`<a class="btn btn-primary mt-4"${addAttribute(cta.button.link, "href")}${addAttribute(cta.button.rel, "rel")}> ${cta.button.label} </a>`} </div> </div> </div> </section>`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/components/Cta.astro", void 0);

export { $$Cta as $ };
