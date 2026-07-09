import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Globe2,
  ShipWheel,
} from "lucide-react";
import factoryVisit from "@/imports/strategy-partner/20250308_143638.webp";
import teamVisit from "@/imports/strategy-partner/20250308_144550.webp";
import productionVisit from "@/imports/strategy-partner/20250307_190222.webp";
import workshopVisit from "@/imports/strategy-partner/20250305_141125.webp";
import tamarixBackground from "@/imports/tz-photos/strategy-tamarix-bg.webp";
import { PhotoViewer } from './PhotoViewer';

const photos = [
  {
    src: factoryVisit,
    alt: "Делегация ГПИ на производственной площадке партнёра",
  },
  { src: teamVisit, alt: "Рабочая встреча с представителями партнёра" },
  { src: productionVisit, alt: "Посещение производственной площадки" },
  { src: workshopVisit, alt: "Осмотр оборудования на заводе" },
];

const directions = [
  {
    icon: Factory,
    number: "01",
    title: "Отраслевые институты",
    intro:
      "Сотрудничество с профильными научными и проектными организациями позволяет:",
    points: [
      "реализовывать новые масштабные проекты",
      "находить нестандартные решения в производстве оборудования",
      "изготавливать оборудование для тепловых и атомных электростанций",
    ],
    partners: [
      "Газпром ВНИИГАЗ",
      "Газпром проектирование",
      "НПО ЦКТИ",
      "ПКБИ",
      "АО «НИИХИММАШ»",
    ],
  },
  {
    icon: Globe2,
    number: "02",
    title: "Иностранные компании",
    intro: "Партнёрские связи с зарубежными производителями дают возможность:",
    points: [
      "поставлять на российский рынок современное высокотехнологичное оборудование",
      "использовать при изготовлении высококачественные импортные материалы и комплектующие",
    ],
    partners: ["YANXIN", "SUPEZET", "DORIGHT", "SINOPEC"],
  },
  {
    icon: ShipWheel,
    number: "03",
    title: "Логистика и таможенное оформление",
    intro:
      "Поставка оборудования сопровождается полным комплексом логистических и таможенных услуг.",
    points: [
      "оформление товарных партий с большой номенклатурой товаров",
      "подготовка классификационных решений ФТС для технологического оборудования и комплектных объектов",
      "согласование индивидуальных схем оформления грузов",
      "доставка морским, автомобильным, железнодорожным и авиатранспортом",
    ],
    partners: [
      "Maersk",
      "CMA CGM",
      "OOCL",
      "YangMing",
      "MSC",
      "APL",
      "Hapag-Lloyd",
      "Evergreen",
      "COSCO",
      "China Shipping",
    ],
  },
];

