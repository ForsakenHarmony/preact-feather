import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Video: FunctionalComponent<FeatherProps> = (
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
			<polygon points="23 7 16 12 23 17 23 7"></polygon>
			<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
		</svg>
	);
};
