/* empty css                             */
import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, p as renderComponent, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import { m as markdownify, c as config, $ as $$Base } from './_astro_content_CY9UuciB.mjs';
import './astro/assets-service_DFhx4_s8.mjs';
import { $ as $$Image } from './_astro_assets_3vjGwHZ7.mjs';
import { g as getSinglePage } from './contentParser_Cg2_9Ris.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const { title, image } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center"> <div class="col-12 md:col-8"> <article class="text-center"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "height": 500, "width": 1e3, "alt": title, "class": "rounded-lg" })}`} <h1 class="h2 text-left my-6">${unescapeHTML(markdownify(title))}</h1> <div class="content mb-16 text-left"> ${renderComponent($$result, "Content", Content, {})} <!-- <Markdown content={post.body} components={shortcodes} /> --> </div> </article> </div> </div> </div> </section>`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/PostSingle.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
async function getStaticPaths() {
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const paths = posts.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })} ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/[single].astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

export { $$single as default, $$file as file, getStaticPaths, $$url as url };
