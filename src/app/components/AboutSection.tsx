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

import gallery01 from '@/imports/about/gallery/about-gallery-01.webp';
import gallery02 from '@/imports/about/gallery/about-gallery-02.webp';
import gallery03 from '@/imports/about/gallery/about-gallery-03.webp';
import gallery04 from '@/imports/about/gallery/about-gallery-04.webp';
import gallery05 from '@/imports/about/gallery/about-gallery-05.webp';
import gallery06 from '@/imports/about/gallery/about-gallery-06.webp';
import gallery07 from '@/imports/about/gallery/about-gallery-07.webp';
import gallery08 from '@/imports/about/gallery/about-gallery-08.webp';
import gallery09 from '@/imports/about/gallery/about-gallery-09.webp';
import gallery10 from '@/imports/about/gallery/about-gallery-10.webp';
import gallery11 from '@/imports/about/gallery/about-gallery-11.webp';
import gallery12 from '@/imports/about/gallery/about-gallery-12.webp';
import gallery13 from '@/imports/about/gallery/about-gallery-13.webp';
import gallery14 from '@/imports/about/gallery/about-gallery-14.webp';
import gallery15 from '@/imports/about/gallery/about-gallery-15.webp';
import gallery16 from '@/imports/about/gallery/about-gallery-16.webp';
import gallery17 from '@/imports/about/gallery/about-gallery-17.webp';
import gallery18 from '@/imports/about/gallery/about-gallery-18.webp';
import gallery19 from '@/imports/about/gallery/about-gallery-19.webp';
import gallery20 from '@/imports/about/gallery/about-gallery-20.webp';
import gallery21 from '@/imports/about/gallery/about-gallery-21.webp';
import gallery22 from '@/imports/about/gallery/about-gallery-22.webp';
import gallery23 from '@/imports/about/gallery/about-gallery-23.webp';
import gallery24 from '@/imports/about/gallery/about-gallery-24.webp';
import gallery25 from '@/imports/about/gallery/about-gallery-25.webp';
import gallery26 from '@/imports/about/gallery/about-gallery-26.webp';
import gallery27 from '@/imports/about/gallery/about-gallery-27.webp';
import gallery28 from '@/imports/about/gallery/about-gallery-28.webp';
import gallery29 from '@/imports/about/gallery/about-gallery-29.webp';
import gallery30 from '@/imports/about/gallery/about-gallery-30.webp';
import gallery31 from '@/imports/about/gallery/about-gallery-31.webp';
import aboutMapBg from '@/imports/about/about-map-bg-20241125.webp';
import activityMapMarkup from '@/imports/map-edited-2.svg?raw';
import logoGazprom from '@/imports/clients/gazprom_logo.webp';
import logoGazpromKomplekt from '@/imports/clients/057_1-2-4.webp';
import logoRosneft from '@/imports/clients/a2ddf127393db4380ee610d7b9e31e66.webp';
import logoBashneft from '@/imports/clients/580f14163611fefad60da78d5c9b904c.webp';
import logoLukoil from '@/imports/clients/png-klev-club-fdy1-p-lukoil-png-1.webp';
import logoSinopec from '@/imports/clients/index_img.webp';
import logoInk from '@/imports/clients/big-catalog-16344744171.webp';
import logoKondensat from '@/imports/clients/Untitled-1.webp';
import logoCkti from '@/imports/clients/partner_5.webp';
import logoSibneftegaz from '@/imports/clients/sibneftegaz_logo.webp';
import logoPurneftegaz from '@/imports/clients/purneftegaz.webp';
import logoRnUvat from '@/imports/clients/rn-uvatneftegaz.webp';
import logoSibur from '@/imports/clients/s1200.webp';
import Logo2 from './ui/logo2';
import { FadingPattern } from './ui/fading-pattern';
import { AboutCertificatesSection } from './AboutCertificatesSection';
import { StrategyPartnerSection } from './StrategyPartnerSection';

const heroSlides = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
];

