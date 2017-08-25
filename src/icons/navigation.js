const Navigation = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <polygon
        points="3 11 22 2 13 21 11 13 3 11"
        fill="none"
        stroke={color}
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};

export default Navigation;
