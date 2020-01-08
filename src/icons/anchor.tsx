import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Anchor: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="5" r="3"></circle>
			<line x1="12" y1="22" x2="12" y2="8"></line>
			<path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
		</svg>
	);
};
