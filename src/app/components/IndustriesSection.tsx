import { motion } from 'motion/react';
import { Droplet, Atom, FlaskConical, Zap, Factory, ArrowUpRight } from 'lucide-react';

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
      {/* Decorative grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0V0zm50 2v96M2 50h96' stroke='%2350626C' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }}
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

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

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
