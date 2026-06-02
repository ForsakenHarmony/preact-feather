import { JSX } from 'preact';

export interface FeatherProps
	extends Omit<JSX.SVGAttributes<SVGSVGElement>, 'color' | 'size'> {
	color?: string;
	size?: number | string;
}
