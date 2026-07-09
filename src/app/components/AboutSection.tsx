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
} from 'lucide-react';

import aboutHero1 from '@/imports/about/about-hero-1.webp';
import aboutHero2 from '@/imports/about/about-hero-2.webp';
import aboutHero3 from '@/imports/about/about-hero-3.webp';
import aboutHero4 from '@/imports/about/about-hero-4.webp';
import aboutHero5 from '@/imports/about/about-hero-5.webp';
import aboutMapBg from '@/imports/about/about-map-bg.webp';
import activityMapMarkup from '@/imports/map-edited-2.svg?raw';
import { FadingPattern } from './ui/fading-pattern';
import { AboutCertificatesSection } from './AboutCertificatesSection';
import { StrategyPartnerSection } from './StrategyPartnerSection';

const heroSlides = [
  { image: aboutHero1, label: 'Производственная площадка' },
  { image: aboutHero2, label: 'Территория предприятия' },
  { image: aboutHero3, label: 'Работа производственных участков' },
  { image: aboutHero4, label: 'Команда и процессы' },
  { image: aboutHero5, label: 'Офис и деловая среда' },
];

const timeline = [
  {
    year: '2003',
    icon: Building2,
    title: 'Основание компании',
    description:
      'С момента основания «Газ-Проект Инжиниринг» прошла путь до самостоятельного производственного предприятия полного цикла.',
  },
  {
    year: '2004',
    icon: Flame,
    title: 'Испытания факельных оголовков',
    description:
      'Проведены успешные испытания факельных оголовков со средствами контроля пламени и розжига, получена сертификационная документация.',
  },
  {
    year: '2004–2010',
    icon: Handshake,
    title: 'Первые комплексные проекты',
    description:
      'Работа с крупными российскими компаниями над техническими решениями для снижения экологического воздействия и оптимизации расходов при добыче и переработке нефти и газа.',
  },
  {
    year: '2010–2018',
    icon: Factory,
    title: 'Развитие технологий и оборудования',
    description:
      'Компания укрепляет экспертизу в разработке и внедрении оборудования для предприятий добычи, переработки, транспорта углеводородов и попутного газа.',
  },
  {
    year: '2018–2023',
    icon: MapPinned,
    title: 'Расширение географии',
    description:
      'Поставки и проекты от западных границ России до берегов Охотского моря, месторождений реки Лена, Западной Сибири, южных регионов РФ и стран СНГ.',
  },
  {
    year: '2023',
    icon: Atom,
    title: 'Новые отраслевые компетенции',
    description:
      'Предприятие изготавливает оборудование для тепловых и атомных станций, расширяя промышленный профиль производства.',
  },
  {
    year: '2023–2024',
    icon: Landmark,
    title: 'Сотрудничество с институтами',
    description:
      'Расширено взаимодействие с НПО ЦКТИ, Газпром ВНИИГАЗ, Газпром Проектирование, ВНИИ Нефтемаш, АО НИИ Химмаш и Иркутск НИИ Химмаш.',
  },
  {
    year: '2024–2026',
    icon: Globe2,
    title: 'Международное направление',
    description:
      'Развитие связей с Китаем и поставка оборудования по техническим проектам «Газ-Проект Инжиниринг».',
  },
];

const competencies = [
  'производственные участки полного цикла',
  'инженерная разработка и конструкторская документация',
  'транспортно-логистическая координация',
  'партнерская сеть и международные связи',
];

const presencePoints = [
  { label: 'Россия', top: '43%', left: '50%' },
  { label: 'Беларусь', top: '25%', left: '20%' },
  { label: 'Казахстан', top: '57%', left: '34%' },
  { label: 'Узбекистан', top: '63%', left: '29%' },
  { label: 'Китай', top: '78%', left: '57%' },
];

