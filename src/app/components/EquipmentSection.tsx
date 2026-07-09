import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import pattern from '@/imports/pattern.svg';
import flareImage from '@/imports/tz-photos/project-flare-1.webp';
import insertImage from '@/imports/tz-photos/project-insert-1.webp';
import mixerImage from '@/imports/tz-photos/project-mixer-1.webp';
import screenImage from '@/imports/tz-photos/project-screen-1.webp';
import productionImage from '@/imports/tz-photos/prod-machining-1.webp';
import weldingImage from '@/imports/tz-photos/prod-welding-1.webp';
import heroPoster from '@/imports/tz-photos/adv-production.webp';
import { FadingPattern } from './ui/fading-pattern';

const publicBase = import.meta.env.BASE_URL.replace(/\/$/, '');
const heroVideo = `${publicBase}/media/equipment-hero-n59a2261.mp4`;

const equipment = [
  {
    number: '01',
    name: 'Факельные установки',
    description: 'Оборудование для сброса и сжигания горючих газов и жидкостей.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Расход сбросных газов: по технологическим данным заказчика', 'Рабочее давление: по проекту', 'Температура среды: по проекту', 'Материалы: углеродистые и легированные стали по условиям эксплуатации'],
    image: flareImage,
  },
  {
    number: '02',
    name: 'Монтажные вставки',
    description: 'Узлы технологических трубопроводов для комплектации, сборки и реконструкции.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Условный диаметр: DN 50–DN 1200', 'Рабочее давление: по проектной документации', 'Присоединение: фланцевое / сварное', 'Материалы: по классу трубопровода и параметрам среды'],
    image: insertImage,
  },
  {
    number: '03',
    name: 'Смесители',
    description: 'Оборудование для смешивания технологических потоков и основного конденсата.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Производительность: по технологической схеме', 'Рабочее давление: по проекту', 'Температура среды: по проекту', 'Материалы: подбираются под состав и агрессивность среды'],
    image: mixerImage,
  },
  {
    number: '04',
    name: 'Ширмовые блоки',
    description: 'Элементы паровых стационарных котлов для перегрева насыщенного пара.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Рабочая среда: насыщенный / перегретый пар', 'Температура пара: по тепловой схеме котла', 'Давление пара: по проекту котельного агрегата', 'Материалы труб: жаропрочные стали по расчётным параметрам'],
    image: screenImage,
  },
  {
    number: '05',
    name: 'Емкостное оборудование',
    description: 'Аппараты и сосуды, изготавливаемые по требованиям технического проекта.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Объём: по техническому заданию', 'Рабочее давление: по расчёту прочности', 'Температура эксплуатации: по проекту', 'Материалы корпуса: углеродистые, низколегированные или нержавеющие стали'],
    image: productionImage,
  },
  {
    number: '06',
    name: 'Теплообменное оборудование',
    description: 'Оборудование для теплообменных процессов в промышленных установках.',
    industries: 'Нефтегазовая, энергетика',
    parameters: ['Тепловая мощность: по технологическому расчёту', 'Рабочее давление: по стороне трубного и межтрубного пространства', 'Температура сред: по проекту', 'Материалы: по параметрам теплоносителей и коррозионной активности'],
    image: weldingImage,
  },
];

export function EquipmentSection() {
  return (
    <div className="bg-[#eef0f1]">
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#263740]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#263740]/82 via-[#263740]/46 to-[#263740]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/78 via-transparent to-transparent" />
        <div className="absolute right-[8vw] top-0 hidden h-full w-[22vw] skew-x-[-18deg] bg-white/[0.07] lg:block" />
        <div className="absolute right-[19vw] top-0 hidden h-full w-[10vw] skew-x-[-18deg] bg-white/[0.04] lg:block" />

        <FadingPattern opacity="0.075" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1920px] items-end px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="mb-8 inline-flex border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/76 backdrop-blur-md">
              Оборудование
            </div>
            <h1
              className="max-w-5xl text-white"
              style={{
                fontSize: 'clamp(46px, 8vw, 118px)',
                fontWeight: 800,
                letterSpacing: '-0.07em',
                lineHeight: 0.92,
              }}
            >
              Поставляемое
              <span className="block text-white/62">оборудование</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,98,108,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(80,98,108,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div
          className="absolute -left-28 top-20 h-[560px] w-[560px] opacity-[0.055]"
          style={{
            backgroundColor: '#263740',
            maskImage: `url(${pattern})`,
            maskSize: '170px 170px',
            WebkitMaskImage: `url(${pattern})`,
            WebkitMaskSize: '170px 170px',
          }}
        />
        <div className="absolute right-0 top-0 h-full w-[18vw] skew-x-[-16deg] bg-[#50626c]/8" />

        <div className="relative mx-auto max-w-[1680px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#50626c]">
                Каталог
              </div>
              <h2
                className="max-w-3xl text-[#263740]"
                style={{
                  fontSize: 'clamp(36px, 5.2vw, 74px)',
                  fontWeight: 800,
                  letterSpacing: '-0.06em',
                  lineHeight: 0.96,
                }}
              >
                Карточки производимого оборудования
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className="group relative overflow-hidden border border-[#50626c]/12 bg-white shadow-[0_24px_80px_rgba(38,55,64,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#50626c]/28"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#263740]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-hover:rotate-[1.5deg]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17252c]/82 via-[#263740]/18 to-transparent" />
                  <div className="absolute left-5 top-5 text-sm font-black tracking-[0.18em] text-white/62">
                    {item.number}
                  </div>
                  <ArrowUpRight className="absolute right-5 top-5 text-white/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="relative p-7">
                  <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.045em] text-[#263740]">
                    {item.name}
                  </h3>
                  <p className="mt-4 min-h-[72px] text-[15px] leading-6 text-[#595b5c]">
                    {item.description}
                  </p>
                  <div className="mt-6 space-y-2 border-y border-[#50626c]/10 py-5">
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50626c]/65">
                      Ключевые параметры
                    </div>
                    {item.parameters.map((parameter) => (
                      <div key={parameter} className="flex gap-3 text-sm leading-5 text-[#263740]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50626c]" />
                        <span>{parameter}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-[#50626c]/12 pt-5">
                    <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#50626c]/65">
                      Отрасли
                    </div>
                    <div className="text-sm font-semibold text-[#263740]">{item.industries}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
