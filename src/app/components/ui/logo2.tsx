import type { CSSProperties, SVGAttributes } from 'react';
import logo2Source from '@/imports/logo2.svg';

interface Logo2Props extends Omit<SVGAttributes<SVGSVGElement>, 'width'> {
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

function Logo2({
  width = 720,
  className,
  style,
  title = 'Газ-Проект Инжиниринг',
  ...props
}: Logo2Props) {
  return (
    <svg
      viewBox="0 0 8183.81 1665.65"
      width={width}
      className={className}
      style={style}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMinYMid meet"
      {...props}
    >
      <title>{title}</title>
      <image href={logo2Source} width="8183.81" height="1665.65" />
    </svg>
  );
}

export default Logo2;
