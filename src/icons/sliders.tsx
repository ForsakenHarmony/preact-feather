import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Sliders: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	const strokeWidth = props.strokeWidth || 2;
	delete props.color;
	delete props.size;
	delete props.strokeWidth;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width={strokeWidth}
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<line x1="4" y1="21" x2="4" y2="14"></line>
			<line x1="4" y1="10" x2="4" y2="3"></line>
			<line x1="12" y1="21" x2="12" y2="12"></line>
			<line x1="12" y1="8" x2="12" y2="3"></line>
			<line x1="20" y1="21" x2="20" y2="16"></line>
			<line x1="20" y1="12" x2="20" y2="3"></line>
			<line x1="1" y1="14" x2="7" y2="14"></line>
			<line x1="9" y1="8" x2="15" y2="8"></line>
			<line x1="17" y1="16" x2="23" y2="16"></line>
		</svg>
	);
};
