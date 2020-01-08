import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const RotateCcw: FunctionalComponent<FeatherProps> = (
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
			<polyline points="1 4 1 10 7 10"></polyline>
			<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
		</svg>
	);
};
