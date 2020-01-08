import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Shuffle: FunctionalComponent<FeatherProps> = (
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
			<polyline points="16 3 21 3 21 8"></polyline>
			<line x1="4" y1="20" x2="21" y2="3"></line>
			<polyline points="21 16 21 21 16 21"></polyline>
			<line x1="15" y1="15" x2="21" y2="21"></line>
			<line x1="4" y1="4" x2="9" y2="9"></line>
		</svg>
	);
};
