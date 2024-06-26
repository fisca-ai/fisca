import { n as createComponent, o as renderTemplate, q as maybeRenderHead, u as unescapeHTML } from './astro/server_BgcBZyK9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Contact Us","draft":true,"info":{"title":"Why you should contact us!","description":"To make billing faster and identify missed revenue opportunities.","contacts":["phone: +41 798 766 832","Mail: [info@fisca.ai](mailto:info@fisca.ai)","Address: Hügeslstraase 8, 8002, Zürich"]}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/contact/en/index.md";
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
