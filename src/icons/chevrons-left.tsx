import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const ChevronsLeft: FunctionalComponent<FeatherProps> = (
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
			<polyline points="11 17 6 12 11 7"></polyline>
			<polyline points="18 17 13 12 18 7"></polyline>
		</svg>
	);
};
