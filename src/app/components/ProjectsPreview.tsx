import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import gazpromLogo from '@/imports/clients/logo-gazprom-white.png';
import rosneftLogo from '@/imports/clients/a2ddf127393db4380ee610d7b9e31e66.jpg';
import lukoilLogo from '@/imports/clients/b3f61e122a.jpg';
import bashneftLogo from '@/imports/clients/580f14163611fefad60da78d5c9b904c.png';
import inkLogo from '@/imports/clients/big-catalog-16344744171.jpg';
import sibneftegazLogo from '@/imports/clients/sibneftegaz_logo.png';
import norilsktransgazLogo from '@/imports/clients/381564_1.png';
import kondensatLogo from '@/imports/clients/Untitled-1.jpg';
import flare1 from '@/imports/tz-photos/project-flare-1.webp';
import flare2 from '@/imports/tz-photos/project-flare-2.webp';
import flare3 from '@/imports/tz-photos/project-flare-3.webp';
import flare4 from '@/imports/tz-photos/project-flare-4.webp';
import flare5 from '@/imports/tz-photos/project-flare-5.webp';
import insert1 from '@/imports/tz-photos/project-insert-1.webp';
import insert2 from '@/imports/tz-photos/project-insert-2.webp';
import mixer1 from '@/imports/tz-photos/project-mixer-1.webp';
import mixer2 from '@/imports/tz-photos/project-mixer-2.webp';
import screen1 from '@/imports/tz-photos/project-screen-1.webp';
import screen2 from '@/imports/tz-photos/project-screen-2.webp';
import screen3 from '@/imports/tz-photos/project-screen-3.webp';

const clients = [
  { name: 'Газпром', logo: gazpromLogo },
  { name: 'Роснефть', logo: rosneftLogo },
  { name: 'ЛУКОЙЛ', logo: lukoilLogo },
  { name: 'Башнефть', logo: bashneftLogo },
  { name: 'Иркутская нефтяная компания', logo: inkLogo },
  { name: 'Сибнефтегаз', logo: sibneftegazLogo },
  { name: 'Норильсктрансгаз', logo: norilsktransgazLogo },
  { name: 'Конденсат', logo: kondensatLogo },
];

const projects = [
  {
    title: 'Факельные установки',
    images: [flare1, flare2, flare3, flare4, flare5],
    description: 'Предназначены для сброса и сжигания горючего газа и жидкостей на нефтегазодобывающих, нефтеперерабатывающих и химических предприятиях.',
    clients: 'АО «Конденсат», ООО «НПП «Нефтегазинжиниринг», ООО «Башнефть-Полюс», ИНК, «Норильсктрансгаз», «ЛУКОЙЛ-ПЕРМЬ», СИБУР и другие.',
  },
  {
    title: 'Монтажные вставки',
    images: [insert1, insert2],
    description: 'Узлы технологических трубопроводов для комплектации, сборки и реконструкции трубопроводов DN 50–DN 1200.',
    clients: 'ООО «Газпромкомплектация» — газоперерабатывающий комплекс в составе комплекса переработки этансодержащего газа в Усть-Луге.',
  },
  {
    title: 'Смесители',
    images: [mixer1, mixer2],
    description: 'Оборудование для смешивания основного конденсата в составе технологических систем энергетических объектов.',
    clients: 'ОАО «НПО ЦКТИ», АО «КОНЦЕРН ТИТАН-2».',
  },
  {
    title: 'Ширмовые блоки',
    images: [screen1, screen2, screen3],
    description: 'Элементы паровых стационарных котлов, предназначенные для перегрева поступающего в котёл насыщенного пара.',
    clients: 'ООО «Башкирская генерирующая компания».',
  },
];

