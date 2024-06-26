import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"page-non-trouvée\">Page non trouvée</h2>";

				const frontmatter = {"title":"Erreur 404"};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/404/fr/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Page non trouvée\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"page-non-trouvée","text":"Page non trouvée"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