export function StrategyPartnerSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const scrollPhotos = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    const firstSlide = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !firstSlide) return;
    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const target =
      carousel.scrollLeft + direction * (firstSlide.offsetWidth + gap);
    const max = carousel.scrollWidth - carousel.clientWidth;
    const nextPosition = direction > 0
      ? (target > max + 1 ? 0 : Math.min(target, max))
      : (target < -1 ? max : Math.max(0, target));

    carousel.scrollTo({ left: nextPosition, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => scrollPhotos(1), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-[#eef0f1] px-6 py-24 sm:px-10 lg:px-16">
      <img
        src={tamarixBackground}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 h-[44rem] w-[58vw] object-cover opacity-[0.08] mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-x-0 top-0 h-[39rem] bg-[#263740]" />
      <div className="absolute left-0 top-0 h-[39rem] w-[36vw] skew-x-[-16deg] bg-white/[0.045]" />
      <div className="absolute right-[8vw] top-0 hidden h-[39rem] w-[18vw] skew-x-[-16deg] bg-white/[0.07] lg:block" />
      <div className="absolute right-[-9rem] top-[-9rem] h-[34rem] w-[34rem] rotate-45 border border-white/10" />
      <div className="relative mx-auto max-w-[1680px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/65">
            ГПИ · партнёрства
          </p>
          <h2
            className="max-w-4xl text-white"
            style={{
              fontSize: "clamp(38px, 5.2vw, 78px)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 0.96,
            }}
          >
            Стратегическое партнёрство
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/74 sm:text-lg">
            Объединяем производственные компетенции, инженерную экспертизу и
            международные связи для реализации сложных проектов.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-14 grid overflow-hidden border border-white/10 bg-white shadow-[0_30px_90px_rgba(20,32,38,0.28)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-full w-28 skew-x-[-18deg] bg-[#50626c]/6" />
            <span className="relative inline-flex h-12 w-12 rotate-45 items-center justify-center bg-[#263740] text-sm font-bold text-white">
              <span className="-rotate-45">
              ГПИ
              </span>
            </span>
            <h3 className="relative mt-8 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#263740] sm:text-4xl">
              Надёжная кооперация для проектов любого масштаба
            </h3>
            <p className="relative mt-6 max-w-2xl text-[15px] leading-7 text-[#595B5C] sm:text-base">
              Партнёрская сеть помогает компании находить оптимальные
              технические решения, обеспечивать качество поставок и выстраивать
              устойчивую логистику от завода до объекта.
            </p>
          </div>
          <div className="relative min-h-[390px] overflow-hidden bg-[#233640] lg:min-h-[460px]">
            <img
              src={factoryVisit}
              alt="Посещение производственной площадки партнёра"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3038]/78 via-[#1e3038]/12 to-transparent" />
            <p className="absolute bottom-6 left-7 right-7 max-w-xl text-sm font-medium leading-6 text-white sm:bottom-8 sm:left-10">
              Рабочие визиты и личный диалог — основа долгосрочного
              сотрудничества.
            </p>
          </div>
        </motion.div>

        <div className="pt-24">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#50626c]">
                Компетенции
              </p>
              <h3 className="mt-3 text-4xl font-extrabold tracking-[-0.055em] text-[#263740] sm:text-5xl">
                Направления сотрудничества
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#595B5C] sm:text-base">
              Три опоры, которые позволяют уверенно вести проект на каждом
              этапе.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {directions.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <motion.article
                  key={direction.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden border border-[#50626c]/12 bg-white/82 p-7 shadow-[0_22px_70px_rgba(38,55,64,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/28 hover:bg-[#263740] sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-full w-20 skew-x-[-18deg] bg-[#50626c]/6 transition-colors duration-500 group-hover:bg-white/[0.06]" />
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold tracking-[0.15em] text-[#8d9da6] group-hover:text-white/55">
                      {direction.number}
                    </span>
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      className="text-[#50626C] group-hover:text-white"
                    />
                  </div>
                  <h4 className="mt-12 text-2xl font-bold leading-tight text-[#50626C] group-hover:text-white">
                    {direction.title}
                  </h4>
                  <p className="mt-5 text-sm leading-6 text-[#595B5C] group-hover:text-white/75">
                    {direction.intro}
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-[#a7a9ac]/25 pt-5 text-sm leading-5 text-[#595B5C] group-hover:border-white/20 group-hover:text-white/80">
                    {direction.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8d9da6] group-hover:bg-white" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {direction.partners.map((partner) => (
                      <span
                        key={partner}
                        className="border border-[#50626C]/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-[#50626C] group-hover:border-white/25 group-hover:text-white"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="pt-24">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#50626c]">
                Вместе в деле
              </p>
              <h3 className="mt-3 text-4xl font-extrabold tracking-[-0.055em] text-[#263740] sm:text-5xl">
                Рабочие встречи
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollPhotos(-1)}
                aria-label="Предыдущая фотография"
                className="flex h-11 w-11 items-center justify-center border border-[#50626C]/20 bg-white text-[#50626C] transition-colors hover:bg-[#263740] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => scrollPhotos(1)}
                aria-label="Следующая фотография"
                className="flex h-11 w-11 items-center justify-center border border-[#50626C]/20 bg-white text-[#50626C] transition-colors hover:bg-[#263740] hover:text-white"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
          <div
            ref={carouselRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Фотографии рабочих визитов"
          >
            {photos.map((photo, index) => (
              <figure
                key={photo.src}
                className="relative h-[22rem] min-w-[86%] snap-start overflow-hidden bg-[#50626C] shadow-[0_20px_60px_rgba(38,55,64,0.12)] sm:min-w-[58%] lg:min-w-[calc((100%_-_2rem)_/_3)] xl:h-[26rem]"
              >
                <button type="button" onClick={() => setSelectedPhoto(index)} className="h-full w-full cursor-zoom-in" aria-label={`Открыть: ${photo.alt}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-12 text-xs font-bold tracking-[0.08em] text-white">
                  ВИЗИТ · {String(index + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
          {selectedPhoto !== null && <PhotoViewer images={photos} initialIndex={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
        </div>
      </div>
    </section>
  );
}
