const ArrowDownRight = ({ color, size, ...otherProps }) => {
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
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <polyline
        points="9 18 18 18 18 9"
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};

export default ArrowDownRight;
