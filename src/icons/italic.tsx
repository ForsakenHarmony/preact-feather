import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Italic: FunctionalComponent<FeatherProps> = (
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
			<line x1="19" y1="4" x2="10" y2="4"></line>
			<line x1="14" y1="20" x2="5" y2="20"></line>
			<line x1="15" y1="4" x2="9" y2="20"></line>
		</svg>
	);
};
