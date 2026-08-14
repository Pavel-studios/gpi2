import { motion } from 'motion/react';
import companyLogo from '@/imports/hero/company-logo.svg';
import heroVideo from '@/imports/hero/home-hero.mp4';
import pattern from '@/imports/hero/home-pattern.svg';

const stages = ['Проектирование', 'Производство', 'Поставка', 'Монтаж'];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full overflow-hidden bg-[#30383d] text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#40515a]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#202a30]/58 via-[#33434b]/24 to-[#26343b]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172127]/65 via-transparent to-[#202b31]/24" />
      </div>

      <img
        src={pattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-auto max-w-none -translate-x-[10%] -translate-y-[8%] brightness-0 invert opacity-[0.05]"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col justify-end px-5 pb-0 pt-28 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 max-w-[860px] sm:mb-10 lg:mb-14"
        >
          <img
            src={companyLogo}
            alt="Газ-Проект Инжиниринг"
            className="mb-5 h-auto w-full max-w-[520px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.48)] sm:max-w-[650px] lg:max-w-[760px]"
          />

          <p className="max-w-[720px] text-[17px] font-medium leading-[1.45] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:text-[21px] lg:text-[32px]">
            Полный цикл производства оборудования для нефтегазовой, химической и энергетической отраслей{' '}
            <strong className="whitespace-nowrap text-[21px] font-bold sm:text-[27px] lg:text-[42px]">с 2003 года</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="overflow-hidden border-t border-white/55 sm:-mx-8 sm:px-8 lg:-mx-14 lg:px-12 xl:-mx-20"
        >
          <div className="mx-auto grid max-w-[1920px] grid-cols-1 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <div
                key={stage}
                className="group flex min-h-[38px] items-center px-1 sm:min-h-[44px] lg:min-h-[132px] lg:px-7"
              >
                {index >= 0 && (
                  <span className="mr-7 hidden text-[14px] font-light text-white/85 lg:inline" aria-hidden="true">
                    🡪
                  </span>
                )}
                {index >= 0 && (
                  <span className="mr-2 text-[12px] font-light text-white/85 lg:hidden" aria-hidden="true">
                    🡪
                  </span>
                )}
                <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[-0.01em] text-white transition-colors min-[360px]:text-[13px] sm:text-[16px] sm:tracking-[0.01em] lg:text-[22px] lg:tracking-[0.015em]">
                  {String(index + 1).padStart(2, '0')} {stage}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
