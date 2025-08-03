export const Button = ({
  children,
  onClick,
  variant = "default",
  isActive = false,
}) => {
  const base =
    "px-4 py-0 rounded-xl  text-base font-medium transition-all duration-300 h-10 flex items-center justify-center gap-2 shadow-md border-none";

  const variants = {
    default:
      "text-white bg-gradient-to-r from-[var(--text)] via-[var(--accent)] to-[var(--text)] hover:brightness-110",
    outline:
      "text-[var(--text)] border border-[var(--text)] bg-gradient-to-r from-white/40 to-white/10 backdrop-blur-sm hover:bg-[var(--text)] hover:text-white",
  };

  const activeStyle = {
    default: "from-[#7c3e00] to-[#5d2e00]", // حالت فعال کمی تیره‌تر
    outline: "bg-[var(--accent)] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${
        isActive ? activeStyle[variant] : ""
      }`}
    >
      {children}
    </button>
  );
};
