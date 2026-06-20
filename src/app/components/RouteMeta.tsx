import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Газ-Проект Инжиниринг | Промышленное оборудование с 2003 года',
    description:
      'ООО «Газ-Проект Инжиниринг» - машиностроительное предприятие полного цикла для нефтегазовой, химической и энергетической отраслей.',
  },
  '/about': {
    title: 'О компании | Газ-Проект Инжиниринг',
    description:
      'История предприятия, производственная команда, сертификаты, лицензии и география деятельности ООО «Газ-Проект Инжиниринг».',
  },
  '/equipment': {
    title: 'Оборудование и компетенции | Газ-Проект Инжиниринг',
    description:
      'Номенклатура промышленного оборудования, инженерные компетенции и реализованные проекты предприятия.',
  },
  '/production': {
    title: 'Производство | Газ-Проект Инжиниринг',
    description:
      'Производственные участки, сварочные цеха, контроль качества, АСУТП и испытательные зоны предприятия.',
  },
  '/contacts': {
    title: 'Контакты и реквизиты | Газ-Проект Инжиниринг',
    description:
      'Юридический адрес, производственная площадка, общий телефон, электронная почта, режим работы и реквизиты предприятия.',
  },
};

function upsertMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

function upsertCanonical(pathname: string) {
  const base = window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, '');
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  element.href = `${base}${pathname === '/' ? '/' : pathname}`;
}

function upsertOrganizationSchema() {
  const id = 'organization-schema';
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Газ-Проект Инжиниринг',
    legalName: 'ООО «Газ-Проект Инжиниринг»',
    foundingDate: '2003',
    email: 'info@gazproektengineering.ru',
    telephone: '+7 (495) 123-45-67',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
      addressLocality: 'Уфа',
    },
  });
}

export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] ?? pages['/'];

    document.documentElement.lang = 'ru';
    document.title = page.title;
    upsertMeta('description', page.description);
    upsertMeta('robots', 'index, follow');
    upsertCanonical(pathname);
    upsertOrganizationSchema();
  }, [pathname]);

  return null;
}
