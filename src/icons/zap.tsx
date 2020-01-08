import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Zap: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
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
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
		</svg>
	);
};
