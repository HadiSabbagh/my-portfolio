export default function ScrollDown({
  direction = "down",
  nextSectionId = "next-section",
}) {
  const handleScroll = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // SVG path for down arrow (default) or up arrow if direction === "up"
  const downPath = "M1 1.00006L27.5257 27.5257L54.0513 1.00006";
  const upPath = "M1 27.5257L27.5257 1.00006L54.0513 27.5257"; // flipped

  return (
    <button
      onClick={handleScroll}
      className="animate-bounce absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      aria-label={`Scroll ${direction}`}
    >
      <svg
        width="55"
        height="28"
        viewBox="0 0 55 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={direction === "up" ? upPath : downPath}
          stroke="url(#paint0_linear_183_202)"
          strokeWidth="0.442094"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_183_202"
            x1="27.5257"
            y1="1.00006"
            x2="27.5257"
            y2="27.5257"
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
