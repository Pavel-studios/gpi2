import pattern from '@/imports/pattern.svg';

type FadingPatternProps = {
  className?: string;
  opacity?: string;
};

export function FadingPattern({ className = '', opacity = '0.075' }: FadingPatternProps) {
  return (
    <div
      className={`pointer-events-none absolute -left-[12vw] top-0 h-full w-[72vw] ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0.045) 42%, rgba(255,255,255,0.012) 76%, transparent 100%)`,
        maskImage: `url(${pattern})`,
        maskRepeat: 'no-repeat',
        maskPosition: 'left center',
        maskSize: 'cover',
        WebkitMaskImage: `url(${pattern})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center',
        WebkitMaskSize: 'cover',
      }}
    />
  );
}
