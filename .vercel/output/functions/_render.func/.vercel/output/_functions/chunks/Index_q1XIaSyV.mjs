import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, u as unescapeHTML, s as addAttribute } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import './astro/assets-service_DFhx4_s8.mjs';
import { $ as $$Image } from './_astro_assets_3vjGwHZ7.mjs';
import { b as getEntry, m as markdownify, $ as $$Base } from './_astro_content_CY9UuciB.mjs';
import { $ as $$Cta } from './Cta_h__VzUBf.mjs';

const $$Astro = createAstro("https://fisca.ai/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.props;
  const homepage = await getEntry("homepage", lang);
  const { banner, feature, app, services, workflow, call_to_action } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="section pb-[50px]"> <div class="container"> <div class="row text-center"> <div class="mx-auto lg:col-10"> <h1 class="font-primary font-bold">${banner?.title}</h1> ${banner?.content && renderTemplate`<p class="mt-4">${unescapeHTML(markdownify(banner.content))}</p>`} ${banner?.button?.enable && renderTemplate`<a class="btn btn-primary mt-4"${addAttribute(banner.button.link, "href")}> ${banner.button.label} </a>`} ${banner?.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto mt-12", "src": banner?.image, "width": 750, "height": 390, "alt": "banner image" })}`} </div> </div> </div> </section>  <section class="section bg-theme-light"> <div class="container"> <div class="text-center"> <h2>${markdownify(feature.title)}</h2> </div> <div class="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"> ${feature.features.map((item, i) => renderTemplate`<div class="feature-card rounded-xl bg-white p-5 pb-8 text-center"> ${item.icon && // <Image
  //   class="mx-auto"
  //   src={item.icon}
  //   width={30}
  //   height={30}
  //   alt=""
  // />
  renderTemplate`<img class="mx-auto"${addAttribute(item.icon, "alt")}${addAttribute(item.icon, "src")}${addAttribute(30, "width")}${addAttribute(30, "height")}>`} <div class="mt-4"> <p class="h5">${unescapeHTML(markdownify(item.name))}</p> <p class="mt-3">${item.content}</p> </div> </div>`)} </div> </div> </section>  <section class="section"> <div class="container"> <div class="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4"> <h5 style="margin: auto">${markdownify(app.title)}</h5> <a${addAttribute(app.google_link, "href")}> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": app?.google, "width": 250, "height": 130, "alt": "Google link" })} </a> <a${addAttribute(app.apple_link, "href")}> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": app?.apple, "width": 250, "height": 130, "alt": "Apple link" })} </a> </div> </div> </section>  ${services.map((service, index) => {
    const isOdd = index % 2 > 0;
    return renderTemplate`<section${addAttribute(`section ${!isOdd && "bg-theme-light"}`, "class")}> <div class="container"> <div class="items-center gap-8 md:grid md:grid-cols-2"> <div${addAttribute(`service-carousel ${!isOdd && "md:order-2"}`, "class")}> ${service.images.length > 1 ? renderTemplate`<div class="swiper"> <div class="swiper-wrapper"> ${service.images?.map((image) => renderTemplate`<div class="swiper-slide"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": image, "width": 538, "height": 328, "alt": "" })} </div>`)} </div> <div class="pagination"></div> </div>` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": service.images[0], "width": 538, "height": 328, "alt": "" })}`} </div>  <div${addAttribute(`service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"}`, "class")}> <h2 class="font-bold leading-[40px]">${service?.title}</h2> <p class="mt-4 mb-2">${service?.content}</p> ${service?.button?.enable && renderTemplate`<a${addAttribute(service?.button.link, "href")} class="cta-link inline-flex items-center text-primary"> ${service?.button.label} <img class="ml-1" src="/images/arrow-right.svg"${addAttribute(18, "width")}${addAttribute(14, "height")} alt="arrow"> </a>`} </div> </div> </div> </section>`;
  })}   <section class="section pb-0"> <div class="mb-8 text-center image-center"> <h2 class="mx-auto max-w-[400px] font-bold leading-[44px]">${unescapeHTML(workflow?.title)}</h2> <p class="mt-3">${unescapeHTML(workflow?.description)}</p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": workflow.image, "alt": "workflow image", "width": 1920, "height": 414 })} </section>  ${renderComponent($$result2, "Cta", $$Cta, { "cta": call_to_action })} ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/Index.astro", void 0);

export { $$Index as $ };
