import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import machiningImage from '../../imports/tz-photos/prod-machining-1.webp';
import weldingImage from '../../imports/tz-photos/prod-welding-1.webp';
import qualityImage from '../../imports/tz-photos/prod-quality-1.webp';
import heatImage from '../../imports/tz-photos/prod-heat-1.webp';
import automationImage from '../../imports/tz-photos/prod-automation-1.webp';

const capabilities = [
  {
    number: '01',
    title: 'Механическая обработка',
    description: 'Оборудование универсальное и с ЧПУ для изготовления деталей сложной геометрии.',
    tags: ['Токарная обработка', 'Фрезерование', 'ЧПУ'],
    image: machiningImage,
  },
  {
    number: '02',
    title: 'Сварочное производство',
    description: 'Сварка с аттестацией НАКС оборудования, технологий и персонала.',
    tags: ['TIG', 'MIG/MAG', 'SAW'],
    image: heatImage,
  },
  {
    number: '03',
    title: 'Контроль качества',
    description: 'Многоступенчатый контроль материалов, сварных соединений и готового оборудования.',
    tags: ['Визуально-измерительный', 'Ультразвуковой', 'Радиографический'],
    image: qualityImage,
  },
  {
    number: '04',
    title: 'Участок термообработки',
    description: 'Термическая обработка сварных соединений и изделий по заданным технологическим режимам.',
    tags: ['Нагрев', 'Выдержка', 'Контроль режима'],
    image: weldingImage,
  },
  {
    number: '05',
    title: 'Участок АСУ ТП',
    description: 'Разработка, сборка и настройка систем автоматизированного управления технологическими процессами.',
    tags: ['Проектирование', 'Сборка шкафов', 'Пусконаладка'],
    image: automationImage,
  },
];

export function ProductionPreview() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];

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
            Собственные участки позволяют контролировать каждый этап — от заготовки и обработки до испытаний готового оборудования.
          </p>
        </motion.div>

        <div className="grid min-h-[680px] overflow-hidden bg-[#263740] shadow-[0_30px_80px_rgba(38,55,64,.18)] lg:grid-cols-[minmax(300px,0.75fr)_1.6fr]">
          <div className="relative z-10 flex flex-col border-white/10 lg:border-r">
            {capabilities.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative flex flex-1 items-center gap-5 border-b border-white/10 px-6 py-6 text-left transition-colors duration-500 last:border-b-0 sm:px-8 ${active === index ? 'bg-[#50626c]' : 'hover:bg-white/[0.045]'}`}
              >
                <span className={`text-xs font-semibold tracking-[0.2em] transition-colors ${active === index ? 'text-white/65' : 'text-white/30'}`}>{item.number}</span>
                <span className="text-lg font-medium leading-tight text-white sm:text-xl">{item.title}</span>
                <ArrowUpRight className={`ml-auto shrink-0 transition-all duration-300 ${active === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'}`} size={21} />
                {active === index && <motion.span layoutId="production-active" className="absolute bottom-0 left-0 top-0 w-1 bg-white" />}
              </button>
            ))}
          </div>

          <div className="relative min-h-[560px] overflow-hidden lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.title}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
                className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10 lg:p-14"
              >
                <p className="mb-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{current.description}</p>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span key={tag} className="border border-white/25 bg-[#263740]/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] backdrop-blur-md">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
