import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import pattern from '@/imports/pattern.svg';
import heroPattern from '@/imports/hero/home-pattern.svg';
import heroPoster from '@/imports/production-page/production-hero-page4-poster.webp';

const publicBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const heroVideo = `${publicBase}/media/production-hero-page4.mp4`;
const productionPhotoModules = import.meta.glob('/src/imports/production-cards/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

type ProductionPhoto = { src: string; position?: string };

const productionPhotos = (prefix: string, positions: string[] = []): ProductionPhoto[] =>
  Object.entries(productionPhotoModules)
    .filter(([path]) => path.includes(`/production-cards/${prefix}-`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src], index) => ({ src, position: positions[index] ?? 'center center' }));

const productionAreas = [
  {
    number: '01',
    title: 'Заготовительный участок',
    description:
      'Лентопильные станки до Ø300 мм, портал газо-плазменной резки до δ=70 мм и листогибочные станки до δ=30 мм.',
    bullets: ['Лентопильные станки', 'Газо-плазменная резка', 'Лазерная резка', 'Листогибочные станки'],
    images: productionPhotos('blanking', ['50%', '57%', '51%', '53%', '49%', '50%', '61%', '76%']),
  },
  {
    number: '02',
    title: 'Участки механической обработки',
    description: 'Универсальное оборудование и станки с ЧПУ для механической обработки деталей.',
    bullets: ['Токарные станки', 'Фрезерные станки', 'Карусельные станки', 'Шлифовальные станки', 'Расточные станки', 'Сверлильные станки'],
    images: productionPhotos('machining', ['35%', '54%', '55%', '52%', '50%', '52%', '72%', '48%', '47%', '50%', '61%']),
  },
  {
    number: '03',
    title: 'Сварочные участки',
    description:
      'Полный спектр аттестованных сварочных технологий и персонала для работы с различными материалами.',
    bullets: ['TIG — аргонодуговая сварка', 'MIG/MAG — полуавтоматическая сварка', 'SAW — сварка под флюсом', 'MMA — ручная дуговая сварка', 'Ручная электродуговая сварка'],
    images: productionPhotos('welding', ['48%', '39%', '49%', '49%', '54%', '49%', '41%', '48%', '49%', '51%', '47%', '50%']),
  },
  {
    number: '04',
    title: 'Служба контроля качества',
    description:
      'Контроль материалов, сварных соединений и готового оборудования на всех этапах производства.',
    bullets: ['Визуально-измерительный контроль', 'Радиографический контроль', 'Ультразвуковой контроль', 'Контроль герметичности', 'Рентгенфлуорисцентный контроль', 'Капиллярный контроль'],
    images: productionPhotos('quality', ['48%', '50%', '55%', '50%', '50%', '49%', '50%']),
  },
  {
    number: '05',
    title: 'Участок АСУ ТП',
    description:
      'Автоматизация управления сложным оборудованием, сборка и настройка систем управления технологическими процессами.',
    bullets: ['Сборка шкафов управления', 'Автоматизация параметров', 'Пусконаладочные работы'],
    images: productionPhotos('automation', ['50%', '50%', '50%']),
  },
  {
    number: '06',
    title: 'Участок термообработки',
    description:
      'Индукционная термообработка — прогрессивный метод термической обработки металлов.',
    bullets: ['Индукционная термообработка', 'Контроль режимов нагрева', 'Подготовка деталей к дальнейшей обработке'],
    images: productionPhotos('heat', ['50%', '50%']),
  },
  {
    number: '07',
    title: 'Участок испытаний',
    description: 'Возможность выполнения приемочных, приемо-сдаточных, квалификационных испытаний, в том числе испытаний на прочность, плотность и герметичность оборудования.',
    bullets: ['Гидравлические испытания', 'Пневматические испытания', 'Контроль работоспособности', 'Контроль массы'],
    images: productionPhotos('testing', ['48%', '54%', '54%', '51%']),
  },
  {
    number: '08',
    title: 'Участок нанесения лакокрасочного покрытия',
    description:
      'Нанесение однослойных и многослойных покрытий с контролем адгезии и толщинометрией каждого слоя.',
    bullets: ['Однослойные покрытия', 'Многослойные покрытия', 'Контроль адгезии', 'Толщинометрия'],
    images: productionPhotos('coating', ['50%', '52%', '51%', '54%', '55%', '50%', '50%']),
  },
];

