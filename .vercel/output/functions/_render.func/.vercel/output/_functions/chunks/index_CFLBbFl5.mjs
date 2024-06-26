import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Pricing","description":"meta description","draft":false,"plans":[{"title":"Basic Plan","subtitle":"Best For Small Individuals","price":49,"type":"month","features":["Express Service","Customs Clearance","Time-Critical Services"],"button":{"label":"Get started for free","link":"/contact"}},{"title":"Professional Plan","subtitle":"Best For Professionals","price":69,"type":"month","recommended":true,"features":["Express Service","Customs Clearance","Time-Critical Services","Cloud Service","Best Dashboard"],"button":{"label":"Get started","link":"/contact"}},{"title":"Business Plan","subtitle":"Best For Large Individuals","price":99,"type":"month","features":["Express Service","Customs Clearance","Time-Critical Services"],"button":{"label":"Get started","link":"/contact"}}],"call_to_action":{"title":"Need a larger plan?","content":"The customer is very important, the customer will be followed by the customer. It is sad to be sad, but it is time to be happy..","image":"/images/cta.png","button":{"enable":true,"label":"Contact Us","link":"/contact"}}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/pricing/en/index.md";
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
