import clsx from "clsx";

type ButtonType = {
  variation: "normal" | "plain";
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ variation = "normal", children, onClick }: ButtonType) {
  const buttonClasses = clsx(
    variation === "normal" &&
      "px-8 py-3 bg-yellow rounded-xl text-sm font-bold text-white",
    variation === "plain" &&
      "px-12 py-3 border-2 border-darker-text rounded-xl font-bold text-sm text-darker-text"
  );
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
