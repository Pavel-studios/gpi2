import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import gazpromLogo from '@/imports/clients/gazprom_logo.webp';
import gazpromKomplektLogo from '@/imports/clients/057_1-2-4.webp';
import rosneftLogo from '@/imports/clients/a2ddf127393db4380ee610d7b9e31e66.webp';
import lukoilLogo from '@/imports/clients/png-klev-club-fdy1-p-lukoil-png-1.webp';
import bashneftLogo from '@/imports/clients/580f14163611fefad60da78d5c9b904c.webp';
import inkLogo from '@/imports/clients/big-catalog-16344744171.webp';
import sibneftegazLogo from '@/imports/clients/sibneftegaz_logo.webp';
import norilsktransgazLogo from '@/imports/clients/381564_1.webp';
import kondensatLogo from '@/imports/clients/Untitled-1.webp';
import sinopecLogo from '@/imports/clients/index_img.webp';
import cktiLogo from '@/imports/clients/partner_5.webp';
import purneftegazLogo from '@/imports/clients/purneftegaz.webp';
import rnUvatLogo from '@/imports/clients/rn-uvatneftegaz.webp';
import siburLogo from '@/imports/clients/s1200.webp';
import transterminalLogo from '@/imports/clients/S_height.webp';
import flareN59A2258 from '@/imports/project-flares/N59A2258.webp';
import flare20260624 from '@/imports/project-flares/IMG_20260624_085003_835.webp';
import flareWA0029 from '@/imports/project-flares/IMG-20250217-WA0029.webp';
import flareWA0053 from '@/imports/project-flares/IMG-20250217-WA0053.webp';
import flareWA0073 from '@/imports/project-flares/IMG-20250217-WA0073.webp';
import flareWA0072 from '@/imports/project-flares/IMG-20250217-WA0072.webp';
import flare20241125 from '@/imports/project-flares/IMG_20241125_145750.webp';
import flare20230202Clean from '@/imports/project-flares/IMG_20230202_100926_clean.webp';
import pipelineN59A2333 from '@/imports/project-pipeline/N59A2333.webp';
import pipelineN59A2349 from '@/imports/project-pipeline/N59A2349-retouched.webp';
import pipelineN59A2356 from '@/imports/project-pipeline/N59A2356.webp';
import pipelineWA0038 from '@/imports/project-pipeline/IMG-20250731-WA0038.webp';
import pipelineWA0039 from '@/imports/project-pipeline/IMG-20250731-WA0039.webp';
import mixer1 from '@/imports/project-mixers/mixer-14-outpainted-clean.webp';
import mixer2 from '@/imports/tz-photos/project-mixer-2.webp';
import screen1 from '@/imports/tz-photos/project-screen-1.webp';
import screen2 from '@/imports/tz-photos/project-screen-2.webp';
import screen3 from '@/imports/tz-photos/project-screen-3.webp';
import screen4 from '@/imports/project-heat/IMG_20260805_081250_482.webp';

const clients = [
  { name: 'Газпром', logo: gazpromLogo },
  { name: 'Газпром комплектация', logo: gazpromKomplektLogo },
  { name: 'Роснефть', logo: rosneftLogo },
  { name: 'Башнефть', logo: bashneftLogo },
  { name: 'ЛУКОЙЛ', logo: lukoilLogo },
  { name: 'Sinopec', logo: sinopecLogo },
  { name: 'Иркутская нефтяная компания', logo: inkLogo },
  { name: 'Конденсат', logo: kondensatLogo },
  { name: 'НПО ЦКТИ', logo: cktiLogo },
  { name: 'Сибнефтегаз', logo: sibneftegazLogo },
  { name: 'Пурнефтегаз', logo: purneftegazLogo },
  { name: 'РН-Уватнефтегаз', logo: rnUvatLogo },
  { name: 'Норильсктрансгаз', logo: norilsktransgazLogo },
  { name: 'СИБУР', logo: siburLogo },
  { name: 'Транстерминал', logo: transterminalLogo },
];

type ProjectSlide = {
  images: string[];
  layout?: 'collage';
};

function getVisibleSlides(slides: ProjectSlide[], isMobile: boolean) {
  if (!isMobile) return slides;

  return slides.flatMap((slide) => (
    slide.layout === 'collage'
      ? slide.images.map((image) => ({ images: [image] }))
      : [slide]
  ));
}

const flareSlides: ProjectSlide[] = [
  { images: [flareWA0073, flareWA0029, flareWA0072], layout: 'collage' },
  { images: [flareN59A2258] },
  { images: [flare20260624] },
  { images: [flareWA0053] },
  { images: [flare20241125] },
  { images: [flare20230202Clean] },
];

const pipelineSlides: ProjectSlide[] = [
  { images: [pipelineN59A2356, pipelineN59A2349, pipelineN59A2333], layout: 'collage' },
  { images: [pipelineWA0038] },
  { images: [pipelineWA0039] },
];

