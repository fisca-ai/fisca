import { n as createComponent, o as renderTemplate } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection } from './_astro_content_C5hqh1Bd.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/pankaj/Projects/fisca/landing/website/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
