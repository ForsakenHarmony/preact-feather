import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Tablet: FunctionalComponent<FeatherProps> = (
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
			<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
			<line x1="12" y1="18" x2="12.01" y2="18"></line>
		</svg>
	);
};
