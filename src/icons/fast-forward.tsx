import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const FastForward: FunctionalComponent<FeatherProps> = (
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
			<polygon points="13 19 22 12 13 5 13 19"></polygon>
			<polygon points="2 19 11 12 2 5 2 19"></polygon>
		</svg>
	);
};
