import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Droplet: FunctionalComponent<FeatherProps> = (
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
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
		</svg>
	);
};
