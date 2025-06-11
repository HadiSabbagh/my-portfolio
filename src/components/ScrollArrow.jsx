export default function ScrollArrow({
  direction = "down",
  onScroll,
  className = "",
}) {
  // SVG path for all directions (up, down, left, right)
  const arrowPath = "M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z";

  // Transform attribute based on direction
  const transform = {
    up: "matrix(-1, 0, 0, 1, 0, 0) rotate(180)",
    down: "matrix(-1, 0, 0, 1, 0, 0) rotate(0)",
    left: "matrix(-1, 0, 0, 1, 0, 0) rotate(270)",
    right: "matrix(-1, 0, 0, 1, 0, 0) rotate(90)",
  }[direction];

  return (
    <button
      onClick={onScroll}
      className={` ${className} cursor-pointer`}
      aria-label={`Scroll ${direction}`}
    >
      <svg
        viewBox="0 0 1024 1024"
        className="icon"
        width="55"
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={transform}
      >
        <path
          d={arrowPath}
          fill="url(#paint0_linear_183_202)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_183_202"
            x1="512"
            y1="256"
            x2="512"
            y2="768"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}