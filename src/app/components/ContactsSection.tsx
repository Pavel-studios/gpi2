import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Building2, Clock, Download, Eye, Mail, MapPin, Phone } from 'lucide-react';

import contactsHero from '@/imports/tz-photos/contacts-hero-exact.webp';
import contactsPostal from '@/imports/contacts/contacts-postal-n59a2606.webp';
import contactsProduction from '@/imports/contacts/contacts-production.webp';
import { FadingPattern } from './ui/fading-pattern';

const legalAddress =
  '450069, Республика Башкортостан, г.\u00A0Уфа, ул.\u00A0Производственная, дом\u00A05, корпус\u00A01';

const postalAddress = '450005, Республика Башкортостан, г.\u00A0Уфа, ул.\u00A0Мингажева, дом\u00A0129';

const email = 'mail@gpiufa.ru';
const phone = '+7\u00A0(347)\u00A0293-43-23';
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const mapCoordinates_1: [number, number] = [54.769206, 56.243924];
const mapCoordinates_2: [number, number] = [54.736306, 55.971250];
const mapCoordinatesCenter: [number, number] = [54.748996, 56.093309];

const markerSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80">
    <filter id="shadow" x="-50%" y="-30%" width="200%" height="200%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#263740" flood-opacity=".34"/>
    </filter>
    <path filter="url(#shadow)" d="M32 3C16.5 3 4 15.5 4 31c0 21.2 28 45 28 45s28-23.8 28-45C60 15.5 47.5 3 32 3Z" fill="#263740" stroke="#fff" stroke-width="4"/>
    <circle cx="32" cy="31" r="11" fill="none" stroke="#fff" stroke-width="4"/>
    <circle cx="32" cy="31" r="3.5" fill="#fff"/>
  </svg>
