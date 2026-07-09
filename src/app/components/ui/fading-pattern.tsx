import pattern from '@/imports/pattern.svg';

type FadingPatternProps = {
  className?: string;
  opacity?: string;
};

export function FadingPattern({ className = '', opacity = '0.075' }: FadingPatternProps) {
  return (
    <div
      className={`pointer-events-none absolute -right-32 top-0 h-full w-[72vw] ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.012) 24%, rgba(255,255,255,0.045) 58%, rgba(255,255,255,${opacity}) 100%)`,
        maskImage: `url(${pattern})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'right center',
        maskSize: 'cover',
        WebkitMaskImage: `url(${pattern})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'right center',
        WebkitMaskSize: 'cover',
      }}
    />
  );
}
