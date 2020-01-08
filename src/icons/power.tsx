import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Power: FunctionalComponent<FeatherProps> = (
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
			<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
			<line x1="12" y1="2" x2="12" y2="12"></line>
		</svg>
	);
};