const projects = [
  {
    title: 'Факельные установки',
    slides: flareSlides,
    description: 'Факельные установки предназначены для сброса и сжигания горючего газа и жидкостей. Применяются на нефтегазодобывающих, нефтеперерабатывающих и химических предприятиях для нейтрализации постоянных, периодических и аварийных сбросов, предотвращая их выброс в атмосферу.',
    clients: 'АО «Конденсат» (Республика Казахстан), ООО «НПП «Нефтегазинжиниринг», ООО «Башнефть-Полюс», ООО «Иркутская нефтяная компания», АО «Норильсктрансгаз», ООО «ЛУКОЙЛ-ПЕРМЬ», ООО «Сибур» и другие.',
  },
  {
    title: 'Элементы трубопроводов',
    slides: pipelineSlides,
    description: 'Являются узлами технологических трубопроводов, предназначенных для комплектации, сборки и реконструкции технологических трубопроводов DN 50 – DN 1400.',
    clients: 'ООО «Газпромкомплектация» для газоперерабатывающего комплекса в составе комплекса переработки этансодержащего газа в районе посёлка Усть-Луга.',
  },
  {
    title: 'Смесители',
    images: [mixer1, mixer2],
    slides: [{ images: [mixer1] }, { images: [mixer2] }] as ProjectSlide[],
    description: 'Предназначен для смешивания основного конденсата. Устанавливается в помещении машинного зала на трубопроводе основного конденсата между ПНД-5 и питательным насосом первой ступени (ПЭН-1) перед подводом силовой воды от ПГТН турбоустановки К-306-15,7/50 с реакторной установкой БРЕСТ-ОД-300.',
    clients: 'ОАО «НПО ЦКТИ», АО «КОНЦЕРН ТИТАН-2».',
  },
  {
    title: 'Поверхности нагрева',
    images: [screen1, screen2, screen3, screen4],
    slides: [{ images: [screen1] }, { images: [screen2] }, { images: [screen3] }, { images: [screen4] }] as ProjectSlide[],
    description: 'Являются элементом паровых стационарных котлов. Предназначены для перегрева поступающего в котел насыщенного пара.',
    clients: 'ООО «Башкирская генерирующая компания».',
  },
];

function ProjectSlideMedia({ slide, alt }: { slide: ProjectSlide; alt: string }) {
  if (slide.layout !== 'collage') {
    return <img src={slide.images[0]} alt={alt} className="absolute inset-0 h-full w-full object-cover" />;
  }

  return (
    <div
      className="absolute inset-0 flex snap-x snap-mandatory overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-hidden"
      style={{ scrollbarWidth: 'none', gridTemplateColumns: `repeat(${slide.images.length}, minmax(0, 1fr))` }}
      aria-label={`${alt}: вертикальные фотографии`}
    >
      {slide.images.map((image, imageIndex) => (
        <div key={image} className="relative h-full min-w-full snap-center overflow-hidden border-r-2 border-[#263740] last:border-r-0 lg:min-w-0">
          <img src={image} alt={`${alt}, фото ${imageIndex + 1}`} className="h-full w-full object-cover object-center" />
        </div>
      ))}
    </div>
  );
}

export function ProjectsPreview() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 1023px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const updateViewportMode = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateViewportMode);
    return () => mediaQuery.removeEventListener('change', updateViewportMode);
  }, []);

  useEffect(() => {
    const maxSlides = Math.max(...projects.map((project) => getVisibleSlides(project.slides, isMobile).length));
    setSlideIndex((current) => current % maxSlides);
    const timer = window.setInterval(() => setSlideIndex((current) => (current + 1) % maxSlides), 5000);
    return () => window.clearInterval(timer);
  }, [isMobile]);

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
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {projects.map((project, index) => {
            const visibleSlides = getVisibleSlides(project.slides, isMobile);
            return (
            <motion.article key={project.title} layout className={`group relative min-h-[460px] overflow-hidden bg-[#50626c] lg:min-h-[520px] ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
              <AnimatePresence mode="wait">
                <motion.div key={`${index}-${slideIndex}`} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 transition-transform duration-1000 group-hover:scale-[1.025]">
                  <ProjectSlideMedia slide={visibleSlides[slideIndex % visibleSlides.length]} alt={project.title} />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#17262e]/95 via-[#263740]/15 to-[#263740]/15" />
              <div className="absolute -right-24 top-0 h-full w-64 -skew-x-[20deg] bg-[#50626c]/0 transition-colors duration-500 group-hover:bg-[#50626c]/25" />
              <div className="absolute left-7 top-7 text-5xl font-light tracking-[-0.05em] text-white/25 sm:left-9 sm:top-9">0{index + 1}</div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 sm:p-9">
                <div><h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3></div>
                <button type="button" onClick={() => setActiveProject(index)} aria-label={`Подробнее: ${project.title}`} className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#8D9DA6] text-white transition hover:bg-white hover:text-[#50626c]">
                  <ArrowUpRight size={22} />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#71838c] transition-transform duration-[5000ms]" style={{ transform: `scaleX(${((slideIndex % visibleSlides.length) + 1) / visibleSlides.length})` }} />
            </motion.article>
            );
          })}
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
                  <ProjectSlideMedia
                    slide={getVisibleSlides(projects[activeProject].slides, isMobile)[slideIndex % getVisibleSlides(projects[activeProject].slides, isMobile).length]}
                    alt={projects[activeProject].title}
                  />
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
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative mt-20 border-t border-white/15 pt-9">
          <div className="mb-8 flex items-end justify-between gap-6"><div><div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#91a0a8]">Нам доверяют</div><h3 className="text-3xl font-semibold text-white sm:text-4xl">Заказчики</h3></div><div className="hidden text-right text-sm leading-relaxed text-white/45 sm:block">Российские и международные<br />промышленные компании</div></div>
          <div className="grid grid-cols-2 items-stretch gap-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div key={client.name} className="group relative flex h-28 w-full items-center justify-center overflow-hidden border border-white/10 bg-white px-5 transition duration-500 hover:-translate-y-1 hover:border-[#71838c]/80 sm:h-32 lg:h-34 xl:h-36">
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#50626c] transition-all duration-500 group-hover:w-full" />
                <img src={client.logo} alt={client.name} className="max-h-16 w-full max-w-56 object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-20 lg:max-h-24" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
