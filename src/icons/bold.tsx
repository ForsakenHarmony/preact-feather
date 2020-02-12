import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Bold: FunctionalComponent<FeatherProps> = (
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
			<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
			<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
		</svg>
	);
};
