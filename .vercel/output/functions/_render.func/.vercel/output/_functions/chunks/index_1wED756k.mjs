import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"pagina-non-trovata\">Pagina non trovata</h2>";

				const frontmatter = {"title":"Errore 404"};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/404/it/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Pagina non trovata\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"pagina-non-trovata","text":"Pagina non trovata"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };