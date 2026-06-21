import { motion } from 'motion/react';
import { Cog, Flame, Shield, Gauge, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProductionPreview() {
  const capabilities = [
    {
      icon: Cog,
      title: 'Механообработка',
      description: 'Токарные, фрезерные, карусельные и расточные станки; универсальное оборудование и ЧПУ',
      features: ['Токарные станки', 'Фрезерные станки', 'Карусельные станки'],
      area: 'ЧПУ',
    },
    {
      icon: Flame,
      title: 'Сварочное производство',
      description: 'TIG, MIG/MAG, SAW сварка с аттестацией НАКС',
      features: ['TIG сварка', 'Аттестация НАКС', 'Нержавеющие стали'],
      area: 'НАКС',
    },
    {
      icon: Shield,
      title: 'Контроль качества',
      description: 'Многоступенчатая система контроля на всех этапах',
      features: ['ВИК, РК, УЗК', 'РФА-контроль', 'Контроль герметичности'],
      area: 'Аттестованная лаборатория',
    },
  ];

  const stats = [
    { value: '15', unit: ' тонн', label: 'Грузоподъёмность кран-балок' },
    { value: '40', unit: ' МПа', label: 'Стенд гидравлических испытаний' },
    { value: '300', unit: ' мм', label: 'Лентопильные станки' },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0V0zm50 2v96M2 50h96' stroke='%2350626C' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header with stats */}
        <div className="grid gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 py-2 bg-[#50626C]/5 border border-[#50626C]/10 mb-6">
              <span className="text-[#50626C] uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                Производство
              </span>
            </div>

            <h2
              className="text-[#50626C] mb-6 text-center"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}
            >
              Производственные
              <br />
              мощности
            </h2>

            <p
              className="text-[#595B5C] mb-8 text-center"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
            >
              Полный цикл изготовления на современном оборудовании под контролем специалистов высшей квалификации
            </p>

          </motion.div>

        </div>

        {/* Capabilities cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card container */}
                <div className="relative h-full bg-white border border-[#A7A9AC]/20 overflow-hidden">
                  {/* Top colored section */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[#50626C] to-[#595B5C] overflow-hidden">
                    {/* Pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="p-4 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="text-white" size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Area badge */}
                    <div className="absolute top-6 right-6 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20">
                      <span
                        className="text-white"
                        style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}
                      >
                        {capability.area}
                      </span>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#50626C] via-transparent to-transparent" />
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <h3
                      className="text-[#50626C] mb-3"
                      style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {capability.title}
                    </h3>

                    <p
                      className="text-[#595B5C] mb-6"
                      style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.6 }}
                    >
                      {capability.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {capability.features.map((feature, idx) => (
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

                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#50626C] via-[#8D9DA6] to-[#A7A9AC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
