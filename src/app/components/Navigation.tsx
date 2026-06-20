// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';
// import Logo from './ui/logo';

// const menuItems = [
//   { path: '/', label: 'Главная' },
//   { path: '/about', label: 'О компании' },
//   { path: '/equipment', label: 'Оборудование' },
//   { path: '/production', label: 'Производство' },
//   { path: '/contacts', label: 'Контакты' },
// ];

// export function Navigation() {
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();
//   return <nav className="site-navigation fixed top-0 z-50 w-full border-b border-[#50626c]/15 bg-white/95 backdrop-blur-md">
//     <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8">
//       <Link to="/" aria-label="Газ-Проект Инжиниринг — главная" className="flex items-center"><Logo fill="#ffffff" width={103} /></Link>
//       <div className="hidden items-center gap-7 md:flex">
//         {menuItems.map((item) => <Link key={item.path} to={item.path} className={`border-b pb-1 text-[12px] font-bold uppercase tracking-[.08em] transition-colors ${pathname === item.path ? 'border-[#50626c] text-[#50626c]' : 'border-transparent text-[#68757b] hover:text-[#50626c]'}`}>{item.label}</Link>)}
//         <span className="border border-[#d5dcdf] px-2.5 py-1 text-[10px] font-bold tracking-[.12em] text-[#50626c]">RU</span>
//       </div>
//       <button aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen(!open)} className="text-[#50626c] md:hidden">{open ? <X /> : <Menu />}</button>
//     </div>
//     {open && <div className="border-t border-[#d5dcdf] bg-white p-5 md:hidden">{menuItems.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block border-b border-[#edf0f1] py-4 text-sm font-bold text-[#50626c]">{item.label}</Link>)}</div>}
//   </nav>;
// }
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/logo'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('RU');
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/equipment', label: 'Оборудование' },
    { path: '/production', label: 'Производство' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b border-[#A7A9AC]/10 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Logo width={100}/>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuClick}
                className={`relative px-4 py-2 transition-all duration-300 group ${
                  isActive(item.path) ? 'text-[#50626C]' : 'text-[#595B5C] hover:text-[#50626C]'
                }`}
                style={{ fontSize: '14px', fontWeight: isActive(item.path) ? 700 : 500, letterSpacing: '0.02em' }}
              >
                {item.label}
                {isActive(item.path) ? (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#50626C] to-[#8D9DA6]" />
                ) : (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#50626C] to-[#8D9DA6] group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Language switcher */}
          <div className="hidden md:flex items-center gap-2 bg-[#F5F5F5] p-1">
            {['RU', 'EN', 'CN'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 transition-all duration-300 ${
                  language === lang
                    ? 'bg-gradient-to-r from-[#50626C] to-[#8D9DA6] text-white shadow-sm'
                    : 'text-[#595B5C]'
                }
                ${
                  lang != 'RU'
                    ? 'text-[#A7A9AC]'
                    : 'hover:text-[#50626C]'
                }`}
                disabled={lang != 'RU' ? true : false}
                style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#50626C] hover:bg-[#F5F5F5] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#A7A9AC]/10 shadow-lg">
          <div className="px-6 py-6 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuClick}
                className={`block w-full text-left px-4 py-3 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#50626C] to-[#8D9DA6] text-white'
                    : 'text-[#595B5C] hover:bg-[#F5F5F5]'
                }`}
                style={{ fontSize: '15px', fontWeight: isActive(item.path) ? 700 : 500 }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 px-4">
              {['RU', 'EN', 'CN'].map((lang) => (
                <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 transition-all duration-300 ${
                  language === lang
                    ? 'bg-gradient-to-r from-[#50626C] to-[#8D9DA6] text-white shadow-sm'
                    : 'text-[#595B5C]'
                }
                ${
                  lang != 'RU'
                    ? 'text-[#A7A9AC]'
                    : 'hover:text-[#50626C]'
                }`}
                disabled={lang != 'RU' ? true : false}
                style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}
              >
                {lang}
              </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
