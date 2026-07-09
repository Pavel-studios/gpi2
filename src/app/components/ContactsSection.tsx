import { motion } from 'motion/react';
import { Building2, Clock, Download, Mail, MapPin } from 'lucide-react';

import contactsHero from '@/imports/tz-photos/contacts-hero-exact.webp';
import contactsEntrance from '@/imports/contacts/contacts-entrance.webp';
import contactsProduction from '@/imports/contacts/contacts-production.webp';
import { FadingPattern } from './ui/fading-pattern';

const legalAddress =
  '450069, Республика Башкортостан, г.о. город Уфа, г. Уфа, ул. Производственная, дом 5 корпус 1';

const postalAddress = '450005, Республика Башкортостан, г. Уфа, ул. Мингажева, дом 129';

const email = 'mail@gpiufa.ru';

const contactCards = [
  {
    icon: MapPin,
    label: 'Почтовый адрес',
    value: postalAddress,
    note: 'Адрес для корреспонденции и документооборота',
  },
  {
    icon: Building2,
    label: 'Производственная площадка',
    value: legalAddress,
    note: 'Юридический адрес и адрес производственной площадки совпадают',
  },
  {
    icon: Mail,
    label: 'Электронная почта',
    value: email,
    note: 'Единый адрес для входящих обращений',
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Пт: 09:00–18:00',
    note: 'Выходные: суббота и воскресенье',
  },
];

const locations = [
  {
    title: 'Почтовый адрес',
    address: postalAddress,
    description: 'Адрес для входящей корреспонденции, документов и деловой коммуникации.',
    image: contactsEntrance,
  },
  {
    title: 'Производственная площадка',
    address: legalAddress,
    description: 'Производственные участки, сборка, контроль качества и испытания оборудования.',
    image: contactsProduction,
  },
];

const requisites = [
  ['Полное наименование', 'Общество с ограниченной ответственностью «Газ-Проект Инжиниринг»'],
  ['Сокращенное наименование', 'ООО «Газ-Проект Инжиниринг»'],
  ['Юридический адрес', legalAddress],
  ['Адрес производственной площадки', legalAddress],
  ['Почтовый адрес', postalAddress],
  ['Основной вид деятельности (ОКВЭД)', '28.99.9 Производство оборудования специального назначения, не включенного в другие группировки.'],
  ['ОГРН', '1030204635670'],
  ['ИНН / КПП', '0278096584 / 027301001'],
  ['ОКПО', '15303901'],
  ['ОКАТО', '80401370000'],
  ['ОКФС', '16'],
  ['ОКОПФ', '12300'],
  ['Регистрирующий орган', 'Межрайонная инспекция Федеральной налоговой службы № 39 по Республике Башкортостан'],
  [
    'ИФНС',
    'Межрайонная инспекция Федеральной налоговой службы №31 по Республике Башкортостан, Республика Башкортостан, г. Уфа, ул. Ульяновых, д. 18, тел.: +7 (347) 242-02-45',
  ],
  ['Главный бухгалтер', 'Кунаккужина Анастасия Владимировна'],
  ['Генеральный директор', 'Хабибулин Михаил Сергеевич'],
  ['Электронная почта', email],
];

const bankDetails = [
  ['Банк', 'Филиал «Корпоративный» ПАО «Совкомбанк»'],
  ['Расчетный счет', '40702810512010932864'],
  ['Корреспондентский счет', '30101810445250000360 в ГУ Банка России по ЦФО'],
  ['БИК', '044525360'],
  ['ИНН / КПП банка', '4401116480 / 770343003'],
  ['ОГРН банка', '1144400000425'],
  ['Адрес банка', '119991, г. Москва, ул. Вавилова, д. 24'],
];

