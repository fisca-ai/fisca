/* empty css                             */
import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from './astro/server_MWqX10iY.mjs';
import 'kleur/colors';
import { g as getEntryBySlug, m as markdownify, $ as $$Base, c as config, u as useTranslations } from './_astro_content_B0xy4c18.mjs';

const $$Astro$1 = createAstro("https://fisca.ai/");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const { lang } = Astro2.props;
  const entry = await getEntryBySlug("contact", lang);
  const { contact_form_action } = config.params;
  const { title, description, info } = entry?.data;
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "lang": lang, "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center font-normal">${unescapeHTML(markdownify(title))}</h1> <div class="section row pb-0"> <div class="col-12 md:col-6 lg:col-7"> <form class="contact-form" method="POST"${addAttribute(contact_form_action, "action")} data-netlify="true"> <div class="mb-3"> <input class="form-input w-full rounded" name="name" type="text"${addAttribute(t("Name"), "placeholder")} required> </div> <div class="mb-3"> <input class="form-input w-full rounded" name="email" type="email"${addAttribute(t("Your email"), "placeholder")} required> </div> <div class="mb-3"> <input class="form-input w-full rounded" name="subject" type="text"${addAttribute(t("Subject"), "placeholder")} required> </div> <div class="mb-3"> <textarea class="form-textarea w-full rounded-md" rows="7"${addAttribute(t("Your message"), "placeholder")}></textarea> </div> <button type="submit" class="btn btn-primary"> Send Now</button> </form> </div> <div class="content col-12 md:col-6 lg:col-5"> <h4>${unescapeHTML(markdownify(info?.title))}</h4> <p class="mt-4">${unescapeHTML(markdownify(info?.description))}</p> <ul class="contact-list mt-5 list-none pl-0"> ${info?.contacts?.map((contact) => renderTemplate`<li> <strong class="text-dark">${unescapeHTML(markdownify(contact))}</strong> </li>`)} </ul> </div> </div> </div> </section> ` })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/layouts/pages/Contact.astro", void 0);

const $$Astro = createAstro("https://fisca.ai/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = Astro2.cookies.get("lang")?.value || "en";
  return renderTemplate`${renderComponent($$result, "BaseContact", $$Contact$1, { "lang": lang })}`;
}, "/home/pankaj/Projects/fisca/landing/website/src/pages/contact.astro", void 0);

const $$file = "/home/pankaj/Projects/fisca/landing/website/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
