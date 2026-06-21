import { motion } from 'motion/react';
import { Factory, Users, Cog, Award, TrendingUp, Shield } from 'lucide-react';

export function AdvantagesSection() {
  const advantages = [
    {
      icon: Factory,
      title: 'Собственное производство',
      description: 'Универсальное оборудование и ЧПУ, кран-балки до 15 тонн и стенд гидравлических испытаний до 40 МПа',
      accent: 'from-[#50626C] to-[#595B5C]',
    },
    {
      icon: Users,
      title: '150+ сотрудников',
      description: 'Инженеры, конструкторы, рабочие производства и административный персонал',
      accent: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      icon: TrendingUp,
      title: '2000+ проектов',
      description: 'Поставки промышленного оборудования для российских и зарубежных объектов',
      accent: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
    {
      icon: Cog,
      title: 'Конструкторское бюро',
      description: 'Собственный отдел разработки и проектирования оборудования',
      accent: 'from-[#50626C] to-[#8D9DA6]',
    },
    {
      icon: Award,
      title: 'С 2003 года',
      description: 'Опыт работы на рынке оборудования для нефтегазовой, химической и энергетической отраслей',
      accent: 'from-[#595B5C] to-[#A7A9AC]',
    },
    {
      icon: Shield,
      title: 'Полная сертификация',
      description: 'ТР ТС, ISO 9001, STO INTI S.QS.7 и аттестации НАКС',
      accent: 'from-[#8D9DA6] to-[#50626C]',
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F5F5] to-white" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#8D9DA6]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#50626C]/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#50626C]/5 border border-[#50626C]/10 mb-6">
            <span className="text-[#50626C] uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
              Преимущества компании
            </span>
          </div>
          <h2
            className="text-[#50626C] mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Наши преимущества
          </h2>
          <p
            className="text-[#595B5C] max-w-2xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
          >
            Факты, необходимые для первичной оценки предприятия как промышленного поставщика
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-white border border-[#A7A9AC]/20 group-hover:border-[#8D9DA6]/60 transition-all duration-300" />

                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative p-8 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${advantage.accent} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#50626C] mb-3 group-hover:text-[#595B5C] transition-colors"
                    style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#595B5C]"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.6 }}
                  >
                    {advantage.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#50626C] to-[#8D9DA6] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
