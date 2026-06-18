import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, FileText, Building2 } from 'lucide-react';
import pattern from '@/imports/pattern.svg'

export function ContactsSection() {
  const contacts = [
    {
      icon: MapPin,
      title: 'Адрес',
      value: '123456, Россия, г. Уфа,\nул. ???',
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      gradient: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@gazproektengineering.ru',
      gradient: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
    {
      icon: Clock,
      title: 'График работы',
      value: 'Пн-Пт: 9:00 - 18:00\nСб-Вс: Выходной',
      gradient: 'from-[#50626C] to-[#8D9DA6]',
    },
  ];

  const departments = [
    { name: 'Приемная', phone: '+7 (495) 123-45-68', email: 'office@gpi.ru' },
    { name: 'Производственная площадка', phone: '+7 (495) 123-45-69', email: 'production@gpi.ru' },
    { name: 'Бухгалтерия', phone: '+7 (495) 123-45-70', email: 'accounting@gpi.ru' },
  ];

  const requisites = [
    { label: 'Полное наименование', value: 'Общество с ограниченной ответственностью "Газ-Проект Инжиниринг"' },
    { label: 'Юридический адрес', value: '123456, Россия, г. Уфа, ул. ???' },
    { label: 'ИНН', value: '7700000000' },
    { label: 'КПП', value: '770001001' },
    { label: 'ОГРН', value: '1234567890123' },
    { label: 'Расчетный счет', value: '40702810000000000000' },
    { label: 'Банк', value: 'ПАО "Банк"' },
    { label: 'БИК', value: '044525000' },
    { label: 'Корр. счет', value: '30101810000000000000' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ backgroundImage: `linear-gradient(to right, transparent 0%, rgba(255, 255, 255,0.2) 100%)`, maskImage: `url(${pattern})`, maskPosition: `center`}}/>

        {/* Decorative elements */}
        {/* <div className="absolute top-20 right-0 w-[400px] h-[400px] border border-white/10 rotate-45" />
        <div className="absolute bottom-0 left-0 w-80 h-80 border border-white/10 rounded-full" /> */}

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <span className="text-white/90 uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                Контактная информация
              </span>
            </div>

            <h1
              className="text-white mb-6 max-w-4xl mx-auto"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Реквизиты и адреса{' '}
              <span className="bg-gradient-to-r from-[#A7A9AC] to-white bg-clip-text text-transparent">
                предприятия
              </span>
            </h1>

            <p
              className="text-white/80 max-w-2xl mx-auto mb-12"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: 1.7 }}
            >
              Справочные данные ООО «Газ-Проект Инжиниринг»: юридический адрес,
              производственная площадка, общий телефон, электронная почта и режим работы.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-white border border-[#A7A9AC]/20 group-hover:border-[#8D9DA6]/60 transition-all duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative p-8">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${contact.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} strokeWidth={1.5} />
                    </div>

                    <div
                      className="text-[#A7A9AC] mb-2"
                      style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      {contact.title}
                    </div>

                    <div
                      className="text-[#50626C] whitespace-pre-line"
                      style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.6 }}
                    >
                      {contact.value}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${contact.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </motion.div>
              );
            })}
          </div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20 hover:border-[#8D9DA6]/60 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8D9DA6] to-[#A7A9AC] flex items-center justify-center">
                    <Building2 className="text-white" size={20} strokeWidth={2} />
                  </div>
                  <h3
                    className="text-[#50626C]"
                    style={{ fontSize: '16px', fontWeight: 700 }}
                  >
                    {dept.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#595B5C]">
                    <Phone size={14} className="flex-shrink-0" />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{dept.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#595B5C]">
                    <Mail size={14} className="flex-shrink-0" />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-[#F5F5F5] to-white">
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
                Как нас найти
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Расположение
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video bg-gradient-to-br from-[#50626C] to-[#8D9DA6] shadow-2xl overflow-hidden"
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
                  style={{ fontSize: '24px', fontWeight: 700 }}
                >
                  Интерактивная карта
                </div>
                <div
                  className="text-white/70"
                  style={{ fontSize: '16px', fontWeight: 400 }}
                >
                  г. Уфа, ул. ???
                </div>
              </div>
            </div>

            {/* Location pin */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-8 h-8 rounded-full bg-white">
                <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requisites */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#50626C]/5 border border-[#50626C]/10 mb-6">
              <span className="text-[#50626C]" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                ДОКУМЕНТЫ
              </span>
            </div>
            <h2
              className="text-[#50626C] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Реквизиты компании
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F5F5F5] border border-[#A7A9AC]/20" />

            <div className="relative p-10">
              <div className="space-y-6">
                {requisites.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b border-[#A7A9AC]/10 last:border-b-0"
                  >
                    <div
                      className="md:w-1/3 text-[#8D9DA6]"
                      style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="md:w-2/3 text-[#50626C]"
                      style={{ fontSize: '15px', fontWeight: 600 }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[#A7A9AC]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#595B5C]">
                  <FileText size={20} />
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>
                    Карточка предприятия
                  </span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#50626C] to-[#8D9DA6] text-white">
                  <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}>
                    PDF после утверждения
                  </span>
                  <FileText size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
