import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Minimize2: FunctionalComponent<FeatherProps> = (
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
			<polyline points="4 14 10 14 10 20"></polyline>
			<polyline points="20 10 14 10 14 4"></polyline>
			<line x1="14" y1="10" x2="21" y2="3"></line>
			<line x1="3" y1="21" x2="10" y2="14"></line>
		</svg>
	);
};
