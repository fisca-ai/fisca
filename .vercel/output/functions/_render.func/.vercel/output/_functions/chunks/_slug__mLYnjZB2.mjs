/* empty css                             */
import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import { s as sortByDate, $ as $$Post, a as $$Pagination } from './Post_r2TStBsv.mjs';
import { c as config, g as getEntryBySlug, $ as $$Base, m as markdownify } from './_astro_content_CY9UuciB.mjs';
import { g as getSinglePage } from './contentParser_Cg2_9Ris.mjs';

const $$Astro = createAstro("https://fisca.ai/");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blog_folder } = config.settings;
  const { slug } = Astro2.params;
  const postIndex = await getEntryBySlug(
    blog_folder,
    "_index"
  );
  const posts = await getSinglePage(config.settings.blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex?.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="mb-10 text-center font-normal lg:text-[56px]">${unescapeHTML(markdownify(postIndex?.data.title))}</h1> <div class="row"> ${currentPosts.map((post) => renderTemplate`<div class="col-12 mb-8 sm:col-6"> ${renderComponent($$result2, "Post", $$Post, { "post": post })} </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": config.settings.blog_folder, "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/page/[slug].astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
