import { PointerEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom,
  Building2,
  Factory,
  Flame,
  Globe2,
  Handshake,
  Landmark,
  MapPinned,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import aboutMapBg from '@/imports/about/about-map-bg-20241125.webp';
import nstecLogo from '@/imports/clients/new/nstec.webp';
import activityMapMarkup from '@/imports/map-edited-2.svg?raw';
import './about-layout.css';
import { AboutHeroSection } from './AboutHeroSection';
import { AboutCertificatesSection } from './AboutCertificatesSection';
import { StrategyPartnerSection } from './StrategyPartnerSection';

// Remove the relief effects only in this section; the source SVG stays unchanged.
const flatMapMarkup = activityMapMarkup.replace(/\sfilter="[^"]*"/g, '');

const timeline = [
  {
    year: '2003',
    icon: Building2,
    title: 'Основание компании',
    description:
      'Компания «Газ-Проект Инжиниринг» была основана в г. Уфа в Республике Башкортостан как специализированное производственно-инжиниринговое предприятие по разработке и поставке оборудования для нефтегазовой отрасли, в частности факельных систем и индукционного обогрева.',
  },
  // {
  //   year: '2004',
  //   icon: Flame,
  //   title: 'Испытания факельных оголовков',
  //   description:
  //     'Проведены испытания факельных оголовков со средствами контроля пламени и розжига, сформирована база для сертификации оборудования.',
  // },
  {
    year: '2004–2010',
    icon: Handshake,
    title: 'Первые комплексные проекты',
    description:
      'Работа в сотрудничестве с крупными российскими компаниями. Разработка технических решений, позволяющих минимизировать влияние на экологию выбросов с промышленных предприятий, и оптимизировать расходы при добыче и переработке нефти и газа.',
  },
  {
    year: '2010–2018',
    icon: Factory,
    title: 'Новые технологии и оборудование',
    description:
      'ООО «Газ-Проект Инжиниринг» - компания с уже многолетним опытом разработки и внедрения новых технологий и оборудования в нефтегазовом секторе, модернизирующая производства на различных предприятиях по добыче, переработке и транспорту углеводородов и попутного газа.',
  },
  // {
  //   year: '2018–2023',
  //   icon: MapPinned,
  //   title: 'Расширение географии',
  //   description:
  //     'Поставки и проекты в ключевых регионах России, странах СНГ и на международных направлениях сотрудничества.',
  // },
  // {
  //   year: '2023',
  //   icon: Atom,
  //   title: 'Новые отраслевые компетенции',
  //   description:
  //     'Изготовление оборудования для тепловых и атомных станций, расширение промышленного профиля производства.',
  // },
  {
    year: '2023–2024',
    icon: Landmark,
    title: 'Сотрудничество с отраслевыми институтами',
    description:
      'Компания развивает взаимодействие с ведущими институтами страны – ОАО НПО ЦКТИ, Газпром ВНИИГАЗ, Газпром Проектирование, ВНИИ Нефтемаш, АО НИИ Химмаш, Иркутск НИИ Химмаш.',
  },
  {
    year: '2024–2026',
    icon: Globe2,
    title: 'Международное направление',
    description:
      'Развитие международных связей с Китаем в части поставки оборудования по техническим проектам компании «Газ-Проект Инжиниринг».',
  },
];

const presencePoints = [
  { label: 'Россия', top: '43%', left: '50%' },
  { label: 'Беларусь', top: '25%', left: '20%' },
  { label: 'Казахстан', top: '57%', left: '34%' },
  { label: 'Узбекистан', top: '63%', left: '29%' },
  { label: 'Китай', top: '78%', left: '57%' },
];

const partnerAssets = import.meta.glob('@/imports/about/partners-v3/*.webp', { eager: true, query: '?url', import: 'default' });
// Keep source variants on disk, but show only the customer-approved versions.
const excludedPartnerFiles = new Set(['01.webp', '19.webp', '25.webp', '33.webp', '40.webp', '48.webp', '51.webp']);
const partnerLogos = Object.entries(partnerAssets)
  .filter(([path]) => !excludedPartnerFiles.has(path.split('/').pop()!))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, logo]) => path.endsWith('/32.webp')
    ? { name: 'Ново-Салаватская ТЭЦ', logo: nstecLogo }
    : { name: `Логотип партнёра ${path.split('/').pop()?.replace('.webp', '')}`, logo: logo as string });

