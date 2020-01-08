import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Aperture: FunctionalComponent<FeatherProps> = (
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
			<line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
			<line x1="9.69" y1="8" x2="21.17" y2="8"></line>
			<line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
			<line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
			<line x1="14.31" y1="16" x2="2.83" y2="16"></line>
			<line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
		</svg>
	);
};
