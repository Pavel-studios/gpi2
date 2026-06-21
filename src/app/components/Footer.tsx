import { Link } from 'react-router-dom';
import Logo from './ui/logo';

export function Footer() {
  return <footer className="site-footer bg-[#1f2729] text-white">
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] md:px-8 md:py-16">
      <div><Logo fill="#ffffff" width={142} /><p className="mt-6 max-w-xs text-sm leading-6 text-[#b8c4c9]">Проектирование и производство промышленного оборудования.</p></div>
      <div className="text-sm leading-7 text-[#cbd4d7]"><p className="mb-2 text-[10px] font-bold tracking-[.14em] text-[#82969f]">РАЗДЕЛЫ</p><Link className="block hover:text-white" to="/about">О компании</Link><Link className="block hover:text-white" to="/equipment">Оборудование</Link><Link className="block hover:text-white" to="/production">Производство</Link></div>
      <div className="text-sm leading-7 text-[#cbd4d7]"><p className="mb-2 text-[10px] font-bold tracking-[.14em] text-[#82969f]">КОНТАКТЫ</p><p>г. Уфа</p><p>info@gazproektengineering.ru</p><Link className="hover:text-white" to="/contacts">Все контакты →</Link></div>
    </div>
    <div className="border-t border-white/10 px-5 py-4 text-center text-[10px] tracking-[.1em] text-[#82969f]">© 2026 ГАЗ-ПРОЕКТ ИНЖИНИРИНГ</div>
  </footer>;
}
