import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const AlignCenter: FunctionalComponent<FeatherProps> = (
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
			<line x1="18" y1="10" x2="6" y2="10"></line>
			<line x1="21" y1="6" x2="3" y2="6"></line>
			<line x1="21" y1="14" x2="3" y2="14"></line>
			<line x1="18" y1="18" x2="6" y2="18"></line>
		</svg>
	);
};
