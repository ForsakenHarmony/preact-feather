import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Hash: FunctionalComponent<FeatherProps> = (
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
			<line x1="4" y1="9" x2="20" y2="9"></line>
			<line x1="4" y1="15" x2="20" y2="15"></line>
			<line x1="10" y1="3" x2="8" y2="21"></line>
			<line x1="16" y1="3" x2="14" y2="21"></line>
		</svg>
	);
};
