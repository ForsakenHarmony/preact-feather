import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Chrome: FunctionalComponent<FeatherProps> = (
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
			<circle cx="12" cy="12" r="10"></circle>
			<circle cx="12" cy="12" r="4"></circle>
			<line x1="21.17" y1="8" x2="12" y2="8"></line>
			<line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
			<line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
		</svg>
	);
};
