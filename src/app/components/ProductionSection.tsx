import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
  Factory,
  FlaskConical,
  PaintBucket,
  Scissors,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import pattern from '@/imports/pattern.svg';
import machining1 from '@/imports/tz-photos/prod-machining-1.webp';
import machining2 from '@/imports/tz-photos/prod-machining-2.webp';
import machining3 from '@/imports/tz-photos/prod-machining-3.webp';
import welding1 from '@/imports/tz-photos/prod-welding-1.webp';
import welding2 from '@/imports/tz-photos/prod-welding-2.webp';
import welding3 from '@/imports/tz-photos/prod-welding-3.webp';
import quality1 from '@/imports/tz-photos/prod-quality-1.webp';
import quality2 from '@/imports/tz-photos/prod-quality-2.webp';
import quality3 from '@/imports/tz-photos/prod-quality-3.webp';
import quality4 from '@/imports/tz-photos/prod-quality-4.webp';
import quality5 from '@/imports/tz-photos/prod-quality-5.webp';
import heat1 from '@/imports/tz-photos/prod-heat-1.webp';
import heat2 from '@/imports/tz-photos/prod-heat-2.webp';
import automation1 from '@/imports/tz-photos/prod-automation-1.webp';
import automation2 from '@/imports/tz-photos/prod-automation-2.webp';
import automation3 from '@/imports/tz-photos/prod-automation-3.webp';
import automation4 from '@/imports/tz-photos/prod-automation-4.webp';
import coating1 from '@/imports/tz-photos/prod-coating-1.webp';
import coating2 from '@/imports/tz-photos/prod-coating-2.webp';
import coating3 from '@/imports/tz-photos/prod-coating-3.webp';
import { FadingPattern } from './ui/fading-pattern';

const publicBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const heroVideo = `${publicBase}/media/production-hero-n59a2574.mp4`;

const productionAreas = [
  {
    number: '01',
    title: 'Заготовительные участки',
    icon: Scissors,
    description:
      'Лентопильные станки до Ø300 мм, портал газо-плазменной резки до 70 мм и листогибочные станки до δ=30 мм.',
    bullets: ['Лентопильные станки', 'Газо-плазменная резка', 'Листогибочные станки'],
    images: [machining1, machining2, machining3],
  },
  {
    number: '02',
    title: 'Сварочные цеха',
    icon: Sparkles,
    description:
      'Полный спектр аттестованных сварочных технологий и персонала для работы с различными материалами.',
    bullets: ['TIG — аргонодуговая сварка', 'MIG/MAG — полуавтоматическая сварка', 'SAW — сварка под флюсом', 'Ручная электродуговая сварка'],
    images: [welding1, welding2, welding3],
  },
  {
    number: '03',
    title: 'Служба контроля качества',
    icon: ShieldCheck,
    description:
      'Контроль материалов, сварных соединений и готового оборудования на ключевых этапах производства.',
    bullets: ['Визуально-измерительный контроль', 'Радиографический контроль', 'Ультразвуковой контроль', 'Контроль герметичности'],
    images: [quality1, quality2, quality3, quality4, quality5],
  },
  {
    number: '04',
    title: 'АСУ ТП цеха',
    icon: Bot,
    description:
      'Автоматизация управления сложным оборудованием, сборка и настройка систем управления технологическими процессами.',
    bullets: ['Сборка шкафов управления', 'Автоматизация параметров', 'Пусконаладочные работы'],
    images: [automation1, automation2, automation3, automation4],
  },
  {
    number: '05',
    title: 'Участок термообработки',
    icon: FlaskConical,
    description:
      'Индукционная термообработка — прогрессивный метод термической обработки металлов.',
    bullets: ['Индукционная термообработка', 'Контроль режимов нагрева', 'Подготовка деталей к дальнейшей обработке'],
    images: [heat1, heat2],
  },
  {
    number: '06',
    title: 'Участок нанесения лакокрасочного покрытия',
    icon: PaintBucket,
    description:
      'Нанесение однослойных и многослойных покрытий с контролем адгезии и толщинометрией каждого слоя.',
    bullets: ['Однослойные покрытия', 'Многослойные покрытия', 'Контроль адгезии', 'Толщинометрия'],
    images: [coating1, coating2, coating3],
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
        <FadingPattern opacity="0.065" />

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
              сварка, контроль качества и испытания оборудования.
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
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
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
              const Icon = area.icon;
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
                          src={area.images[activeIndex]}
                          alt={area.title}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 h-full w-full object-cover"
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
                          className="flex h-11 w-11 items-center justify-center border border-white/25 bg-[#263740]/45 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#263740]"
                          aria-label="Предыдущее фото"
                        >
                          <ArrowLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => switchImage(area.title, 1, area.images.length)}
                          className="flex h-11 w-11 items-center justify-center border border-white/25 bg-[#263740]/45 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#263740]"
                          aria-label="Следующее фото"
                        >
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="relative flex flex-col p-7 sm:p-8">
                      <div className="absolute right-0 top-0 h-full w-20 skew-x-[-18deg] bg-[#50626c]/6" />
                      <div className="relative mb-8 flex items-start justify-between gap-5">
                        <div className="flex h-14 w-14 shrink-0 rotate-45 items-center justify-center bg-[#263740] text-white">
                          <Icon className="-rotate-45" size={24} strokeWidth={1.6} />
                        </div>
                        <Factory className="text-[#50626c]/18" size={42} strokeWidth={1.4} />
                      </div>

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
