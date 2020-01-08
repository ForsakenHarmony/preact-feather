import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Coffee: FunctionalComponent<FeatherProps> = (
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
			<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
			<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
			<line x1="6" y1="1" x2="6" y2="4"></line>
			<line x1="10" y1="1" x2="10" y2="4"></line>
			<line x1="14" y1="1" x2="14" y2="4"></line>
		</svg>
	);
};
