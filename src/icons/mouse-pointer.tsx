import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const MousePointer: FunctionalComponent<FeatherProps> = (
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
			<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
			<path d="M13 13l6 6"></path>
		</svg>
	);
};