export function ContactsSection() {
  return (
    <div className="bg-[#F3F5F5]">
      <section className="relative min-h-[680px] overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <img
          src={contactsHero}
          alt="Здание Газ-Проект Инжиниринг"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/95 via-[#263740]/78 to-[#263740]/30" />
        <FadingPattern opacity="0.075" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F3F5F5] to-transparent" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1680px] items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                Контакты
              </span>
            </div>

            <h1 className="mb-7 max-w-3xl text-[clamp(42px,7vw,92px)] font-black leading-[0.95] tracking-[-0.06em] text-white">
              Как нас найти
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Адреса офиса и производственной площадки, единая почта для обращений и
              справочная информация по ООО «Газ-Проект Инжиниринг».
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-10 lg:px-10">
        <div className="mx-auto grid max-w-[1680px] gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="-mt-16 min-h-[260px] border border-white/70 bg-white/88 p-7 shadow-[0_24px_80px_rgba(38,55,64,0.12)] backdrop-blur-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center bg-[#263740] text-white">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8D9DA6]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#50626C]">
                  {card.label}
                </div>
                <div className="mb-4 whitespace-pre-line text-lg font-bold leading-snug text-[#263740]">
                  {card.value}
                </div>
                <p className="text-sm leading-6 text-[#595B5C]">{card.note}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1680px] gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="border border-[#A7A9AC]/25 bg-white p-8 shadow-[0_24px_80px_rgba(38,55,64,0.08)] md:p-10"
          >
            <div className="mb-6 inline-flex bg-[#263740]/5 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#50626C]">
                Две точки присутствия
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(32px,4vw,56px)] font-black leading-none tracking-[-0.045em] text-[#263740]">
              Офис и производство в Уфе
            </h2>

            <p className="mb-10 max-w-2xl text-base leading-8 text-[#595B5C]">
              В блоке ниже указаны адреса из карточки предприятия. Справа оставлена
              подготовленная область под будущую вставку интерактивной Яндекс.Карты.
            </p>

            <div className="space-y-4">
              {locations.map((location, index) => (
                <div
                  key={location.title}
                  className="group grid gap-5 border border-[#A7A9AC]/25 bg-[#F3F5F5] p-4 transition-colors duration-300 hover:border-[#50626C]/45 md:grid-cols-[160px_1fr]"
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="h-36 w-full object-cover md:h-full"
                  />
                  <div className="flex flex-col justify-center py-2">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center bg-[#263740] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#263740]">{location.title}</h3>
                    </div>
                    <div className="mb-3 flex items-start gap-2 text-[#50626C]">
                      <MapPin size={17} strokeWidth={1.8} className="mt-1 shrink-0" />
                      <span className="font-semibold leading-6">{location.address}</span>
                    </div>
                    <p className="text-sm leading-6 text-[#595B5C]">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative min-h-[640px] overflow-hidden border border-[#A7A9AC]/25 bg-white p-4 shadow-[0_30px_100px_rgba(38,55,64,0.12)]"
          >
            <div className="relative flex h-full min-h-[608px] items-center justify-center overflow-hidden border border-dashed border-[#8D9DA6]/55 bg-[#F3F5F5]">
              <div className="absolute inset-0 opacity-[0.65] [background-image:linear-gradient(#A7A9AC_1px,transparent_1px),linear-gradient(90deg,#A7A9AC_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(80,98,108,0.12),transparent_28%)]" />

              <div className="relative max-w-md px-6 text-center">
                <div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-full bg-white text-[#50626C] shadow-[0_18px_50px_rgba(38,55,64,0.12)]">
                  <MapPin size={34} strokeWidth={1.6} />
                </div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#8D9DA6]">
                  Место под Яндекс.Карту
                </div>
                <h3 className="mb-5 text-[clamp(28px,4vw,44px)] font-black leading-none tracking-[-0.045em] text-[#263740]">
                  Карта будет добавлена позже
                </h3>
                <p className="text-base leading-7 text-[#595B5C]">
                  Этот блок подготовлен под вставку интерактивной карты Яндекса. Достаточно
                  заменить содержимое заглушки на iframe или компонент карты.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-[1680px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="border border-[#A7A9AC]/25 bg-white p-8 shadow-[0_24px_80px_rgba(38,55,64,0.08)] md:p-10"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#50626C]">
                  Реквизиты компании
                </div>
                <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-none tracking-[-0.045em] text-[#263740]">
                  Карточка предприятия
                </h2>
              </div>
              <a
                href="/documents/company-card.docx"
                download
                className="hidden items-center justify-center gap-3 bg-[#263740] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#50626C] md:inline-flex"
              >
                <Download size={18} />
                Скачать карту предприятия
              </a>
            </div>

            <a
              href="/documents/company-card.docx"
              download
              className="mb-8 inline-flex w-full items-center justify-center gap-3 bg-[#263740] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#50626C] md:hidden"
            >
              <Download size={18} />
              Скачать карту предприятия
            </a>

            <div className="divide-y divide-[#A7A9AC]/20 border-y border-[#A7A9AC]/20">
              {requisites.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-5 md:grid-cols-[240px_1fr]">
                  <div className="text-xs font-bold uppercase tracking-[0.13em] text-[#8D9DA6]">
                    {label}
                  </div>
                  <div className="font-semibold leading-7 text-[#263740]">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#50626C]">
                Банковские реквизиты
              </div>
              <div className="divide-y divide-[#A7A9AC]/20 border-y border-[#A7A9AC]/20">
                {bankDetails.map(([label, value]) => (
                  <div key={label} className="grid gap-2 py-5 md:grid-cols-[240px_1fr]">
                    <div className="text-xs font-bold uppercase tracking-[0.13em] text-[#8D9DA6]">
                      {label}
                    </div>
                    <div className="font-semibold leading-7 text-[#263740]">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
