import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Tv: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
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
			<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
			<polyline points="17 2 12 7 7 2"></polyline>
		</svg>
	);
};
