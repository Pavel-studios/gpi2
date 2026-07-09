import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import productionImage from '@/imports/tz-photos/adv-production.webp';
import teamImage from '@/imports/tz-photos/adv-team.webp';
import projectsImage from '@/imports/tz-photos/adv-projects.webp';
import certIso from '@/imports/cert-iso.webp';
import certNaks from '@/imports/cert-naks.webp';
import certEac from '@/imports/cert-eac.webp';

const advantages = [
  {
    title: 'Собственное производство',
    value: 'Полный цикл',
    description: 'Универсальное оборудование и станки с ЧПУ, цеховая грузоподъёмность до 15 тонн, испытательный стенд до 40 МПа, лаборатория неразрушающего контроля и участок термообработки.',
    image: productionImage,
  },
  {
    title: 'Команда профессионалов',
    value: '100+',
    description: 'Инженеры, конструкторы и производственные специалисты, объединённые опытом реализации сложных промышленных задач.',
    image: teamImage,
  },
  {
    title: 'Реализованные проекты',
    value: '2000+',
    description: 'Успешно реализованные поставки для ведущих компаний России и стран СНГ в нефтегазовой, химической и энергетической отраслях.',
    image: projectsImage,
  },
  {
    title: 'Полная сертификация',
    value: 'ТР ТС · ISO · НАКС',
    description: 'Сертификация оборудования, системы менеджмента качества и аттестованные технологии сварки.',
    image: null,
  },
];

export function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const active = advantages[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % advantages.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [cycleKey]);

  const selectAdvantage = (index: number) => {
    setActiveIndex(index);
    setCycleKey((current) => current + 1);
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#50626c]">
      <AnimatePresence mode="wait">
        <motion.div key={activeIndex} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.65 }} className="absolute inset-0">
          {active.image ? (
            <img src={active.image} alt="" className={`h-full w-full object-cover ${activeIndex === 2 ? 'object-center' : ''}`} />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#dfe4e6]">
              <img src={certIso} alt="Сертификат системы менеджмента качества" className="absolute left-[12%] top-[8%] h-[78%] rotate-[-8deg] shadow-2xl" />
              <img src={certNaks} alt="Аттестация технологии сварки НАКС" className="absolute left-[38%] top-[3%] z-10 h-[86%] rotate-[2deg] shadow-2xl" />
              <img src={certEac} alt="Сертификат соответствия ЕАЭС" className="absolute right-[10%] top-[10%] h-[76%] rotate-[9deg] shadow-2xl" />
            </div>
          )}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#263740]/90 via-[#34454e]/45 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#263740]/85 via-transparent to-[#263740]/15" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1920px] flex-col justify-end px-6 pb-36 pt-24 lg:px-12 lg:pb-16">
        <div className="max-w-3xl pl-0 lg:pl-[430px]">
          <AnimatePresence mode="wait">
            <motion.div key={`copy-${activeIndex}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }} className="text-white">
              <div className="mb-5 text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.05em]">{active.value}</div>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-30 grid grid-cols-4 overflow-hidden border border-white/25 bg-[#263740]/75 backdrop-blur-md lg:bottom-auto lg:left-12 lg:right-auto lg:top-1/2 lg:w-[350px] lg:-translate-y-1/2 lg:grid-cols-1">
          {advantages.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => selectAdvantage(index)}
                className={`group relative flex min-h-20 w-full items-center gap-3 border-r border-white/15 px-3 py-4 text-left text-white transition-colors last:border-r-0 lg:min-h-24 lg:border-b lg:border-r-0 lg:px-5 ${isActive ? 'bg-white/18' : 'hover:bg-white/10'}`}
                aria-pressed={isActive}
              >
                <span className="text-[10px] font-semibold tabular-nums text-white/55 lg:w-7 lg:text-xs">0{index + 1}</span>
                <span className={`hidden flex-1 text-base transition-transform sm:block lg:text-lg ${isActive ? 'font-semibold lg:translate-x-1' : 'font-medium group-hover:translate-x-1'}`}>{item.title}</span>
                <ArrowUpRight size={18} className={`ml-auto hidden transition-all lg:block ${isActive ? 'rotate-45 text-white' : 'text-white/50 group-hover:text-white'}`} />
                {isActive && <motion.span key={cycleKey} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 7, ease: 'linear' }} />}
              </button>
            );
          })}
      </div>
    </section>
  );
}
