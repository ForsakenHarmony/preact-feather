import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Codepen: FunctionalComponent<FeatherProps> = (
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
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
			<line x1="12" y1="22" x2="12" y2="15.5"></line>
			<polyline points="22 8.5 12 15.5 2 8.5"></polyline>
			<polyline points="2 15.5 12 8.5 22 15.5"></polyline>
			<line x1="12" y1="2" x2="12" y2="8.5"></line>
		</svg>
	);
};