export function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mapScale, setMapScale] = useState(1);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const mapDrag = useRef({ pointerId: -1, x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
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
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#263740]">
        {heroSlides.map((slide, index) => (
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.label}
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/95 via-[#263740]/72 to-[#263740]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/80 via-transparent to-transparent" />
        <FadingPattern opacity="0.075" />
        <div className="absolute right-[8vw] top-0 hidden h-full w-[22vw] skew-x-[-18deg] bg-white/[0.07] lg:block" />
        <div className="absolute right-[18vw] top-0 hidden h-full w-[10vw] skew-x-[-18deg] bg-white/[0.04] lg:block" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] items-end px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              О компании
            </div>

            <h1
              className="max-w-4xl text-white"
              style={{
                fontSize: 'clamp(46px, 8vw, 120px)',
                fontWeight: 800,
                letterSpacing: '-0.07em',
                lineHeight: 0.92,
              }}
            >
              Более 20 лет
              <span className="block text-white/62">на рынке</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
              Самостоятельное производственное предприятие полного цикла для нефтегазовой,
              химической и энергетической отраслей.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  aria-label={`Показать слайд: ${slide.label}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeSlide === index ? 'w-16 bg-white' : 'w-8 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute -left-24 top-20 h-80 w-80 rotate-45 border border-[#50626c]/10" />
        <div className="absolute right-0 top-0 h-full w-[18vw] skew-x-[-16deg] bg-[#50626c]/8" />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
                История предприятия
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
                Путь от основания до производства полного цикла
              </h2>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute bottom-0 left-7 top-0 hidden w-px bg-gradient-to-b from-[#50626c] via-[#91a0a8] to-transparent md:block" />

            <div className="grid gap-6 md:pl-20">
              {timeline.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18) }}
                    className="group relative overflow-visible border border-[#50626c]/12 bg-white/82 p-6 shadow-[0_24px_80px_rgba(38,55,64,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/28 sm:p-8"
                  >
                    <div className="absolute left-[-3.72rem] top-8 hidden h-4 w-4 rounded-full border-4 border-[#eef0f1] bg-[#50626c] shadow-[0_0_0_1px_rgba(80,98,108,0.28)] md:block" />
                    <div className="absolute right-0 top-0 h-full w-24 skew-x-[-18deg] bg-[#50626c]/6 transition-colors duration-500 group-hover:bg-[#50626c]/12" />
                    <div className="relative flex flex-col gap-5 sm:flex-row">
                      <div className="flex h-14 w-14 shrink-0 rotate-45 items-center justify-center border border-[#50626c]/18 bg-[#263740] text-white shadow-lg shadow-[#263740]/12">
                        <Icon className="-rotate-45" size={24} strokeWidth={1.6} />
                      </div>
                      <div className="grid min-w-0 gap-4 lg:grid-cols-[190px_1fr] lg:gap-7">
                        <div>
                          <div className="text-2xl font-black tracking-[-0.05em] text-[#50626c]">
                            {item.year}
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em] text-[#263740]">
                            {item.title}
                          </h3>
                          <p className="text-base leading-7 text-[#595b5c]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#263740] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(145,160,168,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_18%,transparent_18%,transparent_100%)]" />
        <div className="relative mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/54">
              Компетенции
            </div>
            <h2
              className="max-w-3xl"
              style={{
                fontSize: 'clamp(34px, 5vw, 70px)',
                fontWeight: 800,
                letterSpacing: '-0.055em',
                lineHeight: 0.98,
              }}
            >
              Объединяем производство, инжиниринг и логистику
            </h2>
          </div>

          <div>
            <p className="mb-8 text-lg leading-8 text-white/72">
              Производственные, инженерные и транспортно-логистические компетенции,
              а также международные связи помогают реализовывать сложные проекты в
              промышленном оборудовании — от технической проработки до поставки.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {competencies.map((item, index) => (
                <div
                  key={item}
                  className="relative overflow-hidden border border-white/12 bg-white/[0.06] p-5"
                >
                  <div className="mb-8 text-sm font-black text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-lg font-semibold leading-7 text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#263740] px-6 py-24 text-white sm:px-10 lg:px-16">
        <img
          src={aboutMapBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] grayscale"
        />
        <div className="absolute inset-0 bg-[#263740]/86" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute right-[7vw] top-0 hidden h-full w-[18vw] skew-x-[-16deg] bg-white/[0.06] lg:block" />
        <div className="absolute right-[19vw] top-0 hidden h-full w-[9vw] skew-x-[-16deg] bg-white/[0.035] lg:block" />

        <div className="relative mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/52">
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
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Проекты и поставки охватывают ключевые промышленные регионы России,
              страны ближнего зарубежья и международные направления сотрудничества.
            </p>
            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {['Россия', 'Беларусь', 'Казахстан', 'Узбекистан', 'Китай'].map((item, index) => (
                <div key={item} className="min-h-32 border border-white/12 bg-white/[0.06] p-6">
                  <div className="mb-8 text-sm font-black text-white/28">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-xl font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative overflow-hidden border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="text-sm font-medium text-white/62">
                Увеличьте карту, чтобы увидеть подписи стран
              </div>
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
              className={`relative aspect-[16/11] overflow-hidden bg-[#eef0f1] touch-none select-none ${
                mapScale > 1 ? (isMapDragging ? 'cursor-grabbing' : 'cursor-grab') : ''
              }`}
              onPointerDown={handleMapPointerDown}
              onPointerMove={handleMapPointerMove}
              onPointerUp={handleMapPointerUp}
              onPointerCancel={handleMapPointerUp}
              onContextMenu={(event) => event.preventDefault()}
            >
              <div
                className={`activity-map absolute inset-0 origin-center ${isMapDragging ? '' : 'transition-transform duration-500'}`}
                style={{ transform: `translate(${mapOffset.x}%, ${mapOffset.y}%) scale(${mapScale})` }}
                role="img"
                aria-label="Карта географии деятельности компании"
                dangerouslySetInnerHTML={{ __html: activityMapMarkup }}
              />
              <div
                className={`absolute inset-0 origin-center ${isMapDragging ? '' : 'transition-transform duration-500'}`}
                style={{ transform: `translate(${mapOffset.x}%, ${mapOffset.y}%) scale(${mapScale})` }}
              >
                {presencePoints.map((point, index) => (
                  <div
                    key={point.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: point.top, left: point.left }}
                  >
                    <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#50626c]/50" />
                    <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#50626c] shadow-[0_0_0_6px_rgba(80,98,108,0.22)]" />
                    <span
                      className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#263740]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-all duration-500 ${
                        mapScale > 1.05 || index === 0 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                      }`}
                    >
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StrategyPartnerSection />
      <AboutCertificatesSection />
    </div>
  );
}
