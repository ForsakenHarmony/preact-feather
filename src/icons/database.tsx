import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Database: FunctionalComponent<FeatherProps> = (
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
			<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
			<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
			<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
		</svg>
	);
};
