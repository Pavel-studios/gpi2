import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import gazpromLogo from '@/imports/clients/logo-gazprom-white.png';
import gazpromNoyabrskLogo from '@/imports/clients/4eba501e-7995-7637-b5e7-5b1bc43f685a.jpg';
import gazpromSalavatLogo from '@/imports/clients/logo_gnhs_rus.png';
import rosneftLogo from '@/imports/clients/a2ddf127393db4380ee610d7b9e31e66.jpg';
import rnSnabzhenieLogo from '@/imports/clients/images.jpg';
import rnYuganskLogo from '@/imports/clients/668124.png';
import rnPurneftegazLogo from '@/imports/clients/purneftegaz.jpg';
import rnUvatLogo from '@/imports/clients/rn-uvatneftegaz.jpg';
import lukoilLogo from '@/imports/clients/b3f61e122a.jpg';
import lukoilKomiLogo from '@/imports/clients/unnamed-3.jpg';
import bashneftLogo from '@/imports/clients/580f14163611fefad60da78d5c9b904c.png';
import vankorneftLogo from '@/imports/clients/6e13b810-9462-4f09-bb81-8a24f905ae3c.png';
import inkLogo from '@/imports/clients/big-catalog-16344744171.webp';
import sibneftegazLogo from '@/imports/clients/sibneftegaz_logo.png';
import norilsktransgazLogo from '@/imports/clients/381564_1.png';
import oznaLogo from '@/imports/clients/medium_193ea5be318e4658a7571d32a2c3b966.png';
import orskLogo from '@/imports/clients/7fca05_dd235cf2b7bf43a3a74c46428ff851a3~mv2.png';
import salavatneftemashLogo from '@/imports/clients/21.jpg';
import kondensatLogo from '@/imports/clients/Untitled-1.jpg';
import technohimLogo from '@/imports/clients/1089297.webp';
import elprommashLogo from '@/imports/clients/elprommash.gif';
import gspLogo from '@/imports/clients/057_1-2-4.png';
import hydrodynamicsLogo from '@/imports/clients/44771315.e7e820nb9w.W215.jpg';
import uraltekhnostroyLogo from '@/imports/clients/ooo-korporacija-uraltekhnostroj-270f07c33cbe1f6b451367798bc1bcd5.png';

export function ProjectsPreview() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const clients = [
    { name: 'Газпром', logo: gazpromLogo },
    { name: 'Газпром добыча Ноябрьск', logo: gazpromNoyabrskLogo },
    { name: 'Газпром нефтехим Салават', logo: gazpromSalavatLogo },
    { name: 'Роснефть', logo: rosneftLogo },
    { name: 'РН-Снабжение', logo: rnSnabzhenieLogo },
    { name: 'РН-Юганскнефтегаз', logo: rnYuganskLogo },
    { name: 'РН-Пурнефтегаз', logo: rnPurneftegazLogo },
    { name: 'РН-Уватнефтегаз', logo: rnUvatLogo },
    { name: 'ЛУКОЙЛ', logo: lukoilLogo },
    { name: 'ЛУКОЙЛ-Коми', logo: lukoilKomiLogo },
    { name: 'Башнефть', logo: bashneftLogo },
    { name: 'Ванкорнефть', logo: vankorneftLogo },
    { name: 'Иркутская нефтяная компания', logo: inkLogo },
    { name: 'Сибнефтегаз', logo: sibneftegazLogo },
    { name: 'Норильсктрансгаз', logo: norilsktransgazLogo },
    { name: 'ОЗНА', logo: oznaLogo },
    { name: 'Орскнефтеоргсинтез', logo: orskLogo },
    { name: 'Салаватнефтемаш', logo: salavatneftemashLogo },
    { name: 'Конденсат', logo: kondensatLogo },
    { name: 'Технохим', logo: technohimLogo },
    { name: 'ЭлПромМаш', logo: elprommashLogo },
    { name: 'ГСП-Комплектация', logo: gspLogo },
    { name: 'Гидродинамика', logo: hydrodynamicsLogo },
    { name: 'Уралтехнострой', logo: uraltekhnostroyLogo },
  ];

  const scrollCarousel = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.firstElementChild as HTMLElement | null;
    if (!firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const distance = firstCard.offsetWidth + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const nextPosition = carousel.scrollLeft + direction * distance;

    carousel.scrollTo({
      left: direction > 0 && nextPosition >= maxScroll - 1 ? 0 : Math.max(0, nextPosition),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = window.setInterval(() => scrollCarousel(1), 3500);
    return () => window.clearInterval(timer);
  }, [isCarouselPaused]);

  const projects = [
    {
      title: 'Комплект монтажных вставок для ГПК в Усть-Луге',
      client: 'ГСП-Комплектация',
      year: '2025',
      scope: 'Поставка монтажных вставок фланцевых DN 100–800 для газоперерабатывающего комплекса по переработке этансодержащего газа.',
      status: 'Завершен',
    },
    {
      title: 'Факельные оголовки для ЛУКОЙЛ-Волгограднефтепереработка',
      client: 'ЛУКОЙЛ',
      year: '2025',
      scope: 'Изготовление и поставка двух факельных оголовков ГФНГ-1200-399,418-0,005-П.',
      status: 'Завершен',
    },
    {
      title: 'Факельная установка для СИБУР',
      client: 'СИБУР',
      year: '2023',
      scope: 'Изготовление факельной установки УФ-Н50-Ду700-h7500 с оголовком ГФНГ-1000 для нефтехимического производства.',
      status: 'Завершен',
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
              Протфолио
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
            Поставки оборудования для ведущих корпораций России
          </p>
        </motion.div>

        {/* Clients carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
          onFocus={() => setIsCarouselPaused(true)}
          onBlur={() => setIsCarouselPaused(false)}
        >
          <div className="mb-5 flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Предыдущие заказчики"
              onClick={() => scrollCarousel(-1)}
              className="flex h-10 w-10 items-center justify-center border border-[#A7A9AC]/30 bg-white text-[#50626C] transition-colors hover:border-[#50626C] hover:bg-[#50626C] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Следующие заказчики"
              onClick={() => scrollCarousel(1)}
              className="flex h-10 w-10 items-center justify-center border border-[#A7A9AC]/30 bg-white text-[#50626C] transition-colors hover:border-[#50626C] hover:bg-[#50626C] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Заказчики реализованных проектов"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex aspect-[4/3] min-w-full snap-start items-center justify-center border border-[#A7A9AC]/20 bg-white p-5 transition-all duration-300 hover:border-[#8D9DA6]/60 hover:shadow-lg sm:min-w-[42%] md:min-w-[30%] lg:min-w-[calc((100%-5rem)/4)]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full max-h-24 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
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
                <div>
                  <div>
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
                      {project.status === 'Завершен' && (
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
