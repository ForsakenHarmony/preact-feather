import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const CornerRightUp: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	const stroke = props.stroke || '2';
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
			<polyline points="10 9 15 4 20 9"></polyline>
			<path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
		</svg>
	);
};
