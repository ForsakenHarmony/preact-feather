import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Volume: FunctionalComponent<FeatherProps> = (
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
			<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
		</svg>
	);
};
