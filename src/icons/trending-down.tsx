import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const TrendingDown: FunctionalComponent<FeatherProps> = (
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
			<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
			<polyline points="17 18 23 18 23 12"></polyline>
		</svg>
	);
};
