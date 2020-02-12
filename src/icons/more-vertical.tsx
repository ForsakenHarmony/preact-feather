import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const MoreVertical: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="1"></circle>
			<circle cx="12" cy="5" r="1"></circle>
			<circle cx="12" cy="19" r="1"></circle>
		</svg>
	);
};