export function AboutSection() {
  const [mapScale, setMapScale] = useState(1);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const mapDrag = useRef({ pointerId: -1, x: 0, y: 0 });
  const historyRailRef = useRef<HTMLDivElement>(null);
  const [historyEdges, setHistoryEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const rail = historyRailRef.current;
    if (!rail) return;
    const updateEdges = () => setHistoryEdges({
      start: rail.scrollLeft <= 2,
      end: rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2,
    });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(rail);
    rail.addEventListener('scroll', updateEdges, { passive: true });
    updateEdges();
    return () => {
      observer.disconnect();
      rail.removeEventListener('scroll', updateEdges);
    };
  }, []);


  const clampMapOffset = (x: number, y: number, scale = mapScale) => {
    if (scale <= 1) return { x: 0, y: 0 };

    const maxX = ((scale - 1) * 100) / scale;
    const maxY = ((scale - 1) * 100) / scale;

    return {
      x: Math.min(maxX, Math.max(-maxX, x)),
      y: Math.min(maxY, Math.max(-maxY, y)),
    };
  };

  const setNextMapScale = (nextScale: number) => {
    const scale = Math.min(1.9, Math.max(1, Number(nextScale.toFixed(2))));
    setMapScale(scale);
    setMapOffset((current) => clampMapOffset(current.x, current.y, scale));
  };



  const scrollHistory = (direction: 1 | -1) => {
    const rail = historyRailRef.current;
    if (!rail) return;

    const cards = Array.from(rail.querySelectorAll<HTMLElement>('[data-history-card]'));
    const origin = cards[0]?.offsetLeft ?? 0;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const stops = cards.map(card => Math.min(maxScroll, card.offsetLeft - origin));
    const current = rail.scrollLeft;
    if ((direction > 0 && current >= maxScroll - 2) || (direction < 0 && current <= 2)) return;
    const target = direction > 0
      ? stops.find(stop => stop > current + 2) ?? maxScroll
      : stops.filter(stop => stop < current - 2).at(-1) ?? 0;
    rail.scrollTo({ left: target, behavior: 'smooth' });
  };

  const handleMapPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (mapScale <= 1) return;

    event.preventDefault();
    mapDrag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsMapDragging(true);
  };

  const handleMapPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (mapDrag.current.pointerId !== event.pointerId || mapScale <= 1) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const deltaX = ((event.clientX - mapDrag.current.x) / bounds.width) * 100;
    const deltaY = ((event.clientY - mapDrag.current.y) / bounds.height) * 100;

    mapDrag.current = { ...mapDrag.current, x: event.clientX, y: event.clientY };
    setMapOffset((current) => clampMapOffset(current.x + deltaX, current.y + deltaY));
  };

  const handleMapPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (mapDrag.current.pointerId !== event.pointerId) return;

    mapDrag.current.pointerId = -1;
    setIsMapDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="bg-[#eef0f1]">
      <AboutHeroSection />

      <section className="relative overflow-hidden bg-[#eef1f2] px-6 py-24 sm:px-10 lg:px-16">
        <img
          src={aboutMapBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.5] grayscale saturate-0"
        />
        <div className="absolute inset-0 bg-[#eef1f2]/42" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eef1f2]/72 via-[#eef1f2]/36 to-[#eef1f2]/58" />
        <div className="absolute inset-0 bg-[#50626c]/8 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="section-eyebrow mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
                Наша история
              </div>
              <h2
                className="max-w-3xl text-[#263740]"
                style={{
                  fontSize: 'clamp(36px, 5.4vw, 76px)',
                  fontWeight: 800,
                  letterSpacing: '-0.055em',
                  lineHeight: 0.96,
                }}
              >
                Ключевые этапы развития компании
              </h2>
            </div>
          </div>

          <div className="history-carousel">
            <button type="button" disabled={historyEdges.start} onClick={() => scrollHistory(-1)} aria-label="Предыдущие события" className="history-arrow history-arrow-prev"><ChevronLeft /></button>
            <button type="button" disabled={historyEdges.end} onClick={() => scrollHistory(1)} aria-label="Следующие события" className="history-arrow history-arrow-next"><ChevronRight /></button>
            <div ref={historyRailRef} className="history-rail">
              {timeline.map((item, index) => (
                <article key={item.year} data-history-card className={`history-card ${index % 2 === 0 ? 'history-card-top' : 'history-card-bottom'}`}>
                  <div className="history-date">{item.year}</div>
                  <div className="history-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="activity-section relative overflow-hidden bg-[#263740] px-6 py-24 text-white sm:px-10 lg:px-16">
        <img
          src={aboutMapBg}
          alt=""
          aria-hidden="true"
          className="activity-background absolute h-full w-full object-cover opacity-[0.82]"
        />
        <div className="absolute inset-0 bg-[#263740]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/72 via-[#263740]/18 to-[#263740]/34" />
        <div className="absolute right-[7vw] top-0 hidden h-full w-[18vw] skew-x-[-16deg] bg-white/[0.06] lg:block" />
        <div className="absolute right-[19vw] top-0 hidden h-full w-[9vw] skew-x-[-16deg] bg-white/[0.035] lg:block" />

        <div className="relative mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              География
            </div>
            <h2
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(36px, 5.2vw, 74px)',
                fontWeight: 800,
                letterSpacing: '-0.06em',
                lineHeight: 0.96,
              }}
            >
              Масштаб деятельности
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-white/85">
              <p>Деятельность ООО «Газ-Проект Инжиниринг» охватывает более 20 субъектов РФ на более чем 100 предприятиях.</p>
              <p>Компания активно развивает сотрудничество с деловыми кругами стран СНГ: Беларуси, Казахстана, Узбекистана и укрепляет взаимодействие с Китаем.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative min-w-0 overflow-hidden"
          >
            <div className="mb-4 flex items-center justify-end gap-4">
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  aria-label="Уменьшить карту"
                  onClick={() => setNextMapScale(mapScale - 0.25)}
                  className="flex h-10 w-10 items-center justify-center border border-white/16 bg-white/8 text-white transition-colors hover:bg-white hover:text-[#263740]"
                >
                  <Minus size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Увеличить карту"
                  onClick={() => setNextMapScale(mapScale + 0.25)}
                  className="flex h-10 w-10 items-center justify-center border border-white/16 bg-white/8 text-white transition-colors hover:bg-white hover:text-[#263740]"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div
              className={`relative mx-auto aspect-[20/11] w-full max-w-[980px] overflow-hidden touch-pan-y select-none lg:max-w-[1120px] ${
                mapScale > 1 ? (isMapDragging ? 'cursor-grabbing' : 'cursor-grab') : ''
              }`}
              onPointerDown={handleMapPointerDown}
              onPointerMove={handleMapPointerMove}
              onPointerUp={handleMapPointerUp}
              onPointerCancel={handleMapPointerUp}
              onContextMenu={(event) => event.preventDefault()}
            >
              <div className="absolute left-0 top-0 w-full origin-top scale-y-[0.8] aspect-[16/11]">
                <div className={`absolute inset-0 origin-center ${isMapDragging ? '' : 'transition-transform duration-500'}`}
                  style={{ transform: `translate(${mapOffset.x}%, ${mapOffset.y}%) scale(${mapScale})` }}>
                  <div className="activity-map absolute inset-0" role="img" aria-label="Карта географии деятельности компании" dangerouslySetInnerHTML={{ __html: flatMapMarkup }} />
                  {presencePoints.map((point, index) => (
                    <div key={point.label} data-country={point.label} className="absolute" style={{ top: point.top, left: point.left }}>
                      <div className="country-marker" style={{ transform: `translate(-50%, -50%) scale(${1 / mapScale}, ${1.25 / mapScale})` }}>
                        <span className="country-pulse" />
                        <span className="country-dot" />
                        <span className={`country-label country-label-${index}`}>{point.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-20 max-w-[1680px] border-t border-white/14 pt-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="section-eyebrow mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Кооперация
              </div>
              <h3 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Наши партнеры
              </h3>
            </div>

          </div>

          <div className="overflow-hidden">
            <div className="flex w-max animate-[partners-scroll_178s_linear_infinite] gap-3 hover:[animation-play-state:paused]" style={{ animationDuration: `${partnerLogos.length * 178 / 61}s` }}>
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-28 w-56 shrink-0 items-center justify-center border border-white/10 bg-white px-6"
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-16 w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StrategyPartnerSection />
      <AboutCertificatesSection />
    </div>
  );
}
