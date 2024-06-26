import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Preise","description":"meta description","draft":false,"plans":[{"title":"Basisplan","subtitle":"Am besten für kleine Einzelpersonen","price":49,"type":"monat","features":["Express-Service","Zollabfertigung","Zeitkritische Dienste"],"button":{"label":"Kostenlos starten","link":"/contact"}},{"title":"Professioneller Plan","subtitle":"Am besten für Fachleute","price":69,"type":"monat","recommended":true,"features":["Express-Service","Zollabfertigung","Zeitkritische Dienste","Cloud-Service","Bestes Dashboard"],"button":{"label":"Starten","link":"/contact"}},{"title":"Geschäftsplan","subtitle":"Am besten für große Einzelpersonen","price":99,"type":"monat","features":["Express-Service","Zollabfertigung","Zeitkritische Dienste"],"button":{"label":"Starten","link":"/contact"}}],"call_to_action":{"title":"Benötigen Sie einen größeren Plan?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.","image":"/images/cta.png","button":{"enable":true,"label":"Kontaktieren Sie uns","link":"/contact"}}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/pricing/de/index.md";
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
