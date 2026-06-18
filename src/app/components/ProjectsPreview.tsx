import { motion } from 'motion/react';
import { ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react';

export function ProjectsPreview() {
  const clients = [
    { name: 'Заказчик 1', projects: 45 },
    { name: 'Заказчик 2', projects: 12 },
    { name: 'Заказчик 3', projects: 28 },
    { name: 'Заказчик 4', projects: 35 },
    { name: 'Заказчик 5', projects: 31 },
    { name: 'Заказчик 6', projects: 52 },
  ];

  const projects = [
    {
      title: 'Теплообменное оборудование',
      client: 'Заказчик 1',
      year: '2025',
      value: 'ГПЗ',
      scope: 'Комплект теплообменного оборудования для газоперерабатывающего предприятия',
      status: 'Выполнен',
    },
    {
      title: 'Сепараторы высокого давления',
      client: 'Заказчик 2',
      year: '2024',
      value: 'Нефтегаз',
      scope: 'Серия трехфазных сепараторов для технологической линии',
      status: 'Выполнен',
    },
    {
      title: 'Реакторное оборудование',
      client: 'Заказчик 3',
      year: '2024',
      value: 'Нефтехимия',
      scope: 'Реакторное оборудование для модернизации производственного участка',
      status: 'Выполнен',
    },
  ];

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F5F5] to-white" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#8D9DA6]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#50626C]/10 to-transparent blur-3xl" />

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
              Портфолио
            </span>
          </div>
          <h2
            className="text-[#50626C] mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Реализованные проекты
          </h2>
          <p
            className="text-[#595B5C] max-w-2xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
          >
            Поставки оборудования для промышленных компаний России и стран ближнего зарубежья
          </p>
        </motion.div>

        {/* Clients grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square bg-white border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] to-[#8D9DA6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <Building2 className="text-[#8D9DA6] group-hover:text-white mb-3 transition-colors" size={32} strokeWidth={1.5} />
                  <div
                    className="text-[#50626C] group-hover:text-white text-center mb-2 transition-colors"
                    style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {client.name}
                  </div>
                  <div
                    className="text-[#A7A9AC] group-hover:text-white/70 transition-colors"
                    style={{ fontSize: '11px', fontWeight: 600 }}
                  >
                    {client.projects} проектов
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-[#50626C] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white border border-[#A7A9AC]/20 group-hover:border-[#8D9DA6]/60 transition-all duration-300" />

              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#50626C] to-[#8D9DA6] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              <div className="relative p-8 md:p-10">
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
                  {/* Left: Project info */}
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 bg-[#50626C]/5 text-[#50626C] border border-[#50626C]/10"
                        style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}
                      >
                        {project.year}
                      </span>
                      <span
                        className="px-3 py-1 bg-gradient-to-r from-[#50626C] to-[#8D9DA6] text-white"
                        style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}
                      >
                        {project.client}
                      </span>
                      {project.status === 'Выполнен' && (
                        <div className="flex items-center gap-1 text-[#50626C]">
                          <CheckCircle2 size={14} />
                          <span style={{ fontSize: '11px', fontWeight: 600 }}>
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    <h3
                      className="text-[#50626C] mb-3 group-hover:text-[#595B5C] transition-colors"
                      style={{ fontSize: '24px', fontWeight: 700, lineHeight: 1.3 }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-[#595B5C] mb-4"
                      style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.6 }}
                    >
                      {project.scope}
                    </p>

                  </div>

                  {/* Right: Stats */}
                  <div className="md:col-span-5">
                    <div className="flex md:justify-end">
                      <div className="relative">
                        <div className="text-right">
                          <div
                            className="text-[#A7A9AC] mb-2 uppercase"
                            style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}
                          >
                            Объект
                          </div>
                          <div
                            className="text-[#50626C]"
                            style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em' }}
                          >
                            {project.value}
                          </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-20 border-2 border-[#A7A9AC]/20 -rotate-12 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
