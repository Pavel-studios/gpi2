import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronRight, Factory, FlaskConical, Gauge, Orbit, Pickaxe, Radar, ShieldCheck, X, Zap } from 'lucide-react';

const facts = [
  ['12 000', 'м²', 'площадь производственных мощностей'],
  ['200+', '', 'реализованных промышленных проектов'],
  ['20', 'лет', 'опыта в машиностроении'],
  ['150+', '', 'специалистов в штате предприятия'],
];

const industries = [
  { number: '01', title: 'Нефтегазовая', text: 'Технологические установки, емкостное и факельное оборудование.', icon: Factory },
  { number: '02', title: 'Химическая', text: 'Аппараты и узлы для сложных технологических процессов.', icon: FlaskConical },
  { number: '03', title: 'Энергетика', text: 'Оборудование для генерации, подготовки и транспортировки сред.', icon: Zap },
  { number: '04', title: 'Атомная', text: 'Изделия с повышенными требованиями к контролю и документации.', icon: Orbit },
  { number: '05', title: 'Металлургия', text: 'Инженерные решения для непрерывных производственных циклов.', icon: Pickaxe },
];

const projects = [
  ['01', 'ГПК в Усть-Луге', 'Монтажные вставки DN 100–800', '2025'],
  ['02', 'ЛУКОЙЛ-Волгограднефтепереработка', 'Факельные оголовки ГФНГ-1200', '2025'],
  ['03', 'СИБУР', 'Факельная установка УФ-Н50', '2023'],
];

const production = [
  ['01', 'Заготовительные участки', 'Токарная, фрезерная, расточная и гибочная обработка'],
  ['02', 'Сварочное производство', 'TIG, MIG/MAG, SAW. Аттестованные технологии и персонал'],
  ['03', 'Контроль и испытания', 'ВИК, УЗК, РК, гидравлические и пневматические испытания'],
];

function MediaPlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`media-placeholder ${className}`} aria-label={`Заглушка: ${label}`} role="img">
    <div className="media-placeholder__grid" />
    <span className="media-placeholder__cross media-placeholder__cross--one" />
    <span className="media-placeholder__cross media-placeholder__cross--two" />
    <span className="media-placeholder__label">{label}</span>
    <span className="media-placeholder__scale">01 / 01</span>
  </div>;
}

