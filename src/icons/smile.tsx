import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Smile: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	const strokeWidth = props.strokeWidth || 2;
	delete props.color;
	delete props.size;
	delete props.strokeWidth;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
			<line x1="9" y1="9" x2="9.01" y2="9"></line>
			<line x1="15" y1="9" x2="15.01" y2="9"></line>
		</svg>
	);
};
