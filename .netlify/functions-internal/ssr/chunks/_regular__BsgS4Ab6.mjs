/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as renderComponent } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from './_astro_content_NMXE1VyB.mjs';
import { g as getSinglePage } from './contentParser_J9CPTnh0.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { title } = data.data;
  const { Content } = await data.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 mb-8 text-center">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/Default.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const prerender = true;
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      lang: page.slug.split("/")[0],
      regular: page.slug.split("/")[1]
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { lang, regular } = Astro2.params;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Default", $$Default, { "data": page })} ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/[regular].astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/[lang]/[regular].astro";
const $$url = "/[lang]/[regular]";

export { $$regular as default, $$file as file, getStaticPaths, prerender, $$url as url };
