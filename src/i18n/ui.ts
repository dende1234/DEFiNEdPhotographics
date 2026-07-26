export const languages = {
  nl: 'Nederlands',
  en: 'English'
};

export const defaultLang = 'nl';

export const ui = {
  nl: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Prijzen',
    'nav.contact': 'Contact',
    'gallery.empty': "Er zijn nog geen foto's toegevoegd aan de portfolio.",
    'footer.rights': 'Alle rechten voorbehouden.',
    'footer.legal.privacy': 'Privacybeleid',
    'footer.legal.terms': 'Algemene voorwaarden',
    'footer.follow': 'Volg mij',
    'home.cta': 'Neem contact op',
    'contact.name': 'Naam',
    'contact.email': 'E-mailadres',
    'contact.phone': 'Telefoonnummer (optioneel)',
    'contact.message': 'Bericht',
    'contact.submit': 'Verstuur',
    'contact.success.title': 'Bedankt voor je bericht!',
    'contact.success.body': 'Ik neem zo snel mogelijk contact met je op.',
    'contact.success.back': 'Terug naar home',
    '404.title': 'Pagina niet gevonden',
    '404.body': 'De pagina die je zoekt bestaat niet (meer).',
    '404.back': 'Terug naar home'
  },
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'gallery.empty': "No photos have been added to the portfolio yet.",
    'footer.rights': 'All rights reserved.',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms & Conditions',
    'footer.follow': 'Follow me',
    'home.cta': 'Get in touch',
    'contact.name': 'Name',
    'contact.email': 'Email address',
    'contact.phone': 'Phone number (optional)',
    'contact.message': 'Message',
    'contact.submit': 'Send',
    'contact.success.title': 'Thank you for your message!',
    'contact.success.body': "I'll get back to you as soon as possible.",
    'contact.success.back': 'Back to home',
    '404.title': 'Page not found',
    '404.body': "The page you're looking for doesn't exist.",
    '404.back': 'Back to home'
  }
} as const;

export type Lang = keyof typeof ui;
