import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Speaker: FunctionalComponent<FeatherProps> = (
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
			<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
			<circle cx="12" cy="14" r="4"></circle>
			<line x1="12" y1="6" x2="12.01" y2="6"></line>
		</svg>
	);
};
