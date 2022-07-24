import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const CloudSnow: FunctionalComponent<FeatherProps> = (
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
			<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
			<line x1="8" y1="16" x2="8.01" y2="16"></line>
			<line x1="8" y1="20" x2="8.01" y2="20"></line>
			<line x1="12" y1="18" x2="12.01" y2="18"></line>
			<line x1="12" y1="22" x2="12.01" y2="22"></line>
			<line x1="16" y1="16" x2="16.01" y2="16"></line>
			<line x1="16" y1="20" x2="16.01" y2="20"></line>
		</svg>
	);
};
