import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizedPath(lang: Lang, path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? cleanPath : `/en${cleanPath}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'nl' ? 'en' : 'nl';
}
