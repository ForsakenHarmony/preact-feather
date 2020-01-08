import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const GitMerge: FunctionalComponent<FeatherProps> = (
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
			<circle cx="18" cy="18" r="3"></circle>
			<circle cx="6" cy="6" r="3"></circle>
			<path d="M6 21V9a9 9 0 0 0 9 9"></path>
		</svg>
	);
};
