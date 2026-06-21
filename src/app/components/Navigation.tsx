import { useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return <nav className="site-navigation fixed top-0 z-50 w-full border-b border-[#50626c]/15 bg-white/95 backdrop-blur-md">
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-8">
      <Link to="/" aria-label="Газ-Проект Инжиниринг — главная" className="flex items-center"><Logo fill="#ffffff" width={103} /></Link>
      <div className="hidden items-center gap-7 md:flex">
        {menuItems.map((item) => <Link key={item.path} to={item.path} className={`border-b pb-1 text-[12px] font-bold uppercase tracking-[.08em] transition-colors ${pathname === item.path ? 'border-[#50626c] text-[#50626c]' : 'border-transparent text-[#68757b] hover:text-[#50626c]'}`}>{item.label}</Link>)}
        <span className="border border-[#d5dcdf] px-2.5 py-1 text-[10px] font-bold tracking-[.12em] text-[#50626c]">RU</span>
      </div>
      <button aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen(!open)} className="text-[#50626c] md:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-[#d5dcdf] bg-white p-5 md:hidden">{menuItems.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block border-b border-[#edf0f1] py-4 text-sm font-bold text-[#50626c]">{item.label}</Link>)}</div>}
  </nav>;
}