const timeline = [
  {
    year: '2003',
    icon: Building2,
    title: 'Основание компании',
    description:
      'Компания «Газ-Проект Инжиниринг» была основана в г. Уфа в Республике Башкоротостан. Изначально это было специализированное производственно-инжиниринговое предприятие по разработке и поставке оборудования для нефтегазовой отрасли, в частности факельных систем и индукционного обогрева.',
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
      'Компания развивает  взаимодействие с ведущими институтами страны – НПО ЦКТИ, Газпром ВНИИГАЗ, Газпром Проектирование, ВНИИ Нефтемаш, АО НИИ Химмаш, Иркутск НИИ Химмаш.',
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

const partnerLogos = [
  { name: 'Газпром', logo: logoGazprom },
  { name: 'Газпром комплектация', logo: logoGazpromKomplekt },
  { name: 'Роснефть', logo: logoRosneft },
  { name: 'Башнефть', logo: logoBashneft },
  { name: 'ЛУКОЙЛ', logo: logoLukoil },
  { name: 'Sinopec', logo: logoSinopec },
  { name: 'Иркутская нефтяная компания', logo: logoInk },
  { name: 'Конденсат', logo: logoKondensat },
  { name: 'НПО ЦКТИ', logo: logoCkti },
  { name: 'Сибнефтегаз', logo: logoSibneftegaz },
  { name: 'Пурнефтегаз', logo: logoPurneftegaz },
  { name: 'РН-Уватнефтегаз', logo: logoRnUvat },
  { name: 'СИБУР', logo: logoSibur },
];

export function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mapScale, setMapScale] = useState(1);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const mapDrag = useRef({ pointerId: -1, x: 0, y: 0 });
  const historyRailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

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



  const scrollHistory = (direction: 1 | -1) => {
    const rail = historyRailRef.current;
    if (!rail) return;

    rail.scrollBy({ left: direction * Math.min(560, rail.clientWidth * 0.72), behavior: 'smooth' });
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
            key={slide}
            src={slide}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={false}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1.03 : 1,
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/94 via-[#263740]/64 to-[#263740]/14" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/82 via-transparent to-transparent" />
        <FadingPattern opacity="0.06" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] items-end px-6 pb-14 pt-28 sm:px-10 lg:px-16 lg:pb-20">
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

            <div className="mt-10 flex max-w-xl flex-wrap gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide}
                  type="button"
                  aria-label={`Показать фото ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeSlide === index ? 'w-12 bg-white' : 'w-5 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
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

          <div className="relative -mx-6 sm:-mx-10 lg:mx-0">
            <button
              type="button"
              onClick={() => scrollHistory(-1)}
              aria-label="Предыдущие события"
              className="absolute left-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#50626c]/16 bg-white/70 text-[#50626c]/78 shadow-[0_14px_34px_rgba(38,55,64,0.12)] backdrop-blur-md transition hover:text-[#263740] sm:left-3 lg:left-0 lg:h-16 lg:w-16 lg:-translate-x-1/2 lg:border-0 lg:bg-transparent lg:shadow-none xl:-translate-x-full"
            >
              <ChevronLeft className="h-9 w-9 lg:h-[54px] lg:w-[54px]" strokeWidth={1.1} />
            </button>
            <button
              type="button"
              onClick={() => scrollHistory(1)}
              aria-label="Следующие события"
              className="absolute right-1 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#50626c]/16 bg-white/70 text-[#50626c]/78 shadow-[0_14px_34px_rgba(38,55,64,0.12)] backdrop-blur-md transition hover:text-[#263740] sm:right-3 lg:right-0 lg:h-16 lg:w-16 lg:translate-x-1/2 lg:border-0 lg:bg-transparent lg:shadow-none xl:translate-x-full"
            >
              <ChevronRight className="h-9 w-9 lg:h-[54px] lg:w-[54px]" strokeWidth={1.1} />
            </button>

            <div
              ref={historyRailRef}
              className="relative overflow-x-auto scroll-smooth px-16 pb-4 [scrollbar-width:none] sm:px-20 lg:px-20 [&::-webkit-scrollbar]:hidden"
            >
              <div className="relative flex min-w-max py-12 lg:py-16">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#50626c]/45" />

              {timeline.map((item, index) => {
                const isTop = index % 2 === 0;

                return (
                  <motion.article
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, y: isTop ? -22 : 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.18) }}
                    className="group relative h-[620px] w-[calc(100vw-8rem)] max-w-[310px] shrink-0 sm:w-[340px] sm:max-w-none lg:h-[700px] lg:w-[430px]"
                  >
                    <div className={`absolute left-0 w-px bg-[#50626c] ${isTop ? 'bottom-[310px] h-[230px] lg:bottom-[350px] lg:h-[270px]' : 'top-[310px] h-[230px] lg:top-[350px] lg:h-[270px]'}`} />
                    <div className={`absolute left-0 z-10 bg-[#50626c] px-3 py-1.5 text-[clamp(1.9rem,12vw,2.8rem)] font-black leading-none tracking-[0.02em] text-white shadow-[0_14px_34px_rgba(38,55,64,0.18)] sm:text-[3rem] lg:px-4 lg:text-[clamp(2.2rem,4vw,3.55rem)] ${isTop ? 'top-[248px] lg:top-[282px]' : 'bottom-[248px] lg:bottom-[282px]'}`}>
                      {item.year}
                    </div>
                    <div className={`absolute left-3 w-[min(260px,calc(100%-1.5rem))] sm:w-[300px] lg:w-[330px] ${isTop ? 'top-0 max-h-[230px] lg:max-h-[260px]' : 'top-[390px] max-h-[220px] lg:top-[440px] lg:max-h-[250px]'}`}>
                      <div className="mb-2 max-w-[230px] text-[13px] font-black uppercase leading-4 tracking-[-0.02em] text-[#50626c] sm:max-w-[260px] sm:text-[15px] sm:leading-5">
                        {item.title}
                      </div>
                      <p className="max-w-[250px] text-xs leading-5 text-[#595b5c] sm:max-w-[300px] sm:text-sm sm:leading-6 lg:max-w-[330px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#263740] px-6 py-24 text-white sm:px-10 lg:px-16">
        <img
          src={aboutMapBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.82] grayscale"
        />
        <div className="absolute inset-0 bg-[#263740]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/72 via-[#263740]/18 to-[#263740]/34" />
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
              Деятельность компании ООО «Газ-Проект Инжиниринг» охватывала в разное время более 20 субъектов РФ на более, чем 100 предприятиях. Развитие компании позволило активно развивать сотрудничество с деловыми кругами стран СНГ: Беларуси, Казахстана, Узбекистана и укреплять взаимодействие с Китаем.
            </p>
            <div className="mt-10 w-[min(440px,82vw)] text-[#263740]">
              <Logo2 className="h-auto w-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.28)]" />
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
              className={`relative mx-auto aspect-[16/11] w-full max-w-[980px] overflow-hidden touch-none select-none lg:max-w-[1120px] ${
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

        <div className="relative mx-auto mt-20 max-w-[1680px] border-t border-white/14 pt-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/52">
                Кооперация
              </div>
              <h3 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Наши партнеры
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/54">
              Компании и организации, с которыми связаны реализованные проекты, поставки и инженерное взаимодействие.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex w-max animate-[partners-scroll_38s_linear_infinite] gap-3 hover:[animation-play-state:paused]">
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
