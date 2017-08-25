const CheckCircle = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
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
      {...otherProps}
    >
      <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="23 3 12 14 9 11" />
    </svg>
  );
};

export default CheckCircle;
