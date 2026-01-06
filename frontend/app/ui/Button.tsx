import { JSX } from "react";

interface ButtonProps {
  isNewUser: string;
  icon: string | JSX.Element;
  text: string | JSX.Element;
  customClass?: string;
  onClick?: () => void;
}

const Button = ({
  isNewUser,
  icon,
  text,
  customClass,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={` bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium rounded-md  transition-colors ${customClass}`}
      onClick={onClick}
    >
      {isNewUser}
      {text}
      {icon}
    </button>
  );
};

export default Button;
