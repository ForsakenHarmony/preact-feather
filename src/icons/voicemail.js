const Voicemail = ({ color, size, ...otherProps }) => {
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
      <circle
        cx="5.5"
        cy="11.5"
        r="4.5"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <circle
        cx="18.5"
        cy="11.5"
        r="4.5"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <line
        x1="5.5"
        y1="16"
        x2="18.5"
        y2="16"
        fill="none"
        stroke={color}
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  );
};

export default Voicemail;
