import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Framer: FunctionalComponent<FeatherProps> = (
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
			<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
		</svg>
	);
};
