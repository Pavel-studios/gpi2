import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import productionImage from '@/imports/tz-photos/adv-production-exact.webp';
import teamImage from '@/imports/tz-photos/adv-team-exact.webp';
import projectsImage from '@/imports/tz-photos/adv-projects-retouched.webp';
import certQuality1 from '@/imports/about/certificates/cert-quality-1.webp';
import certQuality2 from '@/imports/about/certificates/cert-quality-2.webp';
import certTrts1 from '@/imports/about/certificates/cert-trts-1.webp';
import certTrts2 from '@/imports/about/certificates/cert-trts-2.webp';
import certTrts3 from '@/imports/about/certificates/cert-trts-3.webp';
import certTrts4 from '@/imports/about/certificates/cert-trts-4.webp';
import certWelding1 from '@/imports/about/certificates/cert-welding-1.webp';
import certWelding2 from '@/imports/about/certificates/cert-welding-2.webp';
import certWelding3 from '@/imports/about/certificates/cert-welding-3.webp';
import certWelding4 from '@/imports/about/certificates/cert-welding-4.webp';

const certificationMockupCertificates = [
  certTrts1,
  certQuality1,
  certWelding1,
  certTrts2,
  certQuality2,
  certWelding2,
  certTrts3,
  certWelding3,
  certTrts4,
  certWelding4,
  certQuality1,
  certTrts1,
  certWelding2,
  certTrts2,
  certQuality2,
  certWelding3,
  certTrts3,
  certWelding4,
  certTrts4,
  certWelding1,
];

const advantages = [
  {
    title: 'Собственное производство',
    value: 'Полный цикл',
    description: 'Оборудование универсальное и с ЧПУ, цеховая грузоподъемность до 15 тонн, испытательный стенд до 40 МПа, лаборатория НК, участок термообработки.',
    image: productionImage,
  },
  {
    title: 'Команда профессионалов',
    value: '150',
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
    value: 'ТР ТС · ISO · ИНТИ · НАКС',
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
            <img src={active.image} alt="" className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-linear ${activeIndex === 0 ? 'object-center' : ''} ${activeIndex === 1 ? 'object-[52%_center]' : ''} ${activeIndex === 2 ? 'object-center' : ''}`} />
          ) : (
            <div className="absolute inset-0 overflow-hidden bg-[#dfe4e6]">
              <div className="absolute inset-[-18%] rotate-[-18deg] scale-110 opacity-95">
                <div className="grid h-full grid-cols-4 gap-5 md:grid-cols-5 lg:gap-8">
                  {certificationMockupCertificates.map((certificate, index) => (
                    <div key={index} className="relative aspect-[0.72] overflow-hidden bg-white p-3 shadow-[0_18px_44px_rgba(38,55,64,0.16)]">
                      <img
                        src={certificate}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#50626c]/[0.08]" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#263740]/18" />
            </div>
          )}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#263740]/90 via-[#34454e]/45 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#263740]/85 via-transparent to-[#263740]/15" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1920px] flex-col justify-end px-6 pb-52 pt-24 sm:pb-36 lg:px-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="absolute left-6 top-20 text-white sm:top-24 lg:left-12 lg:top-16"
        >
          <div className="mb-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/62">
            <span className="h-px w-12 bg-white/35" />
            Сильные стороны
          </div>
          <h2 className="text-[clamp(2.25rem,5vw,5.75rem)] font-semibold leading-[0.96] tracking-[-0.055em]">
            Наши преимущества
          </h2>
        </motion.div>
        <div className="max-w-3xl pl-0 lg:pl-[430px]">
          <AnimatePresence mode="wait">
            <motion.div key={`copy-${activeIndex}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }} className="text-white">
              <div className="mb-5 text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.05em]">{active.value}</div>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-[24px]">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-4 left-5 right-5 z-30 grid grid-cols-2 overflow-hidden border border-white/25 bg-[#263740]/75 backdrop-blur-md sm:bottom-5 sm:grid-cols-4 lg:bottom-auto lg:left-12 lg:right-auto lg:top-1/2 lg:w-[350px] lg:-translate-y-1/2 lg:grid-cols-1">
          {advantages.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => selectAdvantage(index)}
                className={`group relative flex min-h-[62px] w-full items-start gap-2 border-r border-b border-white/15 px-3 py-2.5 text-left text-white transition-colors even:border-r-0 sm:min-h-20 sm:items-center sm:gap-3 sm:border-b-0 sm:even:border-r sm:last:border-r-0 lg:min-h-24 lg:border-b lg:border-r-0 lg:px-5 ${isActive ? 'bg-[#8D9DA6]' : 'hover:bg-white/10'}`}
                aria-pressed={isActive}
              >
                <span className="text-[10px] font-semibold tabular-nums text-white/55 lg:w-7 lg:text-xs">0{index + 1}</span>
                <span className={`flex-1 text-[13px] leading-tight transition-transform sm:text-base lg:text-lg ${isActive ? 'font-semibold lg:translate-x-1' : 'font-medium group-hover:translate-x-1'}`}>{item.title}</span>
                <ArrowUpRight size={18} className={`ml-auto hidden transition-all lg:block ${isActive ? 'rotate-45 text-white' : 'text-white/50 group-hover:text-white'}`} />
                {isActive && <motion.span key={cycleKey} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-white" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 7, ease: 'linear' }} />}
              </button>
            );
          })}
      </div>
    </section>
  );
}
