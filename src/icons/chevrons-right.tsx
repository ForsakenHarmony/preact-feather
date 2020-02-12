import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const ChevronsRight: FunctionalComponent<FeatherProps> = (
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
			<polyline points="13 17 18 12 13 7"></polyline>
			<polyline points="6 17 11 12 6 7"></polyline>
		</svg>
	);
};
