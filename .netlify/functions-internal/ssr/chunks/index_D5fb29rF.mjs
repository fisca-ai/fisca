import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Contattaci","draft":true,"info":{"title":"Perché dovresti contattarci!","description":"Per velocizzare la fatturazione e identificare le opportunità di guadagno mancate.","contacts":["Telefono: +41 798 766 832","Email: [info@fisca.ai](mailto:info@fisca.ai)","Indirizzo: Hügeslstraße 8, 8002, Zurigo"]}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/contact/it/index.md";
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
