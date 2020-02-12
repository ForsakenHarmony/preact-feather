import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Archive: FunctionalComponent<FeatherProps> = (
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
			<polyline points="21 8 21 21 3 21 3 8"></polyline>
			<rect x="1" y="3" width="22" height="5"></rect>
			<line x1="10" y1="12" x2="14" y2="12"></line>
		</svg>
	);
};
