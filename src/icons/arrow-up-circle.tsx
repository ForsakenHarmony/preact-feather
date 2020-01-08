import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const ArrowUpCircle: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="10"></circle>
			<polyline points="16 12 12 8 8 12"></polyline>
			<line x1="12" y1="16" x2="12" y2="8"></line>
		</svg>
	);
};
