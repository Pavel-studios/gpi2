import { motion } from 'motion/react';
import { Cog, Flame, Shield, FlaskConical, Gauge, CheckCircle2, ArrowRight, Factory, TrendingUp, Award } from 'lucide-react';
import { Pattern } from '@/imports/pattern';

export function ProductionSection() {
  const productionAreas = [
    {
      title: 'Заготовительные участки',
      icon: Cog,
      description: 'Участок подготовки заготовок для дальнейшей механической обработки, сварки и сборки оборудования',
      details: [
        'Лентопильные станки до 300 мм',
        'Портал газоплазменной резки',
        'Ручная газовая резка',
      ],
      stats: [
        { label: 'Резка', value: 'до 300 мм' },
        { label: 'Оснащение', value: 'газоплазма' },
        { label: 'Подготовка', value: 'заготовки' },
      ],
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      title: 'Механическая обработка',
      icon: Cog,
      description: 'Производственные участки оснащены универсальным оборудованием и станками с ЧПУ',
      details: [
        'Токарные станки',
        'Фрезерные станки',
        'Карусельные станки',
        'Расточные станки',
      ],
      stats: [
        { label: 'Тип', value: 'универс.' },
        { label: 'ЧПУ', value: 'есть' },
        { label: 'Краны', value: 'до 15 т' },
      ],
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      title: 'Сварочное производство',
      icon: Flame,
      description: 'Сварка представлена технологиями TIG, MIG/MAG и SAW. Персонал и сварочные технологии имеют аттестации НАКС',
      details: [
        'TIG',
        'MIG/MAG',
        'SAW',
        'Аттестация НАКС',
      ],
      materials: [
        'Углеродистые стали',
        'Нержавеющие стали',
        'Низколегированные стали',
        'Алюминиевые сплавы',
      ],
      gradient: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      title: 'Контроль качества',
      icon: Shield,
      description: 'Лаборатория имеет свидетельство аттестации, персонал аттестован по всем применяемым видам контроля',
      controls: [
        'Визуально-измерительный контроль',
        'Радиографический контроль до 60 мм',
        'Ультразвуковой контроль',
        'Рентгенофлуоресцентный контроль',
        'Контроль герметичности',
      ],
      gradient: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
    {
      title: 'АСУТП цеха',
      icon: Gauge,
      description: 'Автоматизированная система управления технологическими процессами с контролем в реальном времени',
      features: [
        'Системы мониторинга производственных операций',
        'Автоматизация контроля параметров',
        'Электронный документооборот',
      ],
      gradient: 'from-[#50626C] to-[#8D9DA6]',
    },
    {
      title: 'Испытательные зоны',
      icon: FlaskConical,
      description: 'Оборудованные стенды для проведения гидравлических и пневматических испытаний',
      details: [
        'Гидравлические испытания',
        'Пневматические испытания',
        'Тепловые испытания',
        'Статические испытания',
      ],
      stats: [
        { label: 'Стенд', value: 'гидро' },
        { label: 'Давление', value: 'до 40 МПа' },
      ],
      gradient: 'from-[#595B5C] to-[#A7A9AC]',
    },
  ];

  const capabilities = [
    { icon: Factory, value: '15', unit: 'т', label: 'Кран-балки' },
    { icon: Cog, value: '40', unit: 'МПа', label: 'Гидроиспытания' },
    { icon: Award, value: 'НАКС', unit: '', label: 'Аттестация сварки' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" />
        <Pattern opacity={0.16} size={132} fade="right" />

        {/* Decorative elements */}
        {/* <div className="absolute top-20 right-0 w-[500px] h-[500px] border border-white/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/10 rotate-45" /> */}

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                <span className="text-white/90 uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                  Производство
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Собственное
                <br />
                <span className="bg-gradient-to-r from-[#A7A9AC] to-white bg-clip-text text-transparent">
                  производство
                </span>
              </h1>

              <p
                className="text-white/80 mb-8"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
              >
                Производственная база включает заготовительный участок, механическую обработку,
                сварочное производство, контроль качества и испытательные зоны.
              </p>

              <div className="space-y-3">
                {[
                  'Универсальное оборудование и станки с ЧПУ',
                  'Кран-балки грузоподъемностью до 15 тонн',
                  'Стенд гидравлических испытаний до 40 МПа',
                  'Аттестации НАКС и аттестованная лаборатория',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#A7A9AC] flex-shrink-0" size={20} />
                    <span
                      className="text-white/90"
                      style={{ fontSize: '15px', fontWeight: 500 }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="col-span-3 md:col-span-1"
                  >
                    <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <Icon className="text-white/70 mb-4" size={32} strokeWidth={1.5} />
                      <div className="flex items-baseline gap-1 mb-2">
                        <span
                          className="text-white"
                          style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em' }}
                        >
                          {cap.value}
                        </span>
                        <span
                          className="text-[#A7A9AC]"
                          style={{ fontSize: '18px', fontWeight: 700 }}
                        >
                          {cap.unit}
                        </span>
                      </div>
                      <div
                        className="text-white/70"
                        style={{ fontSize: '13px', fontWeight: 500 }}
                      >
                        {cap.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Areas */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#50626C]/5 border border-[#50626C]/10 mb-6">
              <span className="text-[#50626C]" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                ПРОИЗВОДСТВО
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Наши производственные участки
            </h2>
          </motion.div>

          <div className="space-y-6">
            {productionAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white border border-[#A7A9AC]/20 group-hover:border-[#8D9DA6]/60 transition-all duration-300 group-hover:shadow-xl" />

                  {/* Accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${area.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />

                  <div className="relative grid lg:grid-cols-12 gap-8">
                    {/* Left: Visual placeholder */}
                    <div className="lg:col-span-5">
                      <div className={`aspect-[4/3] bg-gradient-to-br ${area.gradient} relative overflow-hidden`}>
                        <Pattern opacity={0.16} size={104} fade="center" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="text-white/40 group-hover:text-white/60 group-hover:scale-110 transition-all duration-300" size={80} strokeWidth={1} />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div
                            className="text-white/60"
                            style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}
                          >
                            {area.title === 'Испытательные зоны' ? 'ФОТО СТЕНДОВ' : area.title === 'Сварочное производство' ? 'ФОТО СВАРОЧНЫХ ПОСТОВ' : 'ФОТО/ВИДЕО УЧАСТКА'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-7 p-4 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-4 bg-gradient-to-br ${area.gradient}`}>
                            <Icon className="text-white" size={28} strokeWidth={1.5} />
                          </div>
                          <h3
                            className="text-[#50626C] text-[20px] sm:text-[28px]"
                            style={{ fontWeight: 700 }}
                          >
                            {area.title}
                          </h3>
                        </div>

                        <p
                          className="text-[#595B5C] mb-6"
                          style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.7 }}
                        >
                          {area.description}
                        </p>

                        {/* Details list */}
                        {(area.details || area.controls || area.features) && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {(area.details || []).map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8D9DA6]" />
                                <span
                                  className="text-[#595B5C]"
                                  style={{ fontSize: '13px', fontWeight: 500 }}
                                >
                                  {detail}
                                </span>
                              </div>
                            ))}
                            {(area.controls || []).map((control, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8D9DA6]" />
                                <span
                                  className="text-[#595B5C]"
                                  style={{ fontSize: '13px', fontWeight: 500 }}
                                >
                                  {control}
                                </span>
                              </div>
                            ))}
                            {(area.features || []).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8D9DA6]" />
                                <span
                                  className="text-[#595B5C]"
                                  style={{ fontSize: '13px', fontWeight: 500 }}
                                >
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Materials */}
                        {area.materials && (
                          <div className="mb-6">
                            <div
                              className="text-[#50626C] mb-3"
                              style={{ fontSize: '15px', fontWeight: 600 }}
                            >
                              Свариваемые материалы:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {area.materials.map((material, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-[#F5F5F5] text-[#595B5C] text-sm border border-[#A7A9AC]/10"
                                  style={{ fontSize: '12px', fontWeight: 500 }}
                                >
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Stats */}
                        {area.stats && (
                          <div className="grid grid-cols-3 gap-1 ms:gap-4">
                            {area.stats.map((stat, idx) => (
                              <div key={idx} className="p-1 sm:p-4 bg-[#F5F5F5] text-[14px] sm:text-[18px] border border-[#A7A9AC]/10">
                                <div
                                  className="text-[#A7A9AC] mb-1"
                                  style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em' }}
                                >
                                  {stat.label}
                                </div>
                                <div
                                  className="text-[#50626C]"
                                  style={{ fontWeight: 800 }}
                                >
                                  {stat.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
