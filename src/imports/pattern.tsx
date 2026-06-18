import type { CSSProperties } from 'react';
import patternSvg from './pattern.svg';

type PatternTone = 'light' | 'dark' | 'steel' | 'blue';
type PatternFade = 'none' | 'left' | 'right' | 'top' | 'bottom' | 'center';

type PatternProps = {
  className?: string;
  tone?: PatternTone;
  opacity?: number;
  size?: number;
  fade?: PatternFade;
  gradient?: string;
};

const toneColors: Record<PatternTone, string> = {
  light: '#ffffff',
  dark: '#50626C',
  steel: '#8D9DA6',
  blue: '#6F8792',
};

const fadeMasks: Record<PatternFade, string> = {
  none: 'none',
  left: 'linear-gradient(to right, transparent 0%, #000 32%, #000 100%)',
  right: 'linear-gradient(to right, #000 0%, #000 55%, transparent 100%)',
  top: 'linear-gradient(to bottom, transparent 0%, #000 35%, #000 100%)',
  bottom: 'linear-gradient(to bottom, #000 0%, #000 55%, transparent 100%)',
  center: 'radial-gradient(circle at center, #000 0%, #000 42%, transparent 78%)',
};

export function Pattern({
  className = '',
  tone = 'light',
  opacity = 0.12,
  size = 120,
  fade = 'right',
  gradient = 'linear-gradient(135deg, rgba(255,255,255,0.26), rgba(255,255,255,0.02))',
}: PatternProps) {
  const outerStyle = {
    opacity,
    WebkitMaskImage: fadeMasks[fade],
    maskImage: fadeMasks[fade],
  } as CSSProperties;

  const patternStyle = {
    backgroundColor: toneColors[tone],
    backgroundImage: gradient,
    WebkitMaskImage: `url(${patternSvg})`,
    maskImage: `url(${patternSvg})`,
    WebkitMaskRepeat: 'repeat',
    maskRepeat: 'repeat',
    WebkitMaskSize: `${size}px ${size}px`,
    maskSize: `${size}px ${size}px`,
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={outerStyle}
    >
      <div className="absolute inset-0" style={patternStyle} />
    </div>
  );
}
