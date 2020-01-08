import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const UploadCloud: FunctionalComponent<FeatherProps> = (
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
			<polyline points="16 16 12 12 8 16"></polyline>
			<line x1="12" y1="12" x2="12" y2="21"></line>
			<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
			<polyline points="16 16 12 12 8 16"></polyline>
		</svg>
	);
};
