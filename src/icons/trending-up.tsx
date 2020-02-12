import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const TrendingUp: FunctionalComponent<FeatherProps> = (
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
			<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
			<polyline points="17 6 23 6 23 12"></polyline>
		</svg>
	);
};
