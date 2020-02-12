import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const BarChart2: FunctionalComponent<FeatherProps> = (
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
			<line x1="18" y1="20" x2="18" y2="10"></line>
			<line x1="12" y1="20" x2="12" y2="4"></line>
			<line x1="6" y1="20" x2="6" y2="14"></line>
		</svg>
	);
};
