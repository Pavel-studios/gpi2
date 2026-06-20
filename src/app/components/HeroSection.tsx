import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import pattern from '@/imports/pattern.svg'
import backgroundImage from '@/imports/N59A2391.jpg'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(141,157,166,0.3),transparent_50%)]" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ backgroundImage: `linear-gradient(to right, transparent 0%, rgba(255, 255, 255,0.2) 100%)`, maskImage: `url(${pattern})`}}/> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ background: `linear-gradient(to right, transparent 50%, rgba(255, 255, 255,0.2) 100%), url(${backgroundImage}) center / cover no-repeat`}}/>
      </div>

      {/* Geometric patterns */}
      {/* <div className="absolute top-20 right-10 w-64 h-64 border-2 border-white/10 rotate-45 rounded-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-white/10 -rotate-12 rounded-2xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/5 rotate-12" /> */}

      <div className="relative z-10 w-full px-6 pt-48 lg:pt-64 bg-cover">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#5a5c5eb2] mb-6 border border-white/20">
                <span className="text-white/90 uppercase" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em' }}>
                  Производство оборудования с 2003 года
                </span>
              </div>

              <h1
                className="text-white mb-6 leading-[1.1]"
                style={{ fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                ГАЗ-ПРОЕКТ
                <br />
                <span className="bg-gradient-to-r from-[#A7A9AC] to-white bg-clip-text text-transparent">
                  ИНЖИНИРИНГ
                </span>
              </h1>

              <p
                className="text-white/80 mb-10 max-w-lg"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
              >
                Полный цикл производства промышленного оборудования для нефтегазовой, химической и энергетической отраслей
              </p>

            </motion.div>

            {/* Right content - Stats cards */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2003', unit: '', label: 'Год основания' },
                  { value: '2000', unit: '+', label: 'Реализованных проектов' },
                  { value: '15', unit: ' т', label: 'Грузоподъёмность кран-балок' },
                  { value: '40', unit: ' МПа', label: 'Гидравлические испытания' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 group-hover:border-white/40 transition-all duration-300" />
                    <div className="relative p-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span
                          className="text-white"
                          style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em' }}
                        >
                          {stat.value}
                        </span>
                        <span
                          className="text-[#A7A9AC]"
                          style={{ fontSize: '20px', fontWeight: 700 }}
                        >
                          {stat.unit}
                        </span>
                      </div>
                      <div
                        className="text-white/70"
                        style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-16 -left-8 px-6 py-4 bg-gradient-to-r from-[#50626C] to-[#8D9DA6] border-2 border-white/30 shadow-2xl"
              >
                <div className="text-white text-center">
                  <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }} className="text-white/70 mb-1">
                    СЕРТИФИКАЦИЯ
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '0.05em' }}>
                    ТР ТС • ISO 9001 • STO INTI S.QS.7
                  </div>
                </div>
              </motion.div>
            </motion.div> */}
          </div>

          {/* Process timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 lg:mt-48 pt-12  border-t border-white/10"
          >
            <div className="flex flex-wrap items-center flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:justify-start">
              {['Проектирование', 'Производство', 'Поставка', 'Монтаж', 'Сервис'].map((item, index, arr) => (
                <div key={item} className="flex items-center lg:flex-1">
                  <div className="group cursor-pointer">
                    <div className="flex lg:items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#5a5c5eb2] flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30">
                        <span className="text-white" style={{ fontSize: '12px', fontWeight: 700 }}>
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors" style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
                        {item}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-white/50 to-[#A7A9AC] w-0 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="text-white/30 hidden lg:block w-full" size={20} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
