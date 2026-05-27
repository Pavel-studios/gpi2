import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const navigationLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О компании', path: '/about' },
    { name: 'Оборудование', path: '/equipment' },
    { name: 'Производство', path: '/production' },
    { name: 'Контакты', path: '/contacts' }
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 2v36M2 20h36' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center">
                <div className="w-7 h-7 border-2 border-white" />
              </div>
              <div>
                <div className="text-white leading-none mb-1" style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '0.02em' }}>
                  ГАЗПРОЕКТ
                </div>
                <div className="text-white/70 leading-none" style={{ fontWeight: 500, fontSize: '9px', letterSpacing: '0.1em' }}>
                  ИНЖИНИРИНГ
                </div>
              </div>
            </div>
            <p
              className="text-white/70"
              style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.6 }}
            >
              Проектирование и производство промышленного оборудования с 2005 года
            </p>
          </div>

          <div>
            <div
              className="text-white/90 mb-4"
              style={{ fontSize: '14px', fontWeight: 700 }}
            >
              Разделы
            </div>
            <div className="space-y-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-white/60 hover:text-white transition-colors"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              className="text-white/90 mb-4"
              style={{ fontSize: '14px', fontWeight: 700 }}
            >
              Контакты
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="text-white/50 flex-shrink-0 mt-0.5" size={16} />
                <span
                  className="text-white/70"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  +7 (495) 123-45-67
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-white/50 flex-shrink-0 mt-0.5" size={16} />
                <span
                  className="text-white/70"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  info@gazproektengineering.ru
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="text-white/50"
            style={{ fontSize: '12px', fontWeight: 400 }}
          >
            © 2005–2026 ООО «Газ-Проект Инжиниринг». Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '12px', fontWeight: 500 }}>
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '12px', fontWeight: 500 }}>
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
