import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Trello: FunctionalComponent<FeatherProps> = (
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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
			<rect x="7" y="7" width="3" height="9"></rect>
			<rect x="14" y="7" width="3" height="5"></rect>
		</svg>
	);
};
