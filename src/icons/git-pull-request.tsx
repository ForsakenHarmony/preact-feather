import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const GitPullRequest: FunctionalComponent<FeatherProps> = (
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
			<circle cx="18" cy="18" r="3"></circle>
			<circle cx="6" cy="6" r="3"></circle>
			<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
			<line x1="6" y1="9" x2="6" y2="21"></line>
		</svg>
	);
};
