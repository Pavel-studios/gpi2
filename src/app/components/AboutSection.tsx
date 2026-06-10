import { motion } from 'motion/react';
import { Users, Shield, MapPin, Award, Building2, Calendar, CheckCircle2, TrendingUp, Target, Lightbulb, ArrowRight } from 'lucide-react';
import pattern from '@/imports/pattern.svg'

export function AboutSection() {
  const timeline = [
    { year: '2005', event: 'Основание предприятия', description: 'Запуск первого производственного цеха' },
    { year: '2010', event: 'Расширение производства', description: 'Увеличение площадей до 4 000 м²' },
    { year: '2015', event: 'Получение лицензий Ростехнадзора', description: 'Аттестация по всем направлениям' },
    { year: '2018', event: 'Запуск нового сварочного цеха', description: 'Внедрение современного оборудования' },
    { year: '2022', event: 'Сертификация по ASME', description: 'Международное признание качества' },
    { year: '2026', event: 'Внедрение системы контроля качества', description: 'Полная цифровизация процессов' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Качество',
      description: 'Строгий контроль на каждом этапе производства',
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: '21 год безупречной репутации на рынке',
      gradient: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Современные технологии и решения',
      gradient: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
  ];

  const certificates = [
    { name: 'Лицензия Ростехнадзора', code: 'РТН-2024-001' },
    { name: 'Аттестация НАКС', code: 'НАКС-2024-156' },
    { name: 'Свидетельство СРО', code: 'СРО-П-123-456' },
    { name: 'Сертификат ГОСТ', code: 'РОСС RU.001.456' },
    { name: 'Сертификат ТР ТС', code: 'ТС RU C-RU.АЛ15.В' },
    { name: 'Сертификат ASME', code: 'ASME U-2024' },
  ];

  const regions = [
    { name: 'Москва и МО', projects: 45 },
    { name: 'Санкт-Петербург', projects: 28 },
    { name: 'Сибирь', projects: 52 },
    { name: 'Урал', projects: 38 },
    { name: 'Дальний Восток', projects: 15 },
    { name: 'Казахстан', projects: 22 },
  ];

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(167,169,172,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ backgroundImage: `linear-gradient(to right, transparent 0%, rgba(255, 255, 255,0.2) 100%)`, maskImage: `url(${pattern})`, maskPosition: `center`}}/>

        {/* Geometric decorations */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rotate-45" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/10 -rotate-12" />

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
                  О Компании
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                21 год инженерного
                <br />
                <span className="bg-gradient-to-r from-[#A7A9AC] to-white bg-clip-text text-transparent">
                  совершенства
                </span>
              </h1>

              <p
                className="text-white/80 mb-8"
                style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
              >
                ООО «Газ-Проект Инжиниринг» — российское машиностроительное предприятие полного цикла.
                Проектируем, производим и поставляем промышленное оборудование для ключевых отраслей экономики.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, value: 'с 2005', label: 'На рынке' },
                  { icon: Award, value: '200+', label: 'Проектов' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-6 bg-white/10 backdrop-blur-sm border border-white/20">
                      <Icon className="text-white/70 mb-3" size={28} strokeWidth={1.5} />
                      <div
                        className="text-white mb-1"
                        style={{ fontSize: '28px', fontWeight: 800 }}
                      >
                        {item.value}
                      </div>
                      <div
                        className="text-white/70"
                        style={{ fontSize: '13px', fontWeight: 500 }}
                      >
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className={`p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                        index === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <div className={`inline-flex p-3 bg-gradient-to-br ${value.gradient} mb-4`}>
                        <Icon className="text-white" size={24} strokeWidth={1.5} />
                      </div>
                      <h3
                        className="text-white mb-2"
                        style={{ fontSize: '18px', fontWeight: 700 }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-white/70"
                        style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.5 }}
                      >
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#50626C] mb-6 text-center"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            История предприятия
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8D9DA6] via-[#A7A9AC] to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className="text-[#50626C] mb-2"
                      style={{ fontSize: '28px', fontWeight: 700 }}
                    >
                      {item.year}
                    </div>
                    <div
                      className="text-[#595B5C]"
                      style={{ fontSize: '16px', fontWeight: 400 }}
                    >
                      {item.event}
                    </div>
                  </div>

                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#50626C] border-4 border-white shadow-lg relative z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-r from-[#50626C] to-[#8D9DA6]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#8D9DA6]/10 to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFFFFF] border border-[#FFFFFF]/10 mb-6">
              <span className="text-[#50626C] uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                Команда
              </span>
            </div>
            <h2
              className="text-[#FFFFFF] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Штат сотрудников
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { count: '50+', label: 'Инженеры и конструкторы', icon: Users, color: 'bg-[#FFFFFF]' },
              { count: '80+', label: 'Рабочие производства', icon: Award, color: 'bg-[#FFFFFF]' },
              { count: '20+', label: 'Административный персонал', icon: Building2, color: 'bg-[#FFFFFF]' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 border border-[#FFFFFF] group-hover:border-[#8D9DA6]/60 transition-all duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative p-8 text-center">
                    <div className={`inline-flex p-5 bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-[#50626C]" size={32} strokeWidth={1.5} />
                    </div>
                    <div
                      className="text-[#FFFFFF] mb-2"
                      style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em' }}
                    >
                      {item.count}
                    </div>
                    <div
                      className="text-[#FFFFFF]"
                      style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates */}
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
              <span className="text-[#50626C] uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                Аккредитация
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Сертификаты и лицензии
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-white border-2 border-[#A7A9AC]/30 group-hover:border-[#50626C]/60 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] to-[#8D9DA6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <Shield className="text-[#8D9DA6] group-hover:text-white mb-4 transition-colors" size={40} strokeWidth={1.5} />
                  <div
                    className="text-[#50626C] group-hover:text-white text-center mb-2 transition-colors"
                    style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {cert.name}
                  </div>
                  <div
                    className="text-[#A7A9AC] group-hover:text-white/70 text-center transition-colors"
                    style={{ fontSize: '10px', fontWeight: 600 }}
                  >
                    {cert.code}
                  </div>

                  <div className="absolute top-2 right-2 w-6 h-6 border border-[#A7A9AC]/30 group-hover:border-white/50 group-hover:rotate-45 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="relative py-16 px-6 overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5]">
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
                ГЕОГРАФИЯ
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Масштаб деятельности
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-gradient-to-br from-[#50626C] to-[#8D9DA6] mb-12 overflow-hidden shadow-2xl"
          >
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-white mx-auto mb-4" size={64} strokeWidth={1.5} />
                <div
                  className="text-white mb-2"
                  style={{ fontSize: '28px', fontWeight: 700 }}
                >
                  Вся Россия и СНГ
                </div>
                <div
                  className="text-white/70"
                  style={{ fontSize: '16px', fontWeight: 400 }}
                >
                  Поставки в ключевые промышленные регионы
                </div>
              </div>
            </div>

            {/* Animated points */}
            {[
              { top: '30%', left: '35%' },
              { top: '45%', left: '55%' },
              { top: '50%', left: '70%' },
              { top: '60%', left: '45%' },
              { top: '35%', left: '65%' },
              { top: '55%', left: '80%' },
            ].map((pos, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute w-4 h-4 rounded-full bg-white"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
              </motion.div>
            ))}
          </motion.div>

          {/* Regions grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 bg-white border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className="text-[#50626C] mb-2"
                  style={{ fontSize: '24px', fontWeight: 800 }}
                >
                  {region.projects}
                </div>
                <div
                  className="text-[#595B5C]"
                  style={{ fontSize: '13px', fontWeight: 600 }}
                >
                  {region.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
