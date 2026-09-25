import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number, props: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
})

export const ArrowRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const ArrowDown = ({ size = 15, ...p }: IconProps) => (
  <svg {...base(size, { strokeWidth: 1.6, ...p })}><path d="M12 5v14M5 12l7 7 7-7" /></svg>
)

export const Download = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
)

export const External = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
)

export const Close = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
)

export const Android = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><polygon points="6 3 20 12 6 21 6 3" /></svg>
)

export const Apple = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
)

export const Monitor = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size, p)}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
)

export const Image = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" /></svg>
)

export const PlatformIcon = ({ id }: { id: 'android' | 'ios' | 'web' }) =>
  id === 'android' ? <Android /> : id === 'ios' ? <Apple /> : <Monitor />
