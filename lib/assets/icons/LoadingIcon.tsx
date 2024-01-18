const LoadingIcon = ({
  color = "#6968AA",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48ZM12 48C12 67.8822 28.1177 84 48 84C67.8822 84 84 67.8822 84 48C84 28.1177 67.8822 12 48 12C28.1177 12 12 28.1177 12 48Z"
        fill="url(#paint0_angular_233_3928)"
      />
      <circle cx="90" cy="47" r="6" fill={color} />
      <defs>
        <radialGradient
          id="paint0_angular_233_3928"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48 48) rotate(-1.78991) scale(48.0234)"
        >
          <stop stopColor="#E1E1EE" />
          <stop offset="0.0001" stopColor="#FDFDFD" />
          <stop offset="0.291667" stopColor="#D6D6E8" />
          <stop offset="1" stopColor={color} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LoadingIcon;
