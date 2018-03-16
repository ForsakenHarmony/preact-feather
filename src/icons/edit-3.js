const Edit3 = ({ color = 'currentColor', size = '24', ...otherProps }) => (
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
    <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
    <line x1="3" y1="22" x2="21" y2="22" />
  </svg>
);

export default Edit3;
