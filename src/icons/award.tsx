import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Award: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	delete props.color;
	delete props.size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<circle cx="12" cy="8" r="7"></circle>
			<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
		</svg>
	);
};
