/* empty css                             */
import { b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_ftBY4dGz.mjs';
import { $ as $$Image } from './_astro_assets_DmzkBWpW.mjs';
import { g as getEntryBySlug, c as config, $ as $$Base, m as markdownify, p as plainify } from './_astro_content_NMXE1VyB.mjs';
import { s as sortByDate, $ as $$Post, a as $$Pagination } from './Post_DlapvkgL.mjs';
import { g as getSinglePage } from './contentParser_J9CPTnh0.mjs';

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder, summary_length } = config.settings;
  const postIndex = await getEntryBySlug(
    blog_folder,
    "index"
  );
  const posts = await getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": "en", "title": postIndex?.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center font-normal lg:text-[56px]">${unescapeHTML(markdownify(postIndex?.data.title))}</h1> <div class="row pb-12"> <div class="row col-12 pb-24 pt-16"> <div class="md:col-6"> ${currentPosts[0].data.image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "rounded-lg", "src": currentPosts[0].data.image, "alt": currentPosts[0].data.title, "width": 925, "height": 475 })}`} </div> <div class="md:col-6"> <h2 class="h3 mb-2 mt-4"> <a${addAttribute(`/${blog_folder}/${currentPosts[0].slug}`, "href")} class="block hover:text-primary"> ${currentPosts[0].data.title} </a> </h2> <p>${unescapeHTML(plainify(currentPosts[0].body.slice(0, summary_length)))}</p> <a class="btn btn-primary mt-4"${addAttribute(`/${blog_folder}/${currentPosts[0].slug}`, "href")} rel="">
Read More
</a> </div> </div> ${currentPosts.slice(1).map((post) => renderTemplate`<div class="col-12 mb-8 sm:col-6 lg:col-4"> ${renderComponent($$result2, "Post", $$Post, { "post": post })} </div>`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "section": blog_folder, "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/index.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, prerender, $$url as url };