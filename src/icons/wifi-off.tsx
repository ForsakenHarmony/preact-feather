import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const WifiOff: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color ?? 'currentColor';
	const size = props.size ?? 24;
	const stroke = props.stroke ?? 2;
	delete props.color;
	delete props.size;
	delete props.stroke;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width={stroke}
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<line x1="1" y1="1" x2="23" y2="23"></line>
			<path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
			<path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
			<path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
			<path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
			<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
			<line x1="12" y1="20" x2="12.01" y2="20"></line>
		</svg>
	);
};
