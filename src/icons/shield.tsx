import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Shield: FunctionalComponent<FeatherProps> = (
	props: FeatherProps
) => {
	const color = props.color || 'currentColor';
	const size = props.size || 24;
	const stroke = props.stroke || '2';
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
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
		</svg>
	);
};
