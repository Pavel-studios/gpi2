import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { PhotoViewer } from './PhotoViewer';
import pattern from '@/imports/hero/home-pattern.svg';
import introPhoto from '@/imports/strategy-partner/strategy-intro.webp';
import institutesPoster from '@/imports/strategy-partner/strategy-institutes.webp';
import logisticsPoster from '@/imports/strategy-partner/strategy-logistics.webp';
import foreignPoster from '@/imports/strategy-partner/strategy-foreign.webp';
import factoryVisit from '@/imports/strategy-partner/20250308_143638.webp';
import teamVisit from '@/imports/strategy-partner/20250308_144550.webp';
import productionVisit from '@/imports/strategy-partner/20250307_190222.webp';
import workshopVisit from '@/imports/strategy-partner/20250305_141125.webp';
import './strategy-partner.css';

const assets = import.meta.glob('@/imports/about/partners-v3/*.webp', { eager: true, query: '?url', import: 'default' });
const logo = (file: string, alt: string) => ({ src: assets[`/src/imports/about/partners-v3/${file}.webp`] as string, alt });
const additions = Object.entries(import.meta.glob('@/imports/strategy-partner/meetings/*.webp', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b)).map(([path, src]) => ({ src: src as string, alt: path.includes('/02-') ? 'Рабочая встреча с партнёрами в Китае' : 'Рабочая встреча в Москве' }));
const photos = [
  { src: factoryVisit, alt: 'Делегация компании на производственной площадке партнёра' },
  { src: teamVisit, alt: 'Рабочая встреча с представителями партнёра' },
  { src: productionVisit, alt: 'Посещение производственной площадки' },
  { src: workshopVisit, alt: 'Осмотр оборудования на заводе' }, ...additions,
];
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const directions = [
  { id: 'institutes', number: '01', title: 'Отраслевые институты', poster: institutesPoster,
    intro: 'Сотрудничество с профильными и проектными организациями позволяет:',
    points: ['реализовывать масштабные проекты;', 'находить нестандартные решения при разработке проектов.'], lead: '',
    logos: [logo('47', 'Газпром ВНИИГАЗ'), logo('46', 'Газпром проектирование'), logo('48-orange', 'ПКБИ'), logo('49', 'ВНИИНЕФТЕМАШ'), logo('53', 'АО НИИхиммаш'), logo('50', 'НПО ЦКТИ'), logo('52', 'ИркутскНИИхиммаш')] },
  { id: 'logistics', number: '02', title: 'Логистика и таможенное оформление', poster: logisticsPoster,
    intro: 'Поставка оборудования сопровождается полным комплексом логистических и таможенных услуг:',
    points: ['оформление товарных партий с большой номенклатурой товаров;', 'подготовка классификационных решений ФТС для технологического оборудования и комплектных объектов;', 'согласование индивидуальных схем оформления грузов;', 'доставка морским, автомобильным, железнодорожным и авиатранспортом.'],
    lead: '', logos: [logo('60', 'TAMARIX'), logo('61', 'Транстерминал')] },
  { id: 'foreign', number: '03', title: 'Иностранные компании', poster: foreignPoster,
    lead: 'ООО «Газ-Проект Инжиниринг» является официальным дилером Yuanda Valve Group Co., Ltd на территории РФ. Сфера полномочий компании включает развитие рынка и бизнеса: участие в тендерах и коммерческих переговорах, обслуживание клиентов и послепродажную поддержку.',
    intro: 'Партнёрские связи с зарубежными производителями дают возможность:',
    points: ['поставлять на российский рынок современное высокотехнологичное оборудование;', 'использовать при изготовлении высококачественные импортные материалы и комплектующие.'],
    logos: [logo('58', 'YANXIN'), logo('59', 'SUPEZET'), logo('54', 'DORIGHT'), logo('57', 'SINOPEC'), logo('56', 'XCC'), logo('55', 'Yuanda Valve')] },
];

function VideoBackground({ id, poster }: { id: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const update = () => {
      if (visible && !document.hidden && !reduced.matches) {
        if (!video.getAttribute('src')) video.src = `${base}/media/strategy-${id}.mp4`;
        void video.play().catch(() => {});
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: 0.05 });
    observer.observe(video);
    reduced.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); video.pause(); reduced.removeEventListener('change', update); document.removeEventListener('visibilitychange', update); };
  }, [id]);
  return <video ref={ref} className="strategy-video" poster={poster} muted loop playsInline preload="none" aria-hidden="true" />;
}

