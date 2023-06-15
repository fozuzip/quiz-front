import clsx from "clsx";

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export type VariantType = "option" | "correct" | "wrong";

type OptionButtonType = {
  children: React.ReactNode;
  index: number;
  variant?: VariantType;
  isSelectable?: boolean;
  onClick: () => void;
};

function OptionButton({
  children,
  index,
  variant = "option",
  isSelectable = true,
  onClick,
}: OptionButtonType) {
  // Convert number to
  const orderLetter = String.fromCharCode((index % 26) + 65);

  const buttonClass = clsx(
    "w-full flex justify-between items-center px-4 py-2 border-2 rounded-xl",
    variant === "option" && "text-violet border-violet ",
    variant === "correct" && "text-white bg-green border-green ",
    variant === "wrong" && "text-white bg-red border-red ",
    isSelectable && variant === "option"
      ? "hover:bg-yellow hover:border-yellow hover:text-white"
      : "cursor-auto"
  );
  return (
    <button
      className={buttonClass}
      onClick={isSelectable ? onClick : () => null}
    >
      <div className="flex items-center">
        <span className="mr-16 text-2xl">{orderLetter}</span>
        <span className="text-md">{children}</span>
      </div>

      {variant === "correct" && (
        <AiOutlineCheckCircle size={20} className="justify-self-end" />
      )}
      {variant === "wrong" && (
        <AiOutlineCloseCircle size={20} className="justify-self-end" />
      )}
    </button>
  );
}

export default OptionButton;
