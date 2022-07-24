import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Rewind: FunctionalComponent<FeatherProps> = (
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
			<polygon points="11 19 2 12 11 5 11 19"></polygon>
			<polygon points="22 19 13 12 22 5 22 19"></polygon>
		</svg>
	);
};
