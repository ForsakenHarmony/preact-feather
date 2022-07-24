import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const UserPlus: FunctionalComponent<FeatherProps> = (
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
			<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
			<circle cx="8.5" cy="7" r="4"></circle>
			<line x1="20" y1="8" x2="20" y2="14"></line>
			<line x1="23" y1="11" x2="17" y2="11"></line>
		</svg>
	);
};
