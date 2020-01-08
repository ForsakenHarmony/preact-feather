import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const ZoomIn: FunctionalComponent<FeatherProps> = (
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
			<circle cx="11" cy="11" r="8"></circle>
			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			<line x1="11" y1="8" x2="11" y2="14"></line>
			<line x1="8" y1="11" x2="14" y2="11"></line>
		</svg>
	);
};
