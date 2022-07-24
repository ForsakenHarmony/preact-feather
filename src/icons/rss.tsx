import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Rss: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
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
			<path d="M4 11a9 9 0 0 1 9 9"></path>
			<path d="M4 4a16 16 0 0 1 16 16"></path>
			<circle cx="5" cy="19" r="1"></circle>
		</svg>
	);
};
