import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroPoster from '@/imports/tz-photos/adv-production.webp';
import pattern from '@/imports/pattern.svg';
import Logo2 from './ui/logo2';

const stages = ['Проектирование', 'Производство', 'Поставка', 'Монтаж'];
const publicBase = import.meta.env.BASE_URL.replace(/\/$/, '');

export function HeroSection() {
  return (
    <section className="hero relative min-h-[100svh] overflow-hidden bg-[#eef1f2]">
      <div className="absolute inset-0">
        <video className="h-full w-full object-cover object-[64%_center]" src={`${publicBase}/media/production-hero-h264.mp4`} poster={heroPoster} autoPlay muted loop playsInline preload="auto" aria-label="Производство промышленного оборудования" />
        <div className="hero__video-shade absolute inset-0" />
      </div>
      <div
        className="hero__pattern pointer-events-none absolute"
        style={{
          maskImage: `url(${pattern})`,
          WebkitMaskImage: `url(${pattern})`,
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1920px] flex-col px-6 lg:px-12">
        <div className="flex flex-1 items-end pb-5 pt-28 lg:items-center lg:py-20">
          <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-[760px]">
            <h1 className="w-[min(760px,88vw)]">
              <Logo2 className="h-auto w-full brightness-[0.62] contrast-125 drop-shadow-[0_12px_28px_rgba(80,98,108,0.14)]" />
            </h1>
            <div className="hero__metal-line my-7 h-px w-[min(360px,72vw)]" />
            <p className="max-w-[650px] text-base leading-relaxed text-[#40515a] sm:text-lg">
              Полный цикл производства оборудования для нефтегазовой, химической и энергетической отраслей{' '}
              <span className="inline-block text-[1.32em] font-black tracking-[-0.025em] text-[#263740]">
                с 2003 года
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="grid border-t border-[#50626c]/20 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <div key={stage} className="group flex items-center gap-3 border-b border-[#50626c]/15 py-4 sm:px-4 lg:border-b-0 lg:border-r first:pl-0 last:border-r-0">
              <span className="text-xs font-semibold text-[#7b8b93]">0{index + 1}</span>
              <span className="text-sm font-semibold tracking-[0.04em] text-[#40515a]">{stage}</span>
              {index < stages.length - 1 && <ArrowRight className="ml-auto hidden text-[#8d9da6] lg:block" size={15} />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
