import { GITHUB_URL } from "../../../lib/constants";

interface ButtonProps {
  type?: "primary" | "outline";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const PRIMARY_BUTTON_CLASS =
  "flex h-12 w-40 items-center justify-center gap-2 rounded-full bg-red-600 px-4 text-center text-white duration-300 hover:opacity-60";
const OUTLINE_BUTTON_CLASS =
  "flex h-12 w-40 items-center justify-center gap-2 rounded-full border border-stone-800 bg-white px-4 text-red-600 duration-300 hover:opacity-60";

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  href = GITHUB_URL,
  className = "",
  children,
}) => {
  const buttonClass =
    type === "primary" ? PRIMARY_BUTTON_CLASS : OUTLINE_BUTTON_CLASS;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`${className} ${buttonClass}`}
    >
      {children}
    </a>
  );
};

export default Button;
