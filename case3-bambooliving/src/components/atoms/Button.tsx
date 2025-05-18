type ButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger";
};

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base w-[160px] md:w-[200px]",
  large: "px-6 py-4 text-base w-[250px] md:w-[290px]",
};

const variantClasses = {
  primary: "bg-amber-900 text-white hover:bg-amber-700 font-semibold",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 font-semibold",
  danger: "bg-red-600 text-white hover:bg-red-700 font-semibold",
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  size = "medium",
  variant = "primary",
}) => {
  return (
    <button
      type={"button"}
      className={`rounded-full shadow-lg shadow-amber-950/30 transition cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
