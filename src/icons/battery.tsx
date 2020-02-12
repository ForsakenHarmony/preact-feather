import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Battery: FunctionalComponent<FeatherProps> = (
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
			<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
			<line x1="23" y1="13" x2="23" y2="11"></line>
		</svg>
	);
};
