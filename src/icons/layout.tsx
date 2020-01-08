import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Layout: FunctionalComponent<FeatherProps> = (
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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
			<line x1="3" y1="9" x2="21" y2="9"></line>
			<line x1="9" y1="21" x2="9" y2="9"></line>
		</svg>
	);
};
