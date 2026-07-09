import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/logo';

const menuItems = [
  { path: '/', label: 'Главная' },
  { path: '/about', label: 'О компании' },
  { path: '/equipment', label: 'Оборудование' },
  { path: '/production', label: 'Производство' },
  { path: '/contacts', label: 'Контакты' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path));
  const isSolid = isScrolled || mobileMenuOpen;
  const isHomeTop = location.pathname === '/' && !isSolid;
  const isDarkTop = !isSolid && !isHomeTop;

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'border-b border-[#50626c]/12 bg-white/92 shadow-[0_18px_60px_rgba(38,55,64,0.10)] backdrop-blur-2xl'
          : isHomeTop
            ? 'border-b border-[#50626c]/10 bg-transparent'
            : 'border-b border-white/10 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1920px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" aria-label="Газ-Проект Инжиниринг — главная" className="group flex items-center">
            <Logo
              width={100}
              fill={isDarkTop ? '#ffffff' : '#595b5c'}
              className="transition-all duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          <div
            className={`hidden items-center gap-1 rounded-full border px-1.5 py-1.5 transition-all duration-500 md:flex ${
              isSolid
                ? 'border-[#50626c]/10 bg-[#eef0f1]/70'
                : isHomeTop
                  ? 'border-[#50626c]/12 bg-white/[0.18] backdrop-blur-md'
                  : 'border-white/12 bg-white/[0.08] backdrop-blur-md'
            }`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive(item.path)
                    ? isSolid
                      ? 'bg-white font-semibold text-[#263740] shadow-sm'
                      : isHomeTop
                        ? 'bg-[#50626c]/10 font-semibold text-[#263740]'
                        : 'bg-white/16 font-semibold text-white'
                    : isSolid
                      ? 'font-medium text-[#69777d] hover:bg-white/70 hover:text-[#263740]'
                      : isHomeTop
                        ? 'font-medium text-[#69777d] hover:bg-[#50626c]/8 hover:text-[#263740]'
                        : 'font-medium text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-1 h-px transition-transform duration-300 ${
                    isDarkTop ? 'bg-white/45' : 'bg-[#50626c]/40'
                  } ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span
              className={`px-3 py-1.5 text-xs font-bold transition-colors duration-500 ${
                isDarkTop ? 'bg-white/16 text-white' : 'bg-[#50626c] text-white'
              }`}
            >
              RU
            </span>
            <span className={`px-2 text-xs font-bold transition-colors duration-500 ${isDarkTop ? 'text-white/45' : 'text-[#a7a9ac]'}`}>
              EN
            </span>
            <span className={`px-2 text-xs font-bold transition-colors duration-500 ${isDarkTop ? 'text-white/45' : 'text-[#a7a9ac]'}`}>
              CN
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:hidden ${
              isDarkTop ? 'border-white/16 text-white' : 'border-[#50626c]/14 text-[#50626c]'
            }`}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#50626c]/10 bg-white px-6 py-5 shadow-lg md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block border-b border-[#50626c]/10 px-1 py-3 text-sm ${
                isActive(item.path) ? 'font-semibold text-[#40515a]' : 'text-[#69777d]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
