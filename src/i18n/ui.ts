export const languages = {
  de: "Deutsche",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

export const defaultLang = "en";
export const showDefaultLang = true;

type Ui = {
  [key: string]: { [key: string]: string };
};

export const ui: Ui = {
  de: {
    Home: "Startseite",
    About: "Über uns",
    Company: "Firma",
    Products: "Produkte",
    Support: "Hilfe",
    Privacy: "Datenschutz",
    "Privacy Policy": "Datenschutz-Bestimmungen",
    "Terms & Conditions": "Bedingungen & Konditionen",
    "Get Started": "Los geht's",
    "AI Billing": "AI Rechnungen",
    Contact: "Kontaktiere uns",
    Pricing: "Preise",
    Name: "Name",
    "Your email": "Ihre Email",
    Subject: "Betreff",
    "Your message": "Ihre Nachricht",
    "Send Now": "Jetzt senden",
    "Menu Open": "Menu öffnen",
    "Menu Close": "Menu schließen",
  },
  en: {
    Home: "Home",
    About: "About Us",
    Company: "Company",
    Products: "Products",
    Support: "Support",
    Privacy: "Privacy Policy",
    "Privacy Policy": "Privacy Policy",
    "Terms & Conditions": "Terms & Conditions",
    "Get Started": "Get Started",
    "AI Billing": "AI Billing",
    Contact: "Contact Us",
    Pricing: "Pricing",
    Name: "Name",
    "Your email": "Your Email",
    Subject: "Subject",
    "Your message": "Your message",
    "Send Now": "Send Now",
    "Menu Open": "Menu Open",
    "Menu Close": "Menu Close",
  },
  fr: {
    Home: "Accueil",
    About: "A propos",
    Company: "Entreprise",
    Products: "Produits",
    Support: "Soutien",
    Privacy: "Confidentialité",
    "Privacy Policy": "Politique de confidentialité",
    "Terms & Conditions": "Termes et conditions",
    "Get Started": "Commencer",
    "AI Billing": "Facturation AI",
    Contact: "Nous contacter",
    Pricing: "Tarifs",
    Name: "Nom",
    "Your email": "Votre email",
    Subject: "Sujet",
    "Your message": "Votre message",
    "Send Now": "Envoyer maintenant",
    "Menu Open": "Menu ouvert",
    "Menu Close": "Menu ferme",
  },
  it: {
    Home: "Home",
    About: "Chi siamo",
    Company: "Azienda",
    Products: "Prodotti",
    Support: "Supporto",
    Privacy: "La privacy",
    "Privacy Policy": "Politica sulla riservatezza",
    "Terms & Conditions": "Termini e Condizioni",
    "Get Started": "Inizia",
    "AI Billing": "Fatturazione AI",
    Contact: "Contattaci",
    Pricing: "Prezzi",
    Name: "Nome",
    "Your email": "La tua email",
    Subject: "Oggetto",
    "Your message": "Il tuo messaggio",
    "Send Now": "Invia ora",
    "Menu Open": "Menu aperto",
    "Menu Close": "Menu chiuso",
  },
} as const;

type Routes = {
  [key: string]: { [key: string]: string };
};
export const routes: Routes = {
  de: {
    services: "leistungen",
  },
  fr: {
    services: "prestations-de-service",
  },
  it: {
    services: "servizi",
  },
};