`);

function YandexMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;
    let cancelled = false;

    const createMap = () => {
      const ymaps = (window as any).ymaps;
      if (!ymaps || !containerRef.current) return;

      ymaps.ready(() => {
        if (cancelled || !containerRef.current) return;

        map = new ymaps.Map(
          containerRef.current,
          {
            center: mapCoordinatesCenter,
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl'],
          },
          { suppressMapOpenBlock: true },
        );

        const markerLayout_1 = ymaps.templateLayoutFactory.createClass(`
          <div style="position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);filter:drop-shadow(0 10px 16px rgba(38,55,64,.25));">
            <div style="width:250px;margin-bottom:8px;padding:12px 14px;background:#263740;color:#fff;box-sizing:border-box;">
              <div style="margin-bottom:5px;font-size:9px;line-height:1.25;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.58);">Производственная площадка</div>
              <div style="font-size:12px;line-height:1.45;font-weight:600;">г.&nbsp;Уфа, ул.&nbsp;Производственная, дом&nbsp;5, корпус&nbsp;1</div>
            </div>
            <img src="data:image/svg+xml;charset=UTF-8,${markerSvg}" width="32" height="40" alt="" style="display:block;width:32px;height:40px;" />
          </div>
        `);
        const markerLayout_2 = ymaps.templateLayoutFactory.createClass(`
          <div style="position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);filter:drop-shadow(0 10px 16px rgba(38,55,64,.25));">
            <div style="width:250px;margin-bottom:8px;padding:12px 14px;background:#263740;color:#fff;box-sizing:border-box;">
              <div style="margin-bottom:5px;font-size:9px;line-height:1.25;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.58);">Почтовый адрес</div>
              <div style="font-size:12px;line-height:1.45;font-weight:600;">г.&nbsp;Уфа, ул.&nbsp;Мингажева, дом&nbsp;129</div>
            </div>
            <img src="data:image/svg+xml;charset=UTF-8,${markerSvg}" width="32" height="40" alt="" style="display:block;width:32px;height:40px;" />
          </div>
        `);

        const placemark_1 = new ymaps.Placemark(
          mapCoordinates_1,
          {
            hintContent: 'Газ-Проект Инжиниринг',
            balloonContentHeader: 'Газ-Проект Инжиниринг',
            balloonContentBody: 'г. Уфа, ул. Производственная, дом 5, корпус 1',
          },
          {
            iconLayout: markerLayout_1,
            interactivityModel: 'default#transparent',
            hasBalloon: false,
            openBalloonOnClick: false,
            cursor: 'default',
            iconShape: {
              type: 'Rectangle',
              coordinates: [[-125, -112], [125, 0]],
            },
          },
        );
        const placemark_2 = new ymaps.Placemark(
          mapCoordinates_2,
          {
            hintContent: 'Газ-Проект Инжиниринг',
            balloonContentHeader: 'Газ-Проект Инжиниринг',
            balloonContentBody: 'г. Уфа, ул. Мингажева, дом 129',
          },
          {
            iconLayout: markerLayout_2,
            interactivityModel: 'default#transparent',
            hasBalloon: false,
            openBalloonOnClick: false,
            cursor: 'default',
            iconShape: {
              type: 'Rectangle',
              coordinates: [[-125, -112], [125, 0]],
            },
          },
        );

        map.geoObjects.add(placemark_1);
        map.geoObjects.add(placemark_2);
      });
    };

    const existingScript = document.querySelector<HTMLScriptElement>('#yandex-maps-api');
    if ((window as any).ymaps) {
      createMap();
    } else if (existingScript) {
      existingScript.addEventListener('load', createMap, { once: true });
    } else {
      const script = document.createElement('script');
      script.id = 'yandex-maps-api';
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.addEventListener('load', createMap, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      existingScript?.removeEventListener('load', createMap);
      map?.destroy();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-label="Яндекс.Карта производственной площадки" />;
}

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
    note: `Телефон: ${phone}`,
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Пт: 08:00–17:00',
    note: 'Выходные: суббота и воскресенье',
  },
];

const locations = [
  {
    title: 'Почтовый адрес',
    address: postalAddress,
    description: 'Адрес для входящей корреспонденции, документов и деловой коммуникации.',
    image: contactsPostal,
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
      <section className="relative min-h-[100svh] overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <video
          src={`${base}/media/contacts-hero.mp4`}
          poster={contactsHero}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/95 via-[#263740]/78 to-[#263740]/30" />
        <FadingPattern opacity="0.075" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F3F5F5] to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-12rem)] max-w-[1680px] items-end">
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

            <h1 className="mb-7 max-w-4xl text-[clamp(48px,7vw,112px)] font-black leading-[0.92] tracking-[-0.06em] text-white">
              Как с&nbsp;нами связаться
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Офис и&nbsp;производственная площадка, карта предприятия, связь
              с&nbsp;потребителем.
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
                {card.label === 'Электронная почта' && (
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#50626C] transition-colors hover:text-[#263740]"
                  >
                    <Phone size={16} strokeWidth={1.8} />
                    {phone}
                  </a>
                )}
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
            <div className="mb-6 flex items-center gap-4 text-[#50626C]">
              <span className="h-px w-12 bg-current opacity-50" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Две точки присутствия
              </span>
            </div>

            <h2 className="mb-6 text-[clamp(32px,4vw,56px)] font-black leading-none tracking-[-0.045em] text-[#263740]">
              Офис и&nbsp;производство в&nbsp;Уфе
            </h2>

            <div className="space-y-4">
              {locations.map((location, index) => (
                <div
                  key={location.title}
                  className="group grid gap-5 border border-[#A7A9AC]/25 bg-[#F3F5F5] p-4 transition-colors duration-300 hover:border-[#50626C]/45 md:grid-cols-[160px_1fr]"
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="h-36 w-full bg-white object-contain md:h-full"
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
            <div className="relative h-full min-h-[608px] overflow-hidden bg-[#E7EBED]">
              <YandexMap />

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
            <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row">
              <div>
                <div className="mb-4 flex items-center gap-4 text-[#50626C]">
                  <span className="h-px w-12 bg-current opacity-50" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Реквизиты компании
                  </span>
                </div>
                <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-none tracking-[-0.045em] text-[#263740]">
                  Карта предприятия
                </h2>
              </div>
              <a
                href={`${base}/documents/company-card.docx`}
                download
                className="inline-flex items-center justify-center gap-3 bg-[#263740] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#50626C]"
              >
                <Download size={18} />
                Скачать карту предприятия
              </a>
            </div>

            {/* <div className="divide-y divide-[#A7A9AC]/20 border-y border-[#A7A9AC]/20">
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
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-8 border border-[#A7A9AC]/25 bg-white p-8 shadow-[0_24px_80px_rgba(38,55,64,0.08)] md:p-10"
          >
            <div className="mb-8 flex items-center gap-4 text-[#50626C]">
              <span className="h-px w-12 bg-current opacity-50" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Связь с&nbsp;потребителями
              </span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <article className="flex min-h-44 flex-col justify-between border border-[#A7A9AC]/25 bg-[#F3F5F5] p-6 md:p-8">
                <h3 className="mb-8 text-2xl font-black leading-tight tracking-[-0.025em] text-[#263740]">
                  Политика в&nbsp;области качества
                </h3>
                <a href={`${base}/documents/quality-policy.pdf`} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 bg-[#263740] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#50626C]">
                  <Eye size={18} /> Посмотреть
                </a>
              </article>

              <article className="flex min-h-44 flex-col justify-between border border-[#A7A9AC]/25 bg-[#F3F5F5] p-6 md:p-8">
                <h3 className="mb-8 text-2xl font-black leading-tight tracking-[-0.025em] text-[#263740]">
                  Лист оценки удовлетворенности потребителя
                </h3>
                <a href={`${base}/documents/customer-satisfaction-sheet.docx`} download className="inline-flex w-fit items-center gap-3 bg-[#263740] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#50626C]">
                  <Download size={18} /> Скачать лист оценки
                </a>
              </article>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
