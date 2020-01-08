import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const BellOff: FunctionalComponent<FeatherProps> = (
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
			<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
			<path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
			<path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
			<path d="M18 8a6 6 0 0 0-9.33-5"></path>
			<line x1="1" y1="1" x2="23" y2="23"></line>
		</svg>
	);
};
