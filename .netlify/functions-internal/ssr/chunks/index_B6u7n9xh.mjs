import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Contactez-nous","draft":true,"info":{"title":"Pourquoi vous devriez nous contacter !","description":"Pour accélérer la facturation et identifier les opportunités de revenus manquées.","contacts":["Téléphone : +41 798 766 832","Courriel : [info@fisca.ai](mailto:info@fisca.ai)","Adresse : Hügeslstraße 8, 8002, Zürich"]}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/contact/fr/index.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