function Meetings() {
  const rail = useRef<HTMLDivElement>(null), group = useRef<HTMLDivElement>(null);
  const interactionUntil = useRef(0), hovering = useRef(false), touching = useRef(false);
  const target = useRef<number | null>(null);
  const [paused, setPaused] = useState(false), [selected, setSelected] = useState<number | null>(null);
  const interact = () => { interactionUntil.current = performance.now() + 2500; };
  const step = (direction: -1 | 1) => {
    const el = rail.current, row = group.current;
    if (!el || !row) return;
    interact();
    const width = row.offsetWidth, origin = row.getBoundingClientRect().left;
    const stops = Array.from(row.children, child => child.getBoundingClientRect().left - origin);
    let current = target.current ?? el.scrollLeft;
    if (direction < 0 && current < 1) { current += width; el.scrollLeft = current; }
    if (direction > 0 && current >= width) { current -= width; el.scrollLeft = current; }
    const all = [...stops, ...stops.map(x => x + width)];
    target.current = direction > 0 ? all.find(x => x > current + 1) ?? width : all.filter(x => x < current - 1).at(-1) ?? 0;
    el.scrollTo({ left: target.current, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, previous = 0, fraction = 0;
    const tick = (now: number) => {
      const el = rail.current, width = group.current?.offsetWidth ?? 0;
      if (el && width && previous && !paused && selected === null && !hovering.current && !touching.current && !document.hidden && !reduced.matches && now > interactionUntil.current) {
        fraction += Math.min(now - previous, 50) * 80 / 1000;
        const pixels = Math.floor(fraction); fraction -= pixels;
        el.scrollLeft += pixels;
        if (el.scrollLeft >= width) el.scrollLeft -= width;
      }
      previous = now; frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, selected]);
  return <section className="strategy-meetings" aria-labelledby="meetings-title"><div className="strategy-container">
    <div className="strategy-meeting-heading"><div><p className="section-eyebrow strategy-eyebrow">Вместе в деле</p><h2 id="meetings-title">Рабочие встречи</h2></div>
      <div className="strategy-controls">
        <button className="strategy-desktop-arrow" onClick={() => step(-1)} aria-label="Предыдущая фотография"><ChevronLeft size={20} /></button>
        <button onClick={() => setPaused(!paused)} aria-label={paused ? 'Запустить ленту' : 'Приостановить ленту'} aria-pressed={paused}>{paused ? <Play size={18} /> : <Pause size={18} />}</button>
        <button className="strategy-desktop-arrow" onClick={() => step(1)} aria-label="Следующая фотография"><ChevronRight size={20} /></button>
      </div></div>
    <div ref={rail} className="strategy-rail" aria-label="Фотографии рабочих встреч" tabIndex={0}
      onMouseEnter={() => { hovering.current = true; }} onMouseLeave={() => { hovering.current = false; }}
      onTouchStart={() => { touching.current = true; target.current = null; }} onTouchEnd={() => { touching.current = false; interact(); }} onTouchCancel={() => { touching.current = false; interact(); }}
      onWheel={() => { target.current = null; interact(); }} onScroll={() => { if (target.current !== null && Math.abs((rail.current?.scrollLeft ?? 0) - target.current) < 1) target.current = null; }}
      onFocusCapture={() => { hovering.current = true; }} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) hovering.current = false; }}>
      {[0, 1].map(copy => <div key={copy} ref={copy === 0 ? group : undefined} className="strategy-photo-group" aria-hidden={copy === 1 ? true : undefined}>
        {photos.map((photo, i) => <button key={photo.src} className="strategy-photo" tabIndex={copy === 1 ? -1 : 0} onClick={() => setSelected(i)} aria-label={`Открыть фото ${i + 1}: ${photo.alt}`}><img src={photo.src} alt={copy === 0 ? photo.alt : ''} loading="lazy" decoding="async" /></button>)}
      </div>)}
    </div></div>
    {selected !== null && <PhotoViewer images={photos} initialIndex={selected} onClose={() => setSelected(null)} />}
  </section>;
}

export function StrategyPartnerSection() {
  return <div className="strategy-partnership">
    <section className="strategy-intro" aria-labelledby="strategy-title">
      <img src={introPhoto} className="strategy-intro-photo" alt="" loading="lazy" /><div className="strategy-intro-shade" /><img src={pattern} className="strategy-pattern" alt="" />
      <div className="strategy-container strategy-intro-content">
        <p className="section-eyebrow strategy-eyebrow">Стратегическое партнерство</p>
        <h2 id="strategy-title">Объединяем<span><ArrowUpRight />инжиниринг,</span><span><ArrowUpRight />логистику,</span><span><ArrowUpRight />международную кооперацию</span></h2>
        <p className="strategy-intro-description">Производственно-инжиниринговые, транспортно-логистические компетенции и международные связи помогают реализовывать сложные проекты в промышленном оборудовании.</p>
        <nav aria-label="Направления сотрудничества" className="strategy-navigation"><h3>Направления сотрудничества</h3><div>{directions.map(d => <a key={d.id} href={`#strategy-${d.id}`}>{d.title}<ArrowUpRight size={14} /></a>)}</div></nav>
      </div>
    </section>
    {directions.map(d => <section key={d.id} id={`strategy-${d.id}`} className={`strategy-direction strategy-${d.id}`} aria-labelledby={`strategy-title-${d.id}`}>
      <VideoBackground id={d.id} poster={d.poster} /><div className="strategy-video-shade" />
      <div className="strategy-container strategy-direction-content"><div className="strategy-copy">
        <p className="section-eyebrow strategy-eyebrow">Направление {d.number}</p><h2 id={`strategy-title-${d.id}`}>{d.title}</h2>
        {d.lead && <p>{d.lead}</p>}<p>{d.intro}</p><ul>{d.points.map(point => <li key={point}>{point}</li>)}</ul>
      </div><div className="strategy-logos">{d.logos.map(item => <div className="strategy-logo" key={item.alt}><img src={item.src} alt={item.alt} loading="lazy" /></div>)}</div></div>
    </section>)}
    <Meetings />
  </div>;
}
