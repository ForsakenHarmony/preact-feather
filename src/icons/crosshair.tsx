import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Crosshair: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="10"></circle>
			<line x1="22" y1="12" x2="18" y2="12"></line>
			<line x1="6" y1="12" x2="2" y2="12"></line>
			<line x1="12" y1="6" x2="12" y2="2"></line>
			<line x1="12" y1="22" x2="12" y2="18"></line>
		</svg>
	);
};
