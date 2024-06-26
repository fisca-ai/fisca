import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Prezzi","description":"meta description","draft":false,"plans":[{"title":"Piano Base","subtitle":"Ideale per piccoli individui","price":49,"type":"mese","features":["Servizio Espresso","Sdoganamento","Servizi Urgenti"],"button":{"label":"Inizia gratuitamente","link":"/contact"}},{"title":"Piano Professionale","subtitle":"Ideale per i professionisti","price":69,"type":"mese","recommended":true,"features":["Servizio Espresso","Sdoganamento","Servizi Urgenti","Servizio Cloud","Migliore Dashboard"],"button":{"label":"Inizia","link":"/contact"}},{"title":"Piano Aziendale","subtitle":"Ideale per grandi individui","price":99,"type":"mese","features":["Servizio Espresso","Sdoganamento","Servizi Urgenti"],"button":{"label":"Inizia","link":"/contact"}}],"call_to_action":{"title":"Hai bisogno di un piano più grande?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.","image":"/images/cta.png","button":{"enable":true,"label":"Contattaci","link":"/contact"}}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/pricing/it/index.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
