import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const MoreHorizontal: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="1"></circle>
			<circle cx="19" cy="12" r="1"></circle>
			<circle cx="5" cy="12" r="1"></circle>
		</svg>
	);
};
