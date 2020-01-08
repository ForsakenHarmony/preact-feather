import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const CreditCard: FunctionalComponent<FeatherProps> = (
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
			<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
			<line x1="1" y1="10" x2="23" y2="10"></line>
		</svg>
	);
};
