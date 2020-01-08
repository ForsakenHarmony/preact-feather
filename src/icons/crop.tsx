import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Crop: FunctionalComponent<FeatherProps> = (
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
			<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
			<path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
		</svg>
	);
};
