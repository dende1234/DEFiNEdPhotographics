export const routes = {
  nl: {
    home: '/',
    portfolio: '/portfolio',
    pricing: '/prijzen',
    contact: '/contact',
    contactSuccess: '/contact/succes',
    privacy: '/privacybeleid',
    terms: '/algemene-voorwaarden'
  },
  en: {
    home: '/en',
    portfolio: '/en/portfolio',
    pricing: '/en/pricing',
    contact: '/en/contact',
    contactSuccess: '/en/contact/success',
    privacy: '/en/privacy-policy',
    terms: '/en/terms'
  }
} as const;

export type RouteKey = keyof (typeof routes)['nl'];
