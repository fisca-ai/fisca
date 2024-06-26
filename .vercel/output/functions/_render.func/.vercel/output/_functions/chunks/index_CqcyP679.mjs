import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Tarification","description":"meta description","draft":false,"plans":[{"title":"Plan de Base","subtitle":"Idéal pour les petites personnes","price":49,"type":"mois","features":["Service Express","Dédouanement","Services Urgents"],"button":{"label":"Commencer gratuitement","link":"/contact"}},{"title":"Plan Professionnel","subtitle":"Idéal pour les professionnels","price":69,"type":"mois","recommended":true,"features":["Service Express","Dédouanement","Services Urgents","Service Cloud","Meilleur Tableau de Bord"],"button":{"label":"Commencer","link":"/contact"}},{"title":"Plan Entreprise","subtitle":"Idéal pour les grandes personnes","price":99,"type":"mois","features":["Service Express","Dédouanement","Services Urgents"],"button":{"label":"Commencer","link":"/contact"}}],"call_to_action":{"title":"Besoin d'un plan plus grand?","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.","image":"/images/cta.png","button":{"enable":true,"label":"Contactez-nous","link":"/contact"}}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/pricing/fr/index.md";
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
