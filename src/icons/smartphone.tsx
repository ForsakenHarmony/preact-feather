import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Smartphone: FunctionalComponent<FeatherProps> = (
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
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
			<line x1="12" y1="18" x2="12.01" y2="18"></line>
		</svg>
	);
};
