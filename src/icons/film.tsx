import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Film: FunctionalComponent<FeatherProps> = (
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
			<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
			<line x1="7" y1="2" x2="7" y2="22"></line>
			<line x1="17" y1="2" x2="17" y2="22"></line>
			<line x1="2" y1="12" x2="22" y2="12"></line>
			<line x1="2" y1="7" x2="7" y2="7"></line>
			<line x1="2" y1="17" x2="7" y2="17"></line>
			<line x1="17" y1="17" x2="22" y2="17"></line>
			<line x1="17" y1="7" x2="22" y2="7"></line>
		</svg>
	);
};
