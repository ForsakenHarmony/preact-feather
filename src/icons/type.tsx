import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Type: FunctionalComponent<FeatherProps> = (
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
			<polyline points="4 7 4 4 20 4 20 7"></polyline>
			<line x1="9" y1="20" x2="15" y2="20"></line>
			<line x1="12" y1="4" x2="12" y2="20"></line>
		</svg>
	);
};
