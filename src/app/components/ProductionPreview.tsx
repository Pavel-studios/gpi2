import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import machiningImage from '@/imports/tz-photos/prod-machining-1.webp';
import weldingImage from '@/imports/tz-photos/prod-welding-n59a2466.webp';
import qualityImage from '@/imports/tz-photos/prod-quality-img-8003.webp';
import qualityImage2 from '@/imports/tz-photos/prod-quality-img-8019.webp';
import heatImage from '@/imports/tz-photos/prod-heat-img-7995.webp';
import heatImage2 from '@/imports/tz-photos/prod-heat-img-7992.webp';
import automationImage from '@/imports/tz-photos/prod-automation-1.webp';
import coatingImage from '@/imports/tz-photos/prod-coating-1.webp';
import coatingImage2 from '@/imports/tz-photos/prod-coating-2.webp';
import coatingImage3 from '@/imports/tz-photos/prod-coating-3.webp';

const capabilities = [
  {
    number: '01',
    title: 'Механическая обработка',
    description: 'Оборудование универсальное и с ЧПУ: токарные, фрезерные, карусельные, расточные, сверлильные и листогибочные станки.',
    tags: ['Токарные станки', 'Фрезерные станки', 'Листогибочные станки'],
    images: [machiningImage],
  },
  {
    number: '02',
    title: 'Сварочное производство',
    description: 'Сварка с аттестацией НАКС оборудования, технологий и персонала для изготовления ответственных металлоконструкций и промышленного оборудования.',
    tags: ['TIG', 'MIG/MAG', 'SAW'],
    images: [weldingImage],
  },
  {
    number: '03',
    title: 'Контроль качества',
    description: 'Визуально-измерительный, радиографический, ультразвуковой, рентгенофлуоресцентный контроль, контроль герметичности и контроль проникающими веществами.',
    tags: ['Радиография до 60 мм', 'Ультразвуковой контроль', 'Капиллярный контроль', 'Гидравлические / пневматические испытания'],
    images: [qualityImage, qualityImage2],
  },
  {
    number: '04',
    title: 'Участок термообработки',
    description: 'Индукционная термообработка — прогрессивный метод термической обработки металлов с контролем технологических режимов.',
    tags: ['Индукционный нагрев', 'Контроль режима', 'Термообработка металлов'],
    images: [heatImage, heatImage2],
  },
  {
    number: '05',
    title: 'Участок АСУ ТП',
    description: 'Возможность автоматизации управления сложным оборудованием: проектирование, сборка шкафов, настройка и пусконаладка систем управления.',
    tags: ['Проектирование', 'Сборка шкафов', 'Пусконаладка'],
    images: [automationImage],
  },
  {
    number: '06',
    title: 'Участок нанесения лакокрасочного покрытия',
    description: 'Возможность нанесения однослойных и многослойных покрытий с контролем адгезии и толщинометрией каждого слоя.',
    tags: ['Однослойные покрытия', 'Многослойные покрытия', 'Контроль адгезии'],
    images: [coatingImage, coatingImage2, coatingImage3],
  },
];

export function ProductionPreview() {
  const [active, setActive] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const current = capabilities[active];
  const currentImage = current.images[slideIndex % current.images.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((index) => index + 1);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const selectCapability = (index: number) => {
    setActive(index);
    setSlideIndex(0);
  };

  return (
    <section className="relative overflow-hidden bg-[#eef0f1] px-5 py-20 text-[#263740] sm:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(80,98,108,.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,98,108,.09)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="pointer-events-none absolute -right-[18%] top-[-20%] h-[70%] w-[55%] -skew-x-[24deg] bg-[#50626c]/[0.055]" />

      <div className="relative mx-auto max-w-[1920px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#50626c]">
              <span className="h-px w-14 bg-[#50626c]" />Полный цикл
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl xl:text-7xl">
              Производственные мощности
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#50626c] lg:justify-self-end lg:text-lg">
            Собственные участки позволяют контролировать каждый этап — от заготовки и обработки до контроля, автоматизации и нанесения защитных покрытий.
          </p>
        </motion.div>

        <div className="hidden min-h-[720px] overflow-hidden bg-[#263740] shadow-[0_30px_80px_rgba(38,55,64,.18)] lg:grid lg:grid-cols-[minmax(330px,0.78fr)_1.6fr]">
          <div className="relative z-10 flex flex-col border-r border-white/10">
            {capabilities.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => selectCapability(index)}
                className={`group relative flex flex-1 items-center gap-5 border-b border-white/10 px-8 py-5 text-left transition-colors duration-500 last:border-b-0 ${active === index ? 'bg-[#50626c]' : 'hover:bg-white/[0.045]'}`}
              >
                <span className={`text-xs font-semibold tracking-[0.2em] transition-colors ${active === index ? 'text-white/65' : 'text-white/30'}`}>{item.number}</span>
                <span className="text-lg font-medium leading-tight text-white xl:text-xl">{item.title}</span>
                <ArrowUpRight className={`ml-auto shrink-0 transition-all duration-300 ${active === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`} size={21} />
                {active === index && <motion.span layoutId="production-active" className="absolute bottom-0 left-0 top-0 w-1 bg-white" />}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${current.title}-${currentImage}`}
                src={currentImage}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#17252c] via-[#263740]/20 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#263740]/35 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.title}-content`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="absolute inset-x-0 bottom-0 p-10 text-white xl:p-14"
              >
                <p className="mb-7 max-w-3xl text-xl leading-relaxed text-white/88">{current.description}</p>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span key={tag} className="border border-white/25 bg-[#263740]/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid gap-5 lg:hidden">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="overflow-hidden bg-[#263740] text-white shadow-[0_18px_46px_rgba(38,55,64,.16)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#50626c]">
                <img src={item.images[0]} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17252c]/75 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-white/65">{item.number}</div>
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-2xl font-semibold leading-tight">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-white/78">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.07em] text-white/85">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 flex justify-start">
          <Link
            to="/production"
            className="group inline-flex items-center gap-3 border border-[#50626c]/25 bg-white/60 px-5 py-3 text-sm font-semibold text-[#40515a] transition hover:border-[#50626c] hover:bg-[#50626c] hover:text-white"
          >
            Подробнее о производстве
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
