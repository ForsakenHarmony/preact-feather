import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Cpu: FunctionalComponent<FeatherProps> = (props: FeatherProps) => {
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
			<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
			<rect x="9" y="9" width="6" height="6"></rect>
			<line x1="9" y1="1" x2="9" y2="4"></line>
			<line x1="15" y1="1" x2="15" y2="4"></line>
			<line x1="9" y1="20" x2="9" y2="23"></line>
			<line x1="15" y1="20" x2="15" y2="23"></line>
			<line x1="20" y1="9" x2="23" y2="9"></line>
			<line x1="20" y1="14" x2="23" y2="14"></line>
			<line x1="1" y1="9" x2="4" y2="9"></line>
			<line x1="1" y1="14" x2="4" y2="14"></line>
		</svg>
	);
};
