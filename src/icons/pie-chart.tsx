import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const PieChart: FunctionalComponent<FeatherProps> = (
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
			<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
			<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
		</svg>
	);
};
