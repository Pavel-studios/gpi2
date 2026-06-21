import { motion } from 'motion/react';
import { RotateCw, Workflow, Wrench, Package, Settings, Cog, ArrowUpRight, ArrowRight, ArrowDown, Gauge, Droplet, CheckCircle2, Layers } from 'lucide-react';
import pattern from '@/imports/pattern.svg'

export function EquipmentSection() {
  const equipment = [
    {
      name: 'Факельное оборудование',
      params: 'Изготовление по требованиям проекта',
      industries: 'Нефтегазовая, Химическая',
    },
    {
      name: 'Емкостное оборудование',
      params: 'Изготовление по требованиям проекта',
      industries: 'Нефтегазовая, Энергетика',
    },
    {
      name: 'Блочно-модульное оборудование',
      params: 'Изготовление по требованиям проекта',
      industries: 'Химическая, Атомная',
    },
    {
      name: 'Автоматизированные системы управления технологическими процессами',
      params: 'Изготовление по требованиям проекта',
      industries: 'Все отрасли',
    },
    {
      name: 'Теплообменное оборудование',
      params: 'Изготовление по требованиям проекта',
      industries: 'Нефтегазовая, Химическая',
    },
    {
      name: 'Колонное оборудование',
      params: 'Изготовление по требованиям проекта',
      industries: 'Химическая, Энергетика',
    },
    {
      name: 'Подогреватели высокого давления',
      params: 'Изготовление по требованиям проекта',
      industries: 'Все отрасли',
    },
    {
      name: 'Подогреватели низкого давления',
      params: 'Изготовление по требованиям проекта',
      industries: 'Нефтегазовая, Энергетика',
    },
    {
      name: 'Подогреватели сетевой воды',
      params: 'Изготовление по требованиям проекта',
      industries: 'Химическая',
    },
  ];

  const competencies = [
    { name: 'Инжиниринг', icon: Workflow, description: 'Разработка технической документации' },
    { name: 'Проектирование', icon: Settings, description: 'Конструкторские решения' },
    { name: 'Производство', icon: Cog, description: 'Изготовление на собственных мощностях' },
    { name: 'Поставка', icon: Package, description: 'Логистика и комплектация' },
    { name: 'Монтаж', icon: Wrench, description: 'Шефмонтаж и пусконаладка' },
    { name: 'Сервис', icon: RotateCw, description: 'Гарантийное обслуживание' },
  ];

  const projects = [
    {
      customer: 'Заказчик 1',
      industry: 'Нефтегазовая',
      task: 'Изготовление и поставка теплообменников для установки первичной перегонки нефти',
      solution: 'Разработка и производство теплообменников типа ТН по ГОСТ Р 52857.1-2007, с применением стали 12Х18Н10Т',
      equipment: 'Теплообменники ТН-1500, ТН-2000, ТН-2500',
      year: 2023,
      images: ['rosneft1.jpg', 'rosneft2.jpg']
    },
    {
      customer: 'Заказчик 2',
      industry: 'Химическая',
      task: 'Проектирование и изготовление реакторов для производства синтетического каучука',
      solution: 'Проектирование, расчет на прочность по ASME VIII Div.1, изготовление из стали 09Г2С с многослойной изоляцией',
      equipment: 'Реакторы полимеризации РП-50, РП-100',
      year: 2022,
      images: ['sibur1.jpg', 'sibur2.jpg']
    },
    {
      customer: 'Заказчик 3',
      industry: 'Энергетика',
      task: 'Поставка сепараторов высокого давления для ГРЭС',
      solution: 'Изготовление сепараторов по ТР ТС 032/2013, с полным циклом НДК, включая РК и УЗК',
      equipment: 'Сепараторы СВД-80, СВД-120',
      year: 2024,
      images: ['rushydro1.jpg', 'rushydro2.jpg']
    },
    {
      customer: 'Заказчик 4',
      industry: 'Атомная',
      task: 'Разработка и производство абсорберов для установок изотопного обогащения',
      solution: 'Создание оборудования по спецификациям заказчика с применением инертной сварки и строгим контролем качества',
      equipment: 'Абсорберы АИО-10, АИО-15',
      year: 2021,
      images: ['atomenergoprom1.jpg', 'atomenergoprom2.jpg']
    },
    {
      customer: 'Заказчик 5',
      industry: 'Нефтегазовая',
      task: 'Изготовление колонн ректификации для модернизации НПЗ',
      solution: 'Производство высокотехнологичных колонн с использованием роботизированной сварки и комплексного контроля',
      equipment: 'Колонны КР-30, КР-45',
      year: 2023,
      images: ['lukoil1.jpg', 'lukoil2.jpg']
    }
  ];
  const standards = [
    { name: 'ТР ТС', fullName: 'Технические регламенты Таможенного союза', color: 'from-[#50626C] to-[#595B5C]' },
    { name: 'ISO 9001', fullName: 'Система менеджмента качества', color: 'from-[#595B5C] to-[#8D9DA6]' },
    { name: 'STO INTI S.QS.7', fullName: 'Отраслевой стандарт', color: 'from-[#8D9DA6] to-[#A7A9AC]' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ backgroundImage: `linear-gradient(to right, transparent 0%, rgba(255, 255, 255,0.2) 100%)`, maskImage: `url(${pattern})`, maskPosition: `center`}}/>

        {/* Geometric patterns */}
        {/* <div className="absolute top-10 right-10 w-96 h-96 border border-white/10 rotate-12 rounded-full" />
        <div className="absolute bottom-10 left-10 w-64 h-64 border border-white/10 -rotate-12" /> */}

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                <span className="text-white/90 uppercase" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.15em' }}>
                  Оборудование и Компетенции
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Промышленное
                <br />
                <span className="bg-gradient-to-r from-[#A7A9AC] to-white bg-clip-text text-transparent">
                  оборудование
                </span>
              </h1>

              <p
                className="text-white/80 mb-8"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
              >
                Полная номенклатура оборудования.
                Все изображения основаны на реальных фотографиях производимого оборудования.
              </p>

              <div className="space-y-3">
                {[
                  'Более 10 типов оборудования',
                  'Давление до 50 МПа',
                  'Температура до 600°C',
                  'Полная сертификация',
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 backdrop-blur-md border border-white/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                  </motion.div>
                  <div
                    className="text-white/70"
                    style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '0.1em' }}
                  >
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equipment catalog */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-6 text-center"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Каталог оборудования
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                <div className="aspect-square bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img/>
                  </div>

                </div>

                <div className="p-6">
                  <h3
                    className="text-[#50626C] mb-3"
                    style={{ fontSize: '18px', fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <div
                    className="text-[#595B5C] mb-3"
                    style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {item.params}
                  </div>
                  <div
                    className="text-[#8D9DA6]"
                    style={{ fontSize: '12px', fontWeight: 500 }}
                  >
                    {item.industries}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Competencies */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white">

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Компетенции
            </h2>
          </motion.div>

          {/* Competencies Pipeline - Desktop & Mobile */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-center pb-8 px-4 max-w-7xl mx-auto overflow-x-auto">
              {competencies.map((comp, index) => {
                const Icon = comp.icon;
                return (
                  <div key={index} className="flex flex-col lg:flex-row items-center flex-1 ">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }}
                      className="bg-white border border-[#A7A9AC]/20 rounded-lg overflow-hidden group h-full"
                    >
                      <div className="p-3 flex flex-col items-center">
                        <div className="inline-flex p-4 bg-gradient-to-br from-[#50626C] to-[#8D9DA6] mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white" size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[#50626C] mb-2 font-semibold text-lg">{comp.name}</h3>
                        <p className="text-[#595B5C] text-sm text-center mb-4">{comp.description}</p>
                      </div>
                    </motion.div>
                    {index < competencies.length - 1 && (
                      <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                      transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.1 }} 
                      className="mx-1 text-[#8D9DA6]">
                        <ArrowRight className="hidden lg:block" size={24} />
                        <ArrowDown className="lg:hidden" size={24} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Реализованные проекты
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-[#A7A9AC]/20 hover:border-[#50626C]/40 transition-all duration-300 hover:shadow-xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <img src={project.images[0]} alt={project.customer} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
                  </div>

                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span
                      className="px-3 py-1 text-xs font-medium bg-[#50626C] text-white rounded-full"
                    >
                      {project.industry}
                    </span>
                    <span
                      className="px-3 py-1 text-xs font-medium bg-[#8D9DA6] text-white rounded-full"
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="text-[#50626C] mb-3"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    {project.customer}
                  </h3>

                  <div
                    className="text-[#595B5C] text-sm mb-4"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Задача:</strong> {project.task}
                  </div>

                  <div
                    className="text-[#595B5C] text-sm mb-4"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Решение:</strong> {project.solution}
                  </div>

                  <div
                    className="text-[#595B5C] text-sm"
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.5 }}
                  >
                    <strong>Оборудование:</strong> {project.equipment}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
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
                СЕРТИФИКАЦИЯ
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Соответствие стандартам
            </h2>
          </motion.div>
      
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white border-2 border-[#A7A9AC]/30 group-hover:border-[#8D9DA6]/60 transition-all duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-br ${standard.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
                <div className="relative p-8 text-center">
                  <div
                    className="text-[#50626C] group-hover:text-white mb-3 transition-colors"
                    style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '0.05em' }}
                  >
                    {standard.name}
                  </div>
                  <div
                    className="text-[#595B5C] group-hover:text-white/80 transition-colors"
                    style={{ fontSize: '12px', fontWeight: 400, lineHeight: 1.3 }}
                  >
                    {standard.fullName}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
