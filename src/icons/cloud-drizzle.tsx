import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const CloudDrizzle: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color ?? 'currentColor';
	const size = props.size ?? 24;
	const stroke = props.stroke ?? 2;
	delete props.color;
	delete props.size;
	delete props.stroke;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width={stroke}
			stroke-linecap="round"
			stroke-linejoin="round"
			{...props}
		>
			<line x1="8" y1="19" x2="8" y2="21"></line>
			<line x1="8" y1="13" x2="8" y2="15"></line>
			<line x1="16" y1="19" x2="16" y2="21"></line>
			<line x1="16" y1="13" x2="16" y2="15"></line>
			<line x1="12" y1="21" x2="12" y2="23"></line>
			<line x1="12" y1="15" x2="12" y2="17"></line>
			<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
		</svg>
	);
};
