import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import pattern from '@/imports/hero/home-pattern.svg';
import poster from '@/imports/about/about-hero-poster.webp';
import dimensions from '@/imports/about/gallery-v2/dimensions.json';

const images = Object.entries(import.meta.glob('@/imports/about/gallery-v2/*.webp', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b)).map(([path, src]) => ({ src: src as string, ...dimensions[path.split('/').pop() as keyof typeof dimensions] }));
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function AboutHeroSection() {
  const rail = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const interacting = useRef(false);
  const scrollTarget = useRef<number | null>(null);

  const scrollPhoto = (direction: -1 | 1) => {
    const element = rail.current;
    const row = group.current;
    if (!element || !row) return;

    setPaused(true);
    const width = row.offsetWidth;
    const origin = row.getBoundingClientRect().left;
    const starts = Array.from(row.children, child => child.getBoundingClientRect().left - origin);
    let current = scrollTarget.current ?? element.scrollLeft;
    // Move into the identical copy before stepping left across the loop boundary.
    if (direction === -1 && current < 1) {
      current += width;
      element.scrollLeft = current;
    } else if (direction === 1 && current >= width) {
      current -= width;
      element.scrollLeft = current;
    }
    const stops = [...starts, ...starts.map(start => start + width)];
    const target = direction === 1
      ? stops.find(start => start > current + 1) ?? width
      : stops.filter(start => start < current - 1).at(-1) ?? 0;
    scrollTarget.current = target;
    element.scrollTo({ left: target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  useEffect(() => {
    const element = rail.current;
    const clearTarget = () => { scrollTarget.current = null; };
    element?.addEventListener('scrollend', clearTarget);
    element?.addEventListener('wheel', clearTarget);
    element?.addEventListener('touchstart', clearTarget);
    return () => {
      element?.removeEventListener('scrollend', clearTarget);
      element?.removeEventListener('wheel', clearTarget);
      element?.removeEventListener('touchstart', clearTarget);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previous = 0;
    let remainder = 0;
    const tick = (now: number) => {
      const element = rail.current;
      const width = group.current?.offsetWidth ?? 0;
      if (element && width && previous && !paused && !interacting.current && !reducedMotion.matches) {
        remainder += Math.min(now - previous, 50) * 0.08;
        const pixels = Math.floor(remainder);
        remainder -= pixels;
        element.scrollLeft += pixels;
        if (element.scrollLeft >= width) element.scrollLeft -= width;
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <>
      <section className="relative flex min-h-[100svh] w-full overflow-hidden bg-[#30383d] text-white">
        <div className="absolute inset-0">
          <video className="h-full w-full object-cover" src={`${base}/media/about-hero.mp4`} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#40515a]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202a30]/58 via-[#33434b]/24 to-[#26343b]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172127]/65 via-transparent to-[#202b31]/24" />
        </div>
        <img src={pattern} alt="" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-auto max-w-none -translate-x-[10%] -translate-y-[8%] brightness-0 invert opacity-[0.05]" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1920px] flex-col justify-end px-5 pb-12 pt-28 sm:px-6 lg:px-12 lg:pb-20">
          <div className="section-eyebrow mb-8 self-start text-xs font-bold uppercase tracking-[0.22em] text-white/76">О компании</div>
          <h1 className="max-w-4xl text-white drop-shadow-lg" style={{ fontSize: 'clamp(46px, 8vw, 120px)', fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 0.96 }}>
            Более 20 лет<span className="block text-white/80">на рынке</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white drop-shadow-lg sm:text-xl sm:leading-8">
            Самостоятельное производственное предприятие полного цикла для нефтегазовой, химической и энергетической отраслей.
          </p>
        </div>
      </section>

      <section aria-label="Фотогалерея О компании" className="overflow-hidden bg-[#eef0f1] py-10 sm:py-16">
        <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto mb-7 flex max-w-[1680px] items-center justify-between gap-4">
          <h2 className="section-eyebrow text-sm font-bold uppercase tracking-[0.18em] text-[#50626c]">Фотогалерея</h2>
          <div className="flex items-center gap-3">
          <button type="button" onClick={() => scrollPhoto(-1)} aria-label="Предыдущая фотография в фотоленте" className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#50626c]/25 text-[#50626c] transition-colors hover:bg-[#50626c] hover:text-white lg:flex">
            <ArrowLeft size={20} />
          </button>
          <button type="button" onClick={() => { scrollTarget.current = null; setPaused(!paused); }} aria-label={paused ? 'Продолжить движение фотоленты' : 'Приостановить фотоленту'} aria-pressed={paused} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#263740]/25 text-[#263740]">
            {paused ? <Play size={18} /> : <Pause size={18} />}
          </button>
          <button type="button" onClick={() => scrollPhoto(1)} aria-label="Следующая фотография в фотоленте" className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#50626c]/25 text-[#50626c] transition-colors hover:bg-[#50626c] hover:text-white lg:flex">
            <ArrowRight size={20} />
          </button>
          </div>
        </div>
        </div>
        <div ref={rail} tabIndex={0} aria-label="Фотографии предприятия, листайте влево и вправо" className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => { interacting.current = true; }} onMouseLeave={() => { interacting.current = false; }}
          onTouchStart={() => setPaused(true)} onFocus={() => { interacting.current = true; }} onBlur={() => { interacting.current = false; }}>
          <div className="flex w-max">
            {[0, 1].map(copy => (
              <div key={copy} ref={copy === 0 ? group : undefined} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 gap-3 pr-3 sm:gap-5 sm:pr-5">
                {images.map(({ src, width, height }, index) => <img key={src} src={src} width={width} height={height} style={{ aspectRatio: `${width}/${height}` }} alt={copy === 0 ? `Предприятие Газ-Проект Инжиниринг — фото ${index + 1}` : ''} className="h-[220px] w-auto max-w-none shrink-0 object-contain sm:h-[320px] lg:h-[380px]" loading="lazy" decoding="async" draggable={false} />)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
