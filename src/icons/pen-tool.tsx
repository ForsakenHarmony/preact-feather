import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const PenTool: FunctionalComponent<FeatherProps> = (
  props: FeatherProps
) => {
  const color = props.color || 'currentColor';
  const size = props.size || 24;
  delete props.color;
  delete props.size;

  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
};
