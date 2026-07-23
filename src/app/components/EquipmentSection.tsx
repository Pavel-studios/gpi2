import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import pattern from '@/imports/pattern.svg';
import heroPoster from '@/imports/tz-photos/adv-production.webp';
import { FadingPattern } from './ui/fading-pattern';
import { PhotoViewer } from './PhotoViewer';

const publicBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const heroVideo = `${publicBase}/media/equipment-hero-n59a2261.mp4`;
const equipmentPhotoModules = import.meta.glob('/src/imports/equipment-cards/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const equipmentPhotos = (prefix: string) =>
  Object.entries(equipmentPhotoModules)
    .filter(([path]) => path.includes(`/equipment-cards/${prefix}-`))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src);

const equipment = [
  {
    number: '01',
    name: 'Факельные установки',
    description: 'Оборудование для безопасного сброса и сжигания горючих газов и жидкостей.',
    industries: 'Нефтегазовая, перерабатывающая',
    parameters: [
      'Производительность по газу (н.у.): до 8 млн м³/сут',
      'Производительность по жидкости: по запросу заказчика',
      'Рабочее давление газа: 0,005–10 МПа',
      'Рабочее давление жидкости: 0,1–10 МПа',
      'Система розжига дежурных горелок: электроискровая / «бегущий огонь»',
      'Потребляемая мощность: не более 2000 Вт',
      'Материалы исполнения: нержавеющая и жаропрочная сталь',
    ],
    images: equipmentPhotos('flare'),
  },
  {
    number: '02',
    name: 'Узлы технологических трубопроводов',
    description: 'Фасонные детали и сборочные узлы для технологических трубопроводов.',
    industries: 'Нефтегазовая, перерабатывающая, атомная',
    parameters: [
      'Условный проход (DN): 50–1200',
      'Условное давление (PN): 6–25',
      'Температура рабочей среды: от -70 °C до +700 °C',
      'Материалы исполнения: углеродистые, низколегированные и аустенитные стали',
    ],
    images: equipmentPhotos('pipeline'),
  },
  {
    number: '03',
    name: 'Нестандартное оборудование для АЭС',
    description: 'Оборудование для смешивания технологических потоков и основного конденсата.',
    industries: 'Атомная',
    parameters: [
      'Рабочая среда: вода, пароводяная смесь',
      'Расход основного конденсата: до 1100 т/ч',
      'Расход конденсата греющего пара: до 250 т/ч',
      'Рабочее давление: до 5 МПа',
      'Температура среды: до +250 °C',
      'Материалы исполнения: нержавеющая и жаропрочная сталь',
    ],
    images: equipmentPhotos('nuclear'),
  },
  {
    number: '04',
    name: 'Теплообменное оборудование',
    description: 'Аппараты для теплообменных процессов в промышленных установках.',
    industries: 'Нефтегазовая, перерабатывающая, атомная',
    parameters: [
      'Рабочая среда: природный и попутный газ, газовый конденсат, нефть, вода, пар и другие жидкости и газы',
      'Пропускная способность по газу: до 10 млн нм³/сут',
      'Пропускная способность по жидкости: до 54 000 м³/сут',
      'Рабочее давление: до 21 МПа',
      'Температура сред: до +350 °C',
    ],
    images: equipmentPhotos('heat'),
  },
  {
    number: '05',
    name: 'Емкостное оборудование',
    description: 'Сосуды и аппараты, изготавливаемые по индивидуальным техническим проектам.',
    industries: 'Нефтегазовая, перерабатывающая',
    parameters: [
      'Рабочая среда: нефть, жидкие нефтепродукты, газы, конденсат, вода, пар и другие жидкости и газы',
      'Объем горизонтальных подземных емкостей: до 63 м³',
      'Объем вертикальных емкостей (полистовая сборка): до 10 000 м³',
      'Рабочее давление: до 2,5 МПа',
      'Температура эксплуатации: от -60 °C до +80 °C',
      'Материалы корпуса: углеродистые, низколегированные и нержавеющие стали',
    ],
    images: equipmentPhotos('vessel'),
  },
  {
    number: '06',
    name: 'Котельное оборудование',
    description: 'Элементы паровых стационарных котлов для перегрева насыщенного пара.',
    industries: 'Нефтегазовая, энергетика',
    parameters: [
      'Рабочая среда: насыщенный и перегретый пар',
      'Давление пара: до 25 МПа',
      'Массовый расход пара: до 3950 т/ч',
      'Температура пара: до +565 °C',
      'Материалы труб: нержавеющая и жаропрочная сталь',
    ],
    images: equipmentPhotos('boiler'),
  },
];

