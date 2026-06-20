import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Users, Shield, MapPin, Award, Building2, Calendar, CheckCircle2, TrendingUp, Target, Lightbulb, ArrowRight, Plus, Minus } from 'lucide-react';
import pattern from '@/imports/pattern.svg'
import backgroundImage from '@/imports/DJI_20260520153109_0571_D.jpg'
import activityMapMarkup from '@/imports/map-edited-2.svg?raw'

const MAP_WIDTH = 806;
const MAP_HEIGHT = 748;

export function AboutSection() {
  const [mapView, setMapView] = useState({ centerX: MAP_WIDTH / 2, centerY: MAP_HEIGHT / 2, scale: 1 });
  const [isMapDragging, setIsMapDragging] = useState(false);
  const mapDrag = useRef({ pointerId: -1, x: 0, y: 0 });
  const mapElement = useRef<HTMLDivElement>(null);
  const mapPointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef({ distance: 0, scale: 1 });
  const mapViewRef = useRef(mapView);

  const clampMapCenter = (centerX, centerY, scale) => {
    const visibleWidth = MAP_WIDTH / scale;
    const visibleHeight = MAP_HEIGHT / scale;

    return {
      centerX: Math.min(MAP_WIDTH - visibleWidth / 2, Math.max(visibleWidth / 2, centerX)),
      centerY: Math.min(MAP_HEIGHT - visibleHeight / 2, Math.max(visibleHeight / 2, centerY)),
    };
  };

  useEffect(() => {
    mapViewRef.current = mapView;

    const svg = mapElement.current?.querySelector('svg');
    if (!svg) return;

    const width = MAP_WIDTH / mapView.scale;
    const height = MAP_HEIGHT / mapView.scale;
    const x = mapView.centerX - width / 2;
    const y = mapView.centerY - height / 2;

    svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
  }, [mapView]);

  const handleMapPointerDown = (event) => {
    if (event.pointerType === 'touch') {
      event.preventDefault();
      mapPointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
      event.currentTarget.setPointerCapture(event.pointerId);

      if (mapPointers.current.size === 2) {
        const [first, second] = [...mapPointers.current.values()];
        pinch.current = {
          distance: Math.hypot(second.x - first.x, second.y - first.y),
          scale: mapViewRef.current.scale,
        };
        mapDrag.current.pointerId = -1;
      } else {
        mapDrag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
      }

      setIsMapDragging(true);
      return;
    }

    if (event.button !== 0 && event.button !== 2) return;

    event.preventDefault();
    mapDrag.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsMapDragging(true);
  };

  const handleMapPointerMove = (event) => {
    if (event.pointerType === 'touch') {
      if (!mapPointers.current.has(event.pointerId)) return;

      mapPointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (mapPointers.current.size === 2) {
        const [first, second] = [...mapPointers.current.values()];
        const distance = Math.hypot(second.x - first.x, second.y - first.y);

        if (pinch.current.distance > 0) {
          setMapScale(pinch.current.scale * (distance / pinch.current.distance));
        }
        return;
      }
    }

    if (mapDrag.current.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - mapDrag.current.x;
    const deltaY = event.clientY - mapDrag.current.y;

    mapDrag.current = { ...mapDrag.current, x: event.clientX, y: event.clientY };
    const bounds = event.currentTarget.getBoundingClientRect();
    const mapAspectRatio = MAP_WIDTH / MAP_HEIGHT;
    const viewportAspectRatio = bounds.width / bounds.height;
    const renderedWidth = viewportAspectRatio > mapAspectRatio ? bounds.height * mapAspectRatio : bounds.width;
    const renderedHeight = viewportAspectRatio > mapAspectRatio ? bounds.height : bounds.width / mapAspectRatio;

    setMapView((current) => {
      const visibleWidth = MAP_WIDTH / current.scale;
      const visibleHeight = MAP_HEIGHT / current.scale;
      const center = clampMapCenter(
        current.centerX - (deltaX * visibleWidth) / renderedWidth,
        current.centerY - (deltaY * visibleHeight) / renderedHeight,
        current.scale,
      );

      return { ...current, ...center };
    });
  };

  const handleMapPointerUp = (event) => {
    if (event.pointerType === 'touch') {
      mapPointers.current.delete(event.pointerId);

      if (mapPointers.current.size === 1) {
        const [remainingPointerId, remainingPointer] = [...mapPointers.current.entries()][0];
        mapDrag.current = { pointerId: remainingPointerId, x: remainingPointer.x, y: remainingPointer.y };
        pinch.current.distance = 0;
      } else if (mapPointers.current.size === 0) {
        mapDrag.current.pointerId = -1;
        pinch.current.distance = 0;
        setIsMapDragging(false);
      }

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      return;
    }

    if (mapDrag.current.pointerId !== event.pointerId) return;

    mapDrag.current.pointerId = -1;
    setIsMapDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const setMapScale = (scale) => {
    setMapView((current) => {
      const nextScale = Math.min(4, Math.max(0.75, scale));
      const center = clampMapCenter(current.centerX, current.centerY, nextScale);

      return { ...center, scale: nextScale };
    });
  };

  const timeline = [
    { year: '2003', event: 'Основание предприятия', description: 'Запуск первого производственного цеха' },
    { year: '2010', event: 'Расширение производства', description: 'Увеличение площадей до 4 000 м²' },
    { year: '2015', event: 'Получение лицензий Ростехнадзора', description: 'Аттестация по всем направлениям' },
    { year: '2018', event: 'Запуск нового сварочного цеха', description: 'Внедрение современного оборудования' },
    { year: '2022', event: 'Сертификация по ASME', description: 'Международное признание качества' },
    { year: '2026', event: 'Внедрение системы контроля качества', description: 'Полная цифровизация процессов' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Контроль качества',
      description: 'Входной, операционный и приемочный контроль на производственных этапах',
      gradient: 'from-[#50626C] to-[#595B5C]',
    },
    {
      icon: Shield,
      title: 'Сертификация',
      description: 'Лицензии, аттестации и подтверждение соответствия отраслевым требованиям',
      gradient: 'from-[#595B5C] to-[#8D9DA6]',
    },
    {
      icon: Lightbulb,
      title: 'Инжиниринг',
      description: 'Конструкторская документация, расчеты и 3D-моделирование оборудования',
      gradient: 'from-[#8D9DA6] to-[#A7A9AC]',
    },
  ];

  const certificates = [
    { name: 'Сертификация ТР ТС', code: 'ТР ТС' },
    { name: 'Система менеджмента качества', code: 'ISO 9001' },
    { name: 'Отраслевой стандарт', code: 'STO INTI S.QS.7' },
    { name: 'Аттестация персонала', code: 'НАКС' },
  ];

  const regions = [
    { name: 'Россия' },
    { name: 'Белоруссия' },
    { name: 'Казахстан' },
    { name: 'Узбекистан' },
  ];

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#50626C] via-[#595B5C] to-[#8D9DA6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(167,169,172,0.2),transparent_50%)]" />
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ backgroundImage: `linear-gradient(to right, transparent 0%, rgba(255, 255, 255,0.2) 100%)`, maskImage: `url(${pattern})`, maskPosition: `center`}}/> */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,98,108,0.4),transparent_50%)]" style={{ background: `linear-gradient(to right, rgba(89, 91, 92, 0.2), rgba(255, 255, 255,0.2) 100%), url(${backgroundImage}) center / cover no-repeat`}}/>

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
              <div className="inline-block px-4 py-2 bg-[#5a5c5eb2] mb-6 border border-white/20">
                <span className="text-white/90 uppercase" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                  О Компании
                </span>
              </div>

              <h1
                className="text-white mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}
              >
                Более 20 лет инженерного
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
                  { icon: Calendar, value: 'с 2003', label: 'На рынке' },
                  { icon: Award, value: '2000+', label: 'Проектов' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-6 bg-[#5a5c5eb2] border border-white/20">
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
                      className={`p-6 bg-[#5a5c5eb2] border border-white/20 hover:bg-white/20 transition-all duration-300 ${
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            className={`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-video mb-8 sm:mb-12 overflow-hidden bg-white select-none touch-none ${
              isMapDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onPointerDown={handleMapPointerDown}
            onPointerMove={handleMapPointerMove}
            onPointerUp={handleMapPointerUp}
            onPointerCancel={handleMapPointerUp}
            onContextMenu={(event) => event.preventDefault()}
          >
            <div
              className="absolute inset-0"
            >
              <div
              ref={mapElement}
              className="activity-map"
              role="img"
              aria-label="География деятельности компании"
              dangerouslySetInnerHTML={{ __html: activityMapMarkup }}
              />
            </div>
            <div
              className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2 bg-white/90 p-1.5 shadow-lg backdrop-blur-sm sm:right-4 sm:gap-3 sm:p-2"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Приблизить карту"
                className="flex h-8 w-8 items-center justify-center text-[#50626C] transition-colors hover:bg-[#50626C] hover:text-white sm:h-9 sm:w-9"
                onClick={() => setMapScale(mapView.scale + 0.25)}
              >
                <Plus className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </button>
              <input
                aria-label="Масштаб карты"
                className="map-zoom-slider"
                type="range"
                min="0.75"
                max="4"
                step="0.05"
                value={mapView.scale}
                onChange={(event) => setMapScale(Number(event.target.value))}
              />
              <button
                type="button"
                aria-label="Отдалить карту"
                className="flex h-8 w-8 items-center justify-center text-[#50626C] transition-colors hover:bg-[#50626C] hover:text-white sm:h-9 sm:w-9"
                onClick={() => setMapScale(mapView.scale - 0.25)}
              >
                <Minus className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </button>
            </div>
            {false && (
              <>
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
              </>
            )}
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
                  className="text-[#595B5C]"
                  style={{ fontSize: '16px', fontWeight: 700 }}
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
