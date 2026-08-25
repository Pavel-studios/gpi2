import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import factoryVisit from "@/imports/strategy-partner/20250308_143638.webp";
import teamVisit from "@/imports/strategy-partner/20250308_144550.webp";
import productionVisit from "@/imports/strategy-partner/20250307_190222.webp";
import workshopVisit from "@/imports/strategy-partner/20250305_141125.webp";
import instituteGazpromVniigaz from "@/imports/strategy-partner/institute-gazprom-vniigaz.webp";
import instituteGazpromProject from "@/imports/strategy-partner/institute-gazprom-project.webp";
import institutePkbi from "@/imports/strategy-partner/institute-pkbi.webp";
import instituteVnipineftemash from "@/imports/strategy-partner/institute-vnipineftemash.webp";
import instituteNiihimmash from "@/imports/strategy-partner/institute-niihimmash.webp";
import instituteNpoCkti from "@/imports/strategy-partner/institute-npo-ckti.webp";
import foreignYanxin from "@/imports/strategy-partner/foreign-yanxin.webp";
import foreignSupezet from "@/imports/strategy-partner/foreign-supezet.webp";
import foreignDoright from "@/imports/strategy-partner/foreign-doright.webp";
import foreignSinopec from "@/imports/strategy-partner/foreign-sinopec.webp";
import logisticsTransterminal from "@/imports/strategy-partner/logistics-transterminal.webp";
import logisticsTamarix from "@/imports/strategy-partner/logistics-tamarix.webp";
import tamarixBackground from "@/imports/tz-photos/strategy-tamarix-bg.webp";
import pattern from "@/imports/pattern.svg";
import { PhotoViewer } from './PhotoViewer';

const photos = [
  {
    src: factoryVisit,
    alt: "Делегация компании на производственной площадке партнёра",
  },
  { src: teamVisit, alt: "Рабочая встреча с представителями партнёра" },
  { src: productionVisit, alt: "Посещение производственной площадки" },
  { src: workshopVisit, alt: "Осмотр оборудования на заводе" },
];

const instituteLogos = [
  {
    src: instituteGazpromVniigaz,
    alt: "Газпром ВНИИГАЗ",
  },
  {
    src: instituteGazpromProject,
    alt: "Газпром проектирование",
  },
  {
    src: institutePkbi,
    alt: "ПКБИ",
  },
  {
    src: instituteVnipineftemash,
    alt: "ВНИПИнефтемаш",
  },
  {
    src: instituteNiihimmash,
    alt: "АО НИИХИММАШ",
  },
  {
    src: instituteNpoCkti,
    alt: "НПО ЦКТИ",
  },
];

const foreignCompanyLogos = [
  {
    src: foreignYanxin,
    alt: "YANXIN",
  },
  {
    src: foreignSupezet,
    alt: "SUPEZET",
  },
  {
    src: foreignDoright,
    alt: "DORIGHT",
  },
  {
    src: foreignSinopec,
    alt: "SINOPEC",
  },
];

const logisticsLogos = [
  {
    src: logisticsTransterminal,
    alt: "Транстерминал",
  },
  {
    src: logisticsTamarix,
    alt: "TAMARIX",
  },
];

const directionLogos = [instituteLogos, foreignCompanyLogos, logisticsLogos];

const directions = [
  {
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
    <section className="relative overflow-hidden bg-[#dfe2e3] px-6 py-24 text-[#263740] sm:px-10 lg:px-16">
      <img
        src={tamarixBackground}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 h-[46rem] w-[62vw] object-cover opacity-[0.06] grayscale mix-blend-multiply"
      />
      <div
        className="pointer-events-none absolute bottom-[-8rem] right-[-10rem] h-[44rem] w-[54rem] opacity-[0.06]"
        style={{
          backgroundColor: "#263740",
          maskImage: `url(${pattern})`,
          maskSize: "220px 220px",
          WebkitMaskImage: `url(${pattern})`,
          WebkitMaskSize: "220px 220px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef0f1]/82 via-[#dfe2e3]/78 to-[#dfe2e3]/92" />
      <div className="relative mx-auto max-w-[1680px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
            Стратегическое партнерство
          </p>
          <h2
            className="max-w-3xl text-[#263740]"
            style={{
              fontSize: "clamp(40px, 6vw, 86px)",
              fontWeight: 800,
              letterSpacing: "-0.055em",
              lineHeight: 0.98,
            }}
          >
            Объединяем инжиниринг, логистику и международную кооперацию
          </h2>
          <p className="mt-8 max-w-4xl text-lg font-medium leading-8 text-[#263740]/78 sm:text-xl sm:leading-9">
            Производственно-инжиниринговые, транспортно-логистические компетенции
            и международные связи помогают реализовывать сложные проекты в
            промышленном оборудовании.
          </p>
        </motion.div>

        <div className="pt-16 sm:pt-20">
          <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#263740] sm:text-4xl">
            Направления сотрудничества
          </h3>
          <div className="mt-8 max-w-5xl">
            {directions.map((direction, index) => (
              <motion.article
                key={direction.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-5 border-t border-[#263740]/16 py-9 sm:grid-cols-[72px_1fr]"
              >
                <div className="text-sm font-black tracking-[0.16em] text-[#50626c]/55">
                  {direction.number}
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#263740] sm:text-4xl">
                    {direction.title}
                  </h4>
                  <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-[#263740]/76 sm:text-lg sm:leading-8">
                    {direction.intro}
                  </p>
                  <ul className="mt-6 max-w-3xl space-y-4 text-sm font-medium leading-6 text-[#595b5c] sm:text-base sm:leading-7">
                    {direction.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {directionLogos[index].map((logo) => (
                      <div
                        key={logo.alt}
                        className="flex h-24 items-center justify-center border border-white/65 bg-white/58 px-4 backdrop-blur-sm"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-h-14 max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="pt-20">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#263740] sm:text-4xl">
                Рабочие встречи
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollPhotos(-1)}
                aria-label="Предыдущая фотография"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#50626C]/20 bg-transparent text-[#50626C] transition-colors hover:bg-[#263740] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => scrollPhotos(1)}
                aria-label="Следующая фотография"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#50626C]/20 bg-transparent text-[#50626C] transition-colors hover:bg-[#263740] hover:text-white"
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
                className="relative h-[22rem] min-w-[86%] snap-start overflow-hidden bg-[#50626C] sm:min-w-[58%] lg:min-w-[calc((100%_-_2rem)_/_3)] xl:h-[26rem]"
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
