import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Edit: FunctionalComponent<FeatherProps> = (props: any) => {
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
      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
    </svg>
  );
};
