import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Terminal: FunctionalComponent<FeatherProps> = (
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
			<polyline points="4 17 10 11 4 5"></polyline>
			<line x1="12" y1="19" x2="20" y2="19"></line>
		</svg>
	);
};
