import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Kontaktieren Sie uns","draft":true,"info":{"title":"Warum Sie uns kontaktieren sollten!","description":"Um die Abrechnung zu beschleunigen und verpasste Einnahmemöglichkeiten zu identifizieren.","contacts":["Telefon: +41 798 766 832","E-Mail: [info@fisca.ai](mailto:info@fisca.ai)","Adresse: Hügeslstraße 8, 8002, Zürich"]}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/contact/de/index.md";
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
