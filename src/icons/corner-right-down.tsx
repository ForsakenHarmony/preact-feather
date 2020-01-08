import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const CornerRightDown: FunctionalComponent<FeatherProps> = (
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
			<polyline points="10 15 15 20 20 15"></polyline>
			<path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
		</svg>
	);
};
