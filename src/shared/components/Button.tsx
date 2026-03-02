interface ButtonProps {
  text?: string;
  handleClick?: () => null;
  variant?: "primary" | "secondary";
  buttonType?: "submit" | "button" | "reset";
  children?: any;
}

export const Button = ({
  text = "Hello",
  handleClick,
  variant = "primary",
  buttonType = "button",
  children,
}: ButtonProps) => {
  const baseStyle =
    "cursor-pointer rounded-xl py-4 w-full text-sm font-semibold transition flex justify-center items-center gap-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-gray-300 text-gray-600 hover:opacity-50 duration-200",
  };

  return (
    <button
      type={buttonType}
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
      {text}
    </button>
  );
};
