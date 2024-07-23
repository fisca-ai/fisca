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
  en: {
    Home: "Home",
    "About Us": "About Us",
    Company: "Company",
    Products: "Products",
    Support: "Support",
    Privacy: "Privacy Policy",
    "Privacy Policy": "Privacy Policy",
    "Terms & Conditions": "Terms & Conditions",
    "Get Started": "Get Started",
    "AI Billing": "AI Billing",
    Contact: "Contact",
    Pricing: "Pricing",
    Name: "Name",
    "Your email": "Your Email",
    Subject: "Subject",
    "Your message": "Your message",
    "Send Now": "Send Now",
    "Menu Open": "Menu Open",
    "Menu Close": "Menu Close",
    FAQ: "FAQ",
    copyright: "© 2022. Fisca. All rights reserved",
    fisca_title: "Fisca - AI Medical Coding and Billing Platform",
    fisca_description:
      "Empowering healthcare providers with AI-driven diagnostic coding, billing, claim management, and analytics for advanced revenue management and insightful claims processing for a brighter future.",
  },
  de: {
    Home: "Startseite",
    "About Us": "Über uns",
    Company: "Firma",
    Products: "Produkte",
    Support: "Hilfe",
    Privacy: "Datenschutz",
    "Privacy Policy": "Datenschutz-Bestimmungen",
    "Terms & Conditions": "Bedingungen & Konditionen",
    "Get Started": "Los geht's",
    "AI Billing": "AI Rechnungen",
    Contact: "Kontakt",
    Pricing: "Preise",
    Name: "Name",
    "Your email": "Ihre Email",
    Subject: "Betreff",
    "Your message": "Ihre Nachricht",
    "Send Now": "Jetzt senden",
    "Menu Open": "Menu öffnen",
    "Menu Close": "Menu schließen",
    copyright: "© 2022. Fisca. Alle Rechte vorbehalten",
    fisca_title: "Fisca - KI Medizinische Kodierungs- und Abrechnungsplattform",
    fisca_description:
      "Stärkung der Gesundheitsdienstleister durch KI-gestützte diagnostische Kodierung, Abrechnung, Anspruchsmanagement sowie Analysen und Erkenntnisse für eine fortschrittliche Einnahmenverwaltung und optimierte Anspruchsverarbeitung.",
  },
  fr: {
    Home: "Accueil",
    "About Us": "Sur nous",
    Company: "Entreprise",
    Products: "Produits",
    Support: "Soutien",
    Privacy: "Confidentialité",
    "Privacy Policy": "Politique de confidentialité",
    "Terms & Conditions": "Termes et conditions",
    "Get Started": "Commencer",
    "AI Billing": "Facturation AI",
    Contact: "Contact",
    Pricing: "Tarifs",
    Name: "Nom",
    "Your email": "Votre email",
    Subject: "Sujet",
    "Your message": "Votre message",
    "Send Now": "Envoyer maintenant",
    "Menu Open": "Menu ouvert",
    "Menu Close": "Menu ferme",
    copyright: "© 2022. Fisca. Tous droits réservés",
    fisca_title:
      "Fisca - Plateforme de codage et de facturation médicale alimentée par l'IA",
    fisca_description:
      "Renforcement des prestataires de soins de santé grâce à la codification diagnostique et à la facturation alimentées par l'IA, ainsi qu'à la gestion des demandes, l'analyse et les informations pour une gestion des revenus et un traitement des demandes plus avancés.",
  },
  it: {
    Home: "Home",
    "About Us": "Chi siamo",
    Company: "Azienda",
    Products: "Prodotti",
    Support: "Supporto",
    Privacy: "La privacy",
    "Privacy Policy": "Politica sulla riservatezza",
    "Terms & Conditions": "Termini e Condizioni",
    "Get Started": "Inizia",
    "AI Billing": "Fatturazione AI",
    Contact: "Contatti",
    Pricing: "Prezzi",
    Name: "Nome",
    "Your email": "La tua email",
    Subject: "Oggetto",
    "Your message": "Il tuo messaggio",
    "Send Now": "Invia ora",
    "Menu Open": "Menu aperto",
    "Menu Close": "Menu chiuso",
    copyright: "© 2022. Fisca. Tutti i diritti riservati",
    fisca_title:
      "Fisca - Piattaforma di codifica e fatturazione medica basata su IA",
    fisca_description:
      "Potenziare i fornitori di assistenza sanitaria con codifica diagnostica e fatturazione basate su IA, gestione delle richieste, analisi e intuizioni per una gestione dei ricavi e una gestione delle richieste più avanzate.",
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
