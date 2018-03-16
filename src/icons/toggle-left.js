const ToggleLeft = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="8" cy="12" r="3" />
  </svg>
);

export default ToggleLeft;
