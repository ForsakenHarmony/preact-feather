import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const SkipBack: FunctionalComponent<FeatherProps> = (
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
			<polygon points="19 20 9 12 19 4 19 20"></polygon>
			<line x1="5" y1="19" x2="5" y2="5"></line>
		</svg>
	);
};
