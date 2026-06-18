import { motion } from 'motion/react';
import { Droplet, Atom, FlaskConical, Zap, Factory, ArrowUpRight } from 'lucide-react';
import { Pattern } from '@/imports/pattern';

export function IndustriesSection() {
  const industries = [
    {
      name: 'Нефтегазовая',
      icon: Droplet,
      description: 'Сепараторы, теплообменники, емкостное оборудование',
      projects: '85+',
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      name: 'Атомная энергетика',
      icon: Atom,
      description: 'Высоконадежное оборудование для АЭС и спецобъектов',
      projects: '12+',
      gradient: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      name: 'Химическая промышленность',
      icon: FlaskConical,
      description: 'Реакторы, колонны, фильтры, абсорберы',
      projects: '65+',
      gradient: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
    {
      name: 'Тепловая энергетика',
      icon: Zap,
      description: 'Оборудование для ТЭС, ГЭС и альтернативной энергетики',
      projects: '28+',
      gradient: 'from-[#50626C] to-[#8D9DA6]',
    },
    {
      name: 'Металлургия',
      icon: Factory,
      description: 'Промышленное оборудование для металлургических комбинатов',
      projects: '15+',
      gradient: 'from-[#595B5C] to-[#A7A9AC]',
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden bg-white">
      <Pattern
        tone="dark"
        opacity={0.04}
        size={148}
        fade="top"
        gradient="linear-gradient(135deg, rgba(141,157,166,0.08), rgba(255,255,255,0))"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="inline-block px-4 py-2 bg-[#50626C]/5 border border-[#50626C]/10 mb-6">
                <span className="text-[#50626C] uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                  Отрасли применения
                </span>
              </div>
              <h2
                className="text-[#50626C] mb-4 text-center"
                style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                Отрасли, с которыми
                <br />
                мы работаем
              </h2>
              <p
                className="text-[#595B5C] max-w-2xl text-center"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
              >
                Комплексные инженерные решения для ключевых секторов промышленности
              </p>
            </div>

          </div>
        </motion.div>

        {/* Industries cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] to-[#595B5C]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Pattern opacity={0.13} size={110} fade="center" />

            <div className="relative h-full p-8 flex flex-col">
              <div className="mb-auto">
                <div className="inline-flex p-5 bg-white/10 backdrop-blur-sm mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <Droplet className="text-white" size={48} strokeWidth={1.5} />
                </div>

                <h3
                  className="text-white mb-4"
                  style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.01em' }}
                >
                  {industries[0].name}
                </h3>

                <p
                  className="text-white/80 mb-6"
                  style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}
                >
                  {industries[0].description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/20">
                <div>
                  <div className="text-white/60 mb-1" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em' }}>
                    ПРОЕКТОВ
                  </div>
                  <div className="text-white" style={{ fontSize: '28px', fontWeight: 800 }}>
                    {industries[0].projects}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller cards grid */}
          {industries.slice(1).map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden cursor-pointer bg-white border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${industry.gradient} group-hover:bg-white/20 transition-all duration-300`}>
                      <Icon className="text-white" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="text-[#A7A9AC] group-hover:text-white/70 transition-colors" style={{ fontSize: '20px', fontWeight: 800 }}>
                      {industry.projects}
                    </div>
                  </div>

                  <h3
                    className="text-[#50626C] mb-3 group-hover:text-white transition-colors"
                    style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {industry.name}
                  </h3>

                  <p
                    className="text-[#595B5C] group-hover:text-white/80 transition-colors text-sm mb-4"
                    style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {industry.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
