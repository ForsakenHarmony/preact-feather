import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const AlignJustify: FunctionalComponent<FeatherProps> = (
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
			<line x1="21" y1="10" x2="3" y2="10"></line>
			<line x1="21" y1="6" x2="3" y2="6"></line>
			<line x1="21" y1="14" x2="3" y2="14"></line>
			<line x1="21" y1="18" x2="3" y2="18"></line>
		</svg>
	);
};
