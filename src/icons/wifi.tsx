import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Wifi: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	delete props.color;
	delete props.size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
			<path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
			<path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
			<line x1="12" y1="20" x2="12.01" y2="20"></line>
		</svg>
	);
};
