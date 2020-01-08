import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const GitCommit: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="4"></circle>
			<line x1="1.05" y1="12" x2="7" y2="12"></line>
			<line x1="17.01" y1="12" x2="22.96" y2="12"></line>
		</svg>
	);
};
