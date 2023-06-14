import clsx from "clsx";

type OptionButtonType = {
  children: React.ReactNode;
  index: number;
  variant?: "option" | "correct" | "wrong";
  isHoverable?: boolean;
};

function OptionButton({
  children,
  index,
  variant = "option",
  isHoverable = true,
}: OptionButtonType) {
  // Convert number to
  const orderLetter = String.fromCharCode((index % 26) + 65);

  const buttonClass = clsx(
    "w-full flex color items-center px-4 py-2 rounded-xl",
    variant === "option" && "text-violet border-2 border-violet ",
    isHoverable && "hover:bg-yellow hover:border-yellow hover:text-white"
  );
  return (
    <button className={buttonClass}>
      <span className="mr-16 text-2xl">{orderLetter}</span>
      <span className="text-lg">{children}</span>
    </button>
  );
}

export default OptionButton;
