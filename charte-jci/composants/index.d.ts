export interface LogoProps { variant?: 'default' | 'inverted' | 'white' | 'black'; width?: number; src?: string; alt?: string; style?: React.CSSProperties }
export interface LocalLogoProps { name: string; width?: number; variant?: 'default' | 'inverted' | 'white' | 'black'; color?: string; fontScale?: number; src?: string }
export interface RippleProps { size?: number; rings?: number; fadeRings?: number; rotation?: number; innerRatio?: number; colors?: [string, string, string, string]; fadeColors?: [string, string, string, string]; label?: string; style?: React.CSSProperties }
export function Logo(props: LogoProps): JSX.Element;
export function LocalLogo(props: LocalLogoProps): JSX.Element;
export function Ripple(props: RippleProps): JSX.Element;
