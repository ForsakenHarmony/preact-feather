import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Voicemail: FunctionalComponent<FeatherProps> = (
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
			<circle cx="5.5" cy="11.5" r="4.5"></circle>
			<circle cx="18.5" cy="11.5" r="4.5"></circle>
			<line x1="5.5" y1="16" x2="18.5" y2="16"></line>
		</svg>
	);
};
