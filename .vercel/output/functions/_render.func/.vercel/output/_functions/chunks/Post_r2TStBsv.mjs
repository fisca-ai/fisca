import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, s as addAttribute, p as renderComponent, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';
import './astro/assets-service_DFhx4_s8.mjs';
import { $ as $$Image } from './_astro_assets_3vjGwHZ7.mjs';
import { p as plainify, c as config } from './_astro_content_CY9UuciB.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 flex justify-center space-x-2" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="inline-flex items-center justify-center px-2 py-2 rounded bg-theme-light w-[42px] h-[42px] text-center text-dark"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="inline-flex items-center justify-center px-2 py-2 rounded bg-theme-light w-[42px] h-[42px] text-center text-dark"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page"${addAttribute(`rounded bg-primary px-4 py-2 text-white`, "class")}>${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page"${addAttribute(`rounded bg-theme-light w-[42px] h-[42px] text-center px-4 py-2 text-dark`, "class")}>${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="inline-flex items-center justify-center px-2 py-2 rounded bg-theme-light w-[42px] h-[42px] text-center text-dark"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="inline-flex items-center justify-center px-2 py-2 rounded bg-theme-light w-[42px] h-[42px] text-center text-dark"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/components/Pagination.astro", void 0);

const sortByDate = (array) => {
  const sortedArray = array.sort((a, b) => b.data.date - a.data.date);
  return sortedArray;
};

const $$Astro = createAstro("https://fisca.ai/");
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { post, index } = Astro2.props;
  const { blog_folder, summary_length } = config.settings;
  return renderTemplate`${maybeRenderHead()}<div class="post"> ${post.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg", "src": post.data.image, "alt": post.data.title, "width": index === 0 ? 925 : 445, "height": index === 0 ? 475 : 230 })}`} <h2 class="h3 mb-2 mt-4"> <a${addAttribute(`/${blog_folder}/${post.slug}`, "href")} class="block hover:text-primary"> ${post.data.title} </a> </h2> <p>${unescapeHTML(plainify(post.body.slice(0, summary_length)))}</p> <a class="btn btn-primary mt-4"${addAttribute(`/${blog_folder}/${post.slug}`, "href")} rel="">
Read More
</a> </div>`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/partials/Post.astro", void 0);

export { $$Post as $, $$Pagination as a, sortByDate as s };
