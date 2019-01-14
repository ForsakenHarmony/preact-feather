import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Edit2: FunctionalComponent<FeatherProps> = (props: any) => {
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
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
    </svg>
  );
};
