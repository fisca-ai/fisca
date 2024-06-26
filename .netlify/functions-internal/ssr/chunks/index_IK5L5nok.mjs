import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"banner":{"title":"Concentrati sulla cura dei pazienti, non sulla burocrazia","content":"Automatizza il tuo processo di fatturazione con il nostro copilota di fatturazione.","image":"/images/main_img.webp","button":{"label":"Contattaci","link":"/contact","enable":true}},"feature":{"title":"Le nostre soluzioni","features":[{"name":"Co-pilota AI","icon":"/images/code.svg","content":"Utilizziamo l'IA per identificare automaticamente la codifica medica accurata dalle note dei medici"},{"name":"Conforme","icon":"/images/oop.svg","content":"Siamo conformi alla codifica medica e alle assicurazioni svizzere, meno tempo per preoccuparsi delle richieste di assicurazione"},{"name":"Servizio clienti","icon":"/images/user-clock.svg","content":"Siamo disponibili 24*7"},{"name":"Rapporto qualità-prezzo","icon":"/images/love.svg","content":"Identifichiamo le opportunità di ricavo mancate che già coprono i costi dei servizi"},{"name":"Cloud privato svizzero","icon":"/images/cloud.svg","content":"Privacy by design. Comprendiamo la privacy. I tuoi dati non lasciano mai la Svizzera"},{"name":"Comprensione della fattura","icon":"/images/phone.svg","content":"Scansiona o carica la tua fattura per capire di cosa tratta ogni voce."}]},"app":{"title":"Comprendi le tue fatture","apple":"/images/apple.webp","apple_link":"#","google":"/images/google.webp","google_link":"#"},"services":[{"title":"L'automazione della fatturazione più avanzata","content":"Offriamo l'automazione della fatturazione più avanzata, utilizzando tecnologia all'avanguardia per la fatturazione e l'elaborazione dei pagamenti, offrendo efficienza e sicurezza senza pari. Un'interfaccia intuitiva e funzionalità personalizzabili consentono alle organizzazioni di ottimizzare le loro operazioni finanziarie e rimanere all'avanguardia nel panorama competitivo aziendale con facilità.","images":["/images/img_9.webp"],"button":{"enable":true,"label":"Verificalo","link":"/contact"}},{"title":"Codifica medica accurata","content":"Utilizziamo l'IA per identificare automaticamente la codifica medica accurata. La nostra tecnologia all'avanguardia ottimizza la fatturazione garantendo un'accuratezza mirata.","images":["/images/img_17.webp"],"button":{"enable":true,"label":"Verificalo","link":"/contact"}},{"title":"Aumenta i ricavi e il tasso di richieste attraverso l'automazione","content":"Identifichiamo le opportunità di ricavo mancate e gli elementi mancanti nelle fatture. Rendendo le fatture più accurate e conformi alle assicurazioni.","images":["/images/img_13.webp","/images/img_4.webp"],"button":{"enable":true,"label":"Verificalo","link":"/contact"}},{"title":"Siamo un team esperto","content":"Abbiamo decenni di esperienza nello sviluppo di sistemi di classe mondiale. Comprendiamo la privacy, la conformità e le esigenze dei clienti. Siamo impegnati a fornire il miglior servizio possibile ai nostri clienti.","images":["/images/img_12.webp"],"button":{"enable":true,"label":"Verificalo","link":"/contact"}}],"workflow":{"title":"Trova la soluzione alle tue esigenze con noi.","image":"/images/main_img.webp","description":""},"call_to_action":{"title":"Pronto per iniziare?","content":"Clicca qui sotto e contattaci.","image":"/images/cta.png","button":{"enable":true,"label":"Contattaci","link":"/contact"}}};
				const file = "/home/pankaj/Projects/fisca/landing/website/src/content/homepage/it/index.md";
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