export function ProductionSection() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});

  const switchImage = (areaTitle: string, direction: 1 | -1, total: number) => {
    setActiveImages((current) => {
      const active = current[areaTitle] ?? 0;
      return {
        ...current,
        [areaTitle]: (active + direction + total) % total,
      };
    });
  };

  return (
    <div className="bg-[#eef0f1]">
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#263740]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/96 via-[#263740]/70 to-[#263740]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/86 via-transparent to-transparent" />
        <div className="absolute right-[8vw] top-0 hidden h-full w-[22vw] skew-x-[-18deg] bg-white/[0.07] lg:block" />
        <div className="absolute right-[19vw] top-0 hidden h-full w-[10vw] skew-x-[-18deg] bg-white/[0.04] lg:block" />
        <img
          src={heroPattern}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-auto max-w-none -translate-x-[10%] -translate-y-[8%] brightness-0 invert opacity-[0.05]"
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] items-end px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/76 backdrop-blur-md">
              Производство
            </div>
            <h1
              className="max-w-5xl text-white"
              style={{
                fontSize: 'clamp(46px, 8vw, 118px)',
                fontWeight: 800,
                letterSpacing: '-0.07em',
                lineHeight: 0.92,
              }}
            >
              Собственное
              <span className="block text-white/62">производство</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/74 sm:text-xl">
              Производственные участки полного цикла: механическая обработка,
              сварка, контроль качества и испытания оборудования
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div
          className="absolute -right-32 top-32 h-[560px] w-[560px] opacity-[0.05]"
          style={{
            backgroundColor: '#263740',
            maskImage: `url(${pattern})`,
            maskSize: '170px 170px',
            WebkitMaskImage: `url(${pattern})`,
            WebkitMaskSize: '170px 170px',
          }}
        />
        <div className="absolute left-0 top-0 h-full w-[18vw] skew-x-[-16deg] bg-[#50626c]/8" />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="section-eyebrow mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
                Участки
              </div>
              <h2
                className="max-w-4xl text-[#263740]"
                style={{
                  fontSize: 'clamp(36px, 5.2vw, 74px)',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                  lineHeight: 0.96,
                }}
              >
                Производственные участки полного цикла
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {productionAreas.map((area, index) => {
              const activeIndex = activeImages[area.title] ?? 0;

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
                  className="group relative overflow-hidden border border-[#50626c]/12 bg-white shadow-[0_24px_80px_rgba(38,55,64,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/28"
                >
                  <div className="grid min-h-[560px] lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative min-h-[330px] overflow-hidden bg-[#263740]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${area.title}-${activeIndex}`}
                          src={area.images[activeIndex].src}
                          alt={area.title}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 h-full w-full object-cover"
                          style={{ objectPosition: area.images[activeIndex].position }}
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17252c]/82 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 text-sm font-black tracking-[0.18em] text-white/62">
                        {area.number}
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 flex justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => switchImage(area.title, -1, area.images.length)}
                          className="flex h-11 w-11 items-center justify-center border border-[#8D9DA6] bg-[#8D9DA6] text-white transition-colors hover:bg-[#718691]"
                          aria-label="Предыдущее фото"
                        >
                          <ArrowLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => switchImage(area.title, 1, area.images.length)}
                          className="flex h-11 w-11 items-center justify-center border border-[#8D9DA6] bg-[#8D9DA6] text-white transition-colors hover:bg-[#718691]"
                          aria-label="Следующее фото"
                        >
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="relative flex flex-col p-7 sm:p-8">
                      <div className="absolute right-0 top-0 h-full w-20 skew-x-[-18deg] bg-[#50626c]/6" />
                      <div className="relative">
                        <h3 className="text-3xl font-extrabold leading-tight tracking-[-0.05em] text-[#263740]">
                          {area.title}
                        </h3>
                        <p className="mt-5 text-[15px] leading-7 text-[#595b5c]">
                          {area.description}
                        </p>
                      </div>

                      <div className="relative mt-8 grid gap-3">
                        {area.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3 text-sm font-medium leading-6 text-[#595b5c]">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-[#50626c]" size={18} strokeWidth={1.7} />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
