import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import pattern from '@/imports/pattern.svg';
import Logo from './ui/logo';

const navigationLinks = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  { name: 'Оборудование', path: '/equipment' },
  { name: 'Производство', path: '/production' },
  { name: 'Контакты', path: '/contacts' },
];

const contactItems = [
  {
    icon: Mail,
    label: 'Почта',
    value: ['mail@gpiufa.ru'],
    href: 'mailto:mail@gpiufa.ru',
  },
  {
    icon: MapPin,
    label: 'Почтовый адрес',
    value: ['450005, Республика Башкортостан, г. Уфа, ул. Мингажева, дом 129']
  },
  {
    icon: MapPin,
    label: 'Юридический адрес',
    value: ['450069, Республика Башкортостан, г. Уфа, ул. Производственная, дом 5 корпус 1']
  },
  {
    icon: Phone,
    label: 'Номера телефонов',
    value: ['+7 (347) 216-46-50', '+7 (347) 216-46-51']
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#263740] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.12),transparent_32%),linear-gradient(135deg,#263740_0%,#334650_48%,#1f3038_100%)]" />
      <div
        className="absolute -right-32 top-0 h-full w-[72vw]"
        style={{
          backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.012) 24%, rgba(255,255,255,0.045) 58%, rgba(255,255,255,0.075) 100%)',
          maskImage: `url(${pattern})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'right center',
          maskSize: 'cover',
          WebkitMaskImage: `url(${pattern})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'right center',
          WebkitMaskSize: 'cover',
        }}
      />
      <div className="absolute right-[8vw] top-0 hidden h-full w-[18vw] skew-x-[-16deg] bg-white/[0.055] lg:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />

      <div className="relative mx-auto max-w-[1680px]">
        <div className="border-b border-white/12 pb-10">
          <Logo fill="#ffffff" width={128} />
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_0.7fr_1.1fr]">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/42">Компания</div>
            <p className="max-w-sm text-[22px] leading-7 text-white/58">
              ООО «Газ-Проект Инжиниринг» —<br/>российский производитель промышленного оборудования с собственной производственной базой в{'\u00A0'}г.{'\u00A0'}Уфе.
            </p>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/42">Разделы</div>
            <div className="grid grid-cols-1 gap-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center justify-between border-b border-white/10 py-2.5 text-sm font-medium text-white/62 transition-colors hover:text-white"
                >
                  {item.name}
                  <ArrowUpRight size={14} className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/42">Контакты</div>
            <div className="grid gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex gap-4 border border-white/10 bg-white/[0.045] p-5 transition-colors hover:bg-white/[0.075]">
                    <Icon className="mt-1 shrink-0 text-white/42" size={18} />
                    <div>
                      <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-white/34">{item.label}</div>
                      {item.value.map(value => (
                        <div className="text-sm leading-6 text-white/72">{value}</div>
                      ))
                      }
                      
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 pt-8 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
          <div>© 2003–2026 ООО «Газ-Проект Инжиниринг». Все права защищены.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-white/70">
              Политика конфиденциальности
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
