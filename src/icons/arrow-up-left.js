const ArrowUpLeft = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <line x1="17" y1="17" x2="7" y2="7" />
    <polyline points="7 17 7 7 17 7" />
  </svg>
);

export default ArrowUpLeft;