export function ProjectsPreview() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const maxSlides = Math.max(...projects.map((project) => project.images.length));
    const timer = window.setInterval(() => setSlideIndex((current) => (current + 1) % maxSlides), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#263740] px-6 py-20 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="pointer-events-none absolute -left-[12%] top-[8%] h-[70%] w-[58%] -skew-x-[24deg] border-r border-white/10 bg-white/[0.025]" />
      <div className="pointer-events-none absolute -right-[20%] bottom-[-15%] h-[55%] w-[70%] -skew-x-[24deg] border-l border-[#50626c]/35 bg-[#50626c]/[0.08]" />
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#91a0a8]"><span className="h-px w-14 bg-[#50626c]" />Практика и опыт</div>
            <h2 className="max-w-4xl text-[clamp(2.25rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">Реализованные проекты</h2>
          </div>
          <p className="max-w-md border-l border-white/20 pl-5 text-base leading-relaxed text-white/65">Поставки оборудования для ведущих компаний России и стран СНГ</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {projects.map((project, index) => (
            <motion.article key={project.title} layout className={`group relative min-h-[460px] overflow-hidden bg-[#50626c] lg:min-h-[520px] ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
              <AnimatePresence mode="wait">
                <motion.img key={`${index}-${slideIndex}`} src={project.images[slideIndex % project.images.length]} alt="" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]" />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#17262e]/95 via-[#263740]/15 to-[#263740]/15" />
              <div className="absolute -right-24 top-0 h-full w-64 -skew-x-[20deg] bg-[#50626c]/0 transition-colors duration-500 group-hover:bg-[#50626c]/25" />
              <div className="absolute left-7 top-7 text-5xl font-light tracking-[-0.05em] text-white/25 sm:left-9 sm:top-9">0{index + 1}</div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 sm:p-9">
                <div><div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a7b1b6]">Промышленное оборудование</div><h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3></div>
                <button type="button" onClick={() => setActiveProject(index)} aria-label={`Подробнее: ${project.title}`} className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#50626c] text-white transition hover:bg-white hover:text-[#50626c]">
                  <ArrowUpRight size={22} />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#71838c] transition-transform duration-[5000ms]" style={{ transform: `scaleX(${((slideIndex % project.images.length) + 1) / project.images.length})` }} />
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {activeProject !== null && (
            <motion.div className="fixed inset-0 z-[80]" initial={false} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <button type="button" aria-label="Закрыть описание проекта" onClick={() => setActiveProject(null)} className="absolute inset-0 h-full w-full cursor-default bg-[#17242b]/70 backdrop-blur-md" />
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-label={projects[activeProject].title}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-y-0 right-0 flex w-full max-w-[720px] flex-col overflow-y-auto bg-[#f3f5f5] shadow-[-30px_0_80px_rgba(20,34,41,0.35)] sm:w-[72vw] lg:w-[52vw]"
              >
                <div className="relative min-h-[40vh] overflow-hidden bg-[#50626c]">
                  <img src={projects[activeProject].images[slideIndex % projects[activeProject].images.length]} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#263740]/85 via-transparent to-[#263740]/20" />
                  <button type="button" onClick={() => setActiveProject(null)} aria-label="Закрыть описание" className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-white/40 bg-[#263740]/35 text-white backdrop-blur-md transition hover:bg-white hover:text-[#50626c]"><X size={22} /></button>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Реализованный проект</div>
                    <h3 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">{projects[activeProject].title}</h3>
                  </div>
                </div>
                <div className="flex-1 p-7 text-[#40515a] sm:p-10">
                  <div className="mb-8 h-px w-24 bg-gradient-to-r from-[#50626c] to-[#a7b1b6]" />
                  <p className="mb-9 text-lg leading-relaxed">{projects[activeProject].description}</p>
                  <div className="border-l-2 border-[#50626c]/45 pl-5">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#7d8a90]">Заказчики</div>
                    <p className="text-sm leading-relaxed text-[#5f6f76]">{projects[activeProject].clients}</p>
                  </div>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative mt-20 border-t border-white/15 pt-9">
          <div className="mb-8 flex items-end justify-between gap-6"><div><div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#91a0a8]">Нам доверяют</div><h3 className="text-3xl font-semibold text-white sm:text-4xl">Заказчики</h3></div><div className="hidden text-right text-sm leading-relaxed text-white/45 sm:block">Российские и международные<br />промышленные компании</div></div>
          <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {clients.map((client) => (
              <div key={client.name} className="group relative flex h-32 w-full items-center justify-center overflow-hidden border border-white/10 bg-white px-8 grayscale transition duration-500 hover:-translate-y-1 hover:border-[#71838c]/80 hover:grayscale-0 sm:h-36 xl:h-40">
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#50626c] transition-all duration-500 group-hover:w-full" />
                <img src={client.logo} alt={client.name} className="max-h-20 w-full max-w-72 object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-24" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
