import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Percent: FunctionalComponent<FeatherProps> = (
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
			<line x1="19" y1="5" x2="5" y2="19"></line>
			<circle cx="6.5" cy="6.5" r="2.5"></circle>
			<circle cx="17.5" cy="17.5" r="2.5"></circle>
		</svg>
	);
};