export function EquipmentSection() {
  const [activeImages, setActiveImages] = useState<Record<string, number>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<{
    images: { src: string; alt: string }[];
    initialIndex: number;
  } | null>(null);

  const changeImage = (number: string, imageCount: number, direction: 1 | -1) => {
    setActiveImages((current) => {
      const currentIndex = current[number] ?? 0;
      const nextIndex = (currentIndex + direction + imageCount) % imageCount;

      return {
        ...current,
        [number]: nextIndex,
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
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/82 via-[#263740]/46 to-[#263740]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/78 via-transparent to-transparent" />
        <div className="absolute right-[8vw] top-0 hidden h-full w-[22vw] skew-x-[-18deg] bg-white/[0.07] lg:block" />
        <div className="absolute right-[19vw] top-0 hidden h-full w-[10vw] skew-x-[-18deg] bg-white/[0.04] lg:block" />

        <FadingPattern opacity="0.075" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] items-end px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/76 backdrop-blur-md">
              Оборудование
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
              Поставляемое
              <span className="block text-white/62">оборудование</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div
          className="absolute -left-28 top-20 h-[560px] w-[560px] opacity-[0.055]"
          style={{
            backgroundColor: '#263740',
            maskImage: `url(${pattern})`,
            maskSize: '170px 170px',
            WebkitMaskImage: `url(${pattern})`,
            WebkitMaskSize: '170px 170px',
          }}
        />
        <div className="absolute right-0 top-0 h-full w-[18vw] skew-x-[-16deg] bg-[#50626c]/8" />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
                Каталог
              </div>
              <h2
                className="max-w-3xl text-[#263740]"
                style={{
                  fontSize: 'clamp(36px, 5.2vw, 74px)',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                  lineHeight: 0.96,
                }}
              >
                Карточки производимого оборудования
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((item, index) => {
                const activeImageIndex = activeImages[item.number] ?? 0;
                const activeImage = item.images[activeImageIndex] ?? item.images[0];

                return (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                    className="group relative overflow-hidden border border-[#50626c]/12 bg-white shadow-[0_24px_80px_rgba(38,55,64,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/28"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#263740]">
                      <img
                        src={activeImage}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-hover:rotate-[1.5deg]"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedPhoto({
                            images: item.images.map((image, imageIndex) => ({
                              src: image,
                              alt: `${item.name} · фото ${imageIndex + 1}`,
                            })),
                            initialIndex: activeImageIndex,
                          })
                        }
                        className="absolute inset-0 z-[1] cursor-zoom-in"
                        aria-label={`Открыть фото: ${item.name}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17252c]/82 via-[#263740]/18 to-transparent" />
                      <div className="absolute left-5 top-5 z-[2] text-sm font-black tracking-[0.18em] text-white/62">
                        {item.number}
                      </div>
                      <ArrowUpRight className="absolute right-5 top-5 z-[2] text-white/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                      {item.images.length > 1 && (
                        <>
                          <div className="absolute bottom-5 right-5 z-[3] flex gap-2">
                            <button
                              type="button"
                              onClick={() => changeImage(item.number, item.images.length, -1)}
                              className="flex h-9 w-9 items-center justify-center border border-white/30 bg-[#263740]/55 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#263740]"
                              aria-label={`Предыдущее фото: ${item.name}`}
                            >
                              <ChevronLeft size={17} />
                            </button>
                            <button
                              type="button"
                              onClick={() => changeImage(item.number, item.images.length, 1)}
                              className="flex h-9 w-9 items-center justify-center border border-white/30 bg-[#263740]/55 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#263740]"
                              aria-label={`Следующее фото: ${item.name}`}
                            >
                              <ChevronRight size={17} />
                            </button>
                          </div>
                          <div className="absolute bottom-6 left-5 z-[3] flex max-w-[52%] gap-1.5">
                            {item.images.map((image, imageIndex) => (
                              <button
                                key={image}
                                type="button"
                                onClick={() =>
                                  setActiveImages((current) => ({
                                    ...current,
                                    [item.number]: imageIndex,
                                  }))
                                }
                                className={`h-1.5 transition-all ${
                                  imageIndex === activeImageIndex
                                    ? 'w-7 bg-white'
                                    : 'w-3 bg-white/38 hover:bg-white/70'
                                }`}
                                aria-label={`Показать фото ${imageIndex + 1}: ${item.name}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="relative p-7">
                      <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.045em] text-[#263740]">
                        {item.name}
                      </h3>
                      <p className="mt-4 min-h-[72px] text-[15px] leading-6 text-[#595b5c]">
                        {item.description}
                      </p>
                      <div className="mt-6 space-y-2 border-y border-[#50626c]/10 py-5">
                        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50626c]/65">
                          Ключевые параметры
                        </div>
                        {item.parameters.map((parameter) => (
                          <div key={parameter} className="flex gap-3 text-sm leading-5 text-[#263740]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50626c]" />
                            <span>{parameter}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-7 border-t border-[#50626c]/12 pt-5">
                        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50626c]/65">
                          Отрасли
                        </div>
                        <div className="text-sm font-semibold text-[#263740]">{item.industries}</div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
          </div>
        </div>
      </section>
      {selectedPhoto && (
        <PhotoViewer
          images={selectedPhoto.images}
          initialIndex={selectedPhoto.initialIndex}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