function AnimatedFact({ value }: { value: string }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const target = Number(value.replace(/\D/g, ''));
    const node = document.getElementById(`fact-${value.replace(/\D/g, '')}`);
    if (!node || !target) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let started = false;
    const format = (number: number) => String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const run = () => {
      if (started) return;
      started = true;
      if (prefersReducedMotion) { setDisplay(`${format(target)}${value.includes('+') ? '+' : ''}`); return; }
      const start = performance.now();
      const duration = 1450;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(`${format(Math.round(target * eased))}${value.includes('+') ? '+' : ''}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { run(); observer.disconnect(); } }, { threshold: .5 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <strong id={`fact-${value.replace(/\D/g, '')}`}>{display}</strong>;
}

export function LandingPage() {
  const [modal, setModal] = useState<{ eyebrow: string; title: string; text: string; details: string[] } | null>(null);
  const openModal = (eyebrow: string, title: string, text: string, details: string[]) => setModal({ eyebrow, title, text, details });

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div className="landing">
    <div className="landing-background" aria-hidden="true"><span /><span /></div>
    <section className="landing-hero">
      {/* Replace /media/production-hero.webm with the approved production video when it is ready. */}
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/media/production-hero.webm" type="video/webm" />
        <source src="/media/production-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" aria-hidden="true" />
      <div className="landing-shell landing-hero__inner">
        <div className="hero-motion" aria-hidden="true"><span className="hero-motion__line" /><span className="hero-motion__node hero-motion__node--one" /><span className="hero-motion__node hero-motion__node--two" /><span className="hero-motion__node hero-motion__node--three" /></div>
        <div className="hero-kicker"><span /> Производственное предприятие / Уфа</div>
        <div className="hero-grid">
          <h1><span className="hero-title-line">Газ-Проект</span><em className="hero-title-line">Инжиниринг</em></h1>
          <div className="hero-aside">
            <p>Проектирование и производство промышленного оборудования для критически важных отраслей.</p>
            <div className="hero-index">/ 01 — ГЛАВНАЯ</div>
          </div>
        </div>
        <div className="process-line">
          {['Проектирование', 'Производство', 'Поставка', 'Монтаж', 'Сервис'].map((step, index) => <div key={step}><b>0{index + 1}</b><span>{step}</span>{index !== 4 && <ChevronRight size={18} />}</div>)}
        </div>
      </div>
    </section>

    <section className="facts-section landing-shell" data-reveal>
      <div className="section-label">[ 01 ] &nbsp; МАСШТАБ В ЦИФРАХ</div>
      <div className="facts-grid">{facts.map(([value, unit, text]) => <article data-reveal key={text}><div><AnimatedFact value={value} /><sup>{unit}</sup></div><p>{text}</p></article>)}</div>
    </section>

    <section className="industries-section" data-reveal>
      <div className="landing-shell">
        <div className="split-heading"><div className="section-label">[ 02 ] &nbsp; ОТРАСЛИ ПРИМЕНЕНИЯ</div><h2>Инженерия для<br /><i>сложных сред.</i></h2></div>
        <div className="industry-list">{industries.map(({ number, title, text, icon: Icon }) => <button data-reveal type="button" onClick={() => openModal(`ОТРАСЛЬ / ${number}`, title, text, ['Инженерная проработка задачи', 'Изготовление на собственных мощностях', 'Контроль на всех этапах'])} key={title}><span className="industry-number">{number}</span><Icon size={30} strokeWidth={1.25} /><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} /></button>)}</div>
      </div>
    </section>

    <section className="projects-section landing-shell" data-reveal>
      <div className="projects-head"><div><div className="section-label">[ 03 ] &nbsp; РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</div><h2>Исполнение,<br />которое видно.</h2></div><p>Опыт поставок для инфраструктурных и промышленных объектов России.</p></div>
      <button data-reveal type="button" onClick={() => openModal('ПРОЕКТ / 2025', 'Комплект монтажных вставок для ГПК в Усть-Луге', 'Поставка фланцевых монтажных вставок DN 100–800 для газоперерабатывающего комплекса.', ['Заказчик: ГСП-Комплектация', 'Отрасль: газопереработка', 'Статус: завершён'])} className="project-feature"><MediaPlaceholder label="ОБЪЕКТ / ЗАГЛУШКА" className="project-feature__media" /><div className="project-feature__copy"><span>ВЫБРАННЫЙ ПРОЕКТ / 2025</span><h3>Комплект монтажных вставок для ГПК в Усть-Луге</h3><p>Поставка фланцевых монтажных вставок DN 100–800 для газоперерабатывающего комплекса.</p><div className="project-feature__meta"><b>ГСП-Комплектация</b><ArrowDownRight /></div></div></button>
      <div className="project-list">{projects.map(([number, client, title, year]) => <button data-reveal type="button" onClick={() => openModal(`ПРОЕКТ / ${year}`, client, title, ['Техническая задача и решение — в процессе наполнения', 'Оборудование: данные будут добавлены', `Год реализации: ${year}`])} key={number}><span>{number}</span><h3>{client}</h3><p>{title}</p><time>{year}</time><ArrowUpRight size={18} /></button>)}</div>
    </section>

    <section className="production-section" data-reveal>
      <div className="landing-shell"><div className="production-title"><div className="section-label">[ 04 ] &nbsp; ПРОИЗВОДСТВЕННЫЕ МОЩНОСТИ</div><h2>Собственное<br /><i>производство.</i></h2><p>От заготовки до финальных испытаний — полный производственный цикл в едином контуре контроля.</p></div>
        <div className="production-layout"><MediaPlaceholder label="ЦЕХ / ЗАГЛУШКА" className="production-media" /><div className="production-list">{production.map(([number, title, text]) => <button data-reveal type="button" onClick={() => openModal(`МОЩНОСТИ / ${number}`, title, text, ['Параметры участка будут уточнены', 'Фото- и видеоматериалы будут добавлены', 'Контроль технологических операций'])} key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight /></button>)}</div></div>
        <div className="quality-strip"><ShieldCheck /><span>Многоступенчатый контроль</span><Radar /><span>Испытания до 40 МПа</span><Gauge /><span>Кран-балка до 15 тонн</span></div>
      </div>
    </section>

    <section className="final-section landing-shell" data-reveal><div><span className="section-label">ГАЗ-ПРОЕКТ ИНЖИНИРИНГ / 2005—2026</span><h2>Точность<br />на каждом этапе.</h2></div><div className="final-mark">ГПИ</div></section>
    {modal && <div className="landing-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={() => setModal(null)}><article onMouseDown={(event) => event.stopPropagation()}><button className="landing-modal__close" type="button" onClick={() => setModal(null)} aria-label="Закрыть окно"><X size={20} /></button><span>{modal.eyebrow}</span><h2 id="modal-title">{modal.title}</h2><p>{modal.text}</p><ul>{modal.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article></div>}
  </div>;
}
