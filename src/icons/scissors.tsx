import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Scissors: FunctionalComponent<FeatherProps> = (
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
			<circle cx="6" cy="6" r="3"></circle>
			<circle cx="6" cy="18" r="3"></circle>
			<line x1="20" y1="4" x2="8.12" y2="15.88"></line>
			<line x1="14.47" y1="14.48" x2="20" y2="20"></line>
			<line x1="8.12" y1="8.12" x2="12" y2="12"></line>
		</svg>
	);
};
