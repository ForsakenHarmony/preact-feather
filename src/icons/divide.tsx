import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Divide: FunctionalComponent<FeatherProps> = (
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
			{...(props as Omit<typeof props, 'color' | 'size'>)}
		>
			<circle cx="12" cy="6" r="2"></circle>
			<line x1="5" y1="12" x2="19" y2="12"></line>
			<circle cx="12" cy="18" r="2"></circle>
		</svg>
	);
};
