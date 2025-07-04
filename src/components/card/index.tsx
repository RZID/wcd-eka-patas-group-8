// Deps
import classNames from "classnames";

// Types
import CardProps from "./types";

const Card = (props: CardProps) => {
  // Props
  const { excludeRounded = [], children } = props;

  // Arbitary values
  const roundedClasses = {
    "rounded-tl-2xl": !excludeRounded.includes("top-left"),
    "rounded-tr-2xl": !excludeRounded.includes("top-right"),
    "rounded-bl-2xl": !excludeRounded.includes("bottom-left"),
    "rounded-br-2xl": !excludeRounded.includes("bottom-right"),
  };

  return (
    <div
      className={classNames(
        !props.hasNoPadding && "p-5",
        "shadow",
        "bg-white",
        "overflow-hidden",
        roundedClasses,
        props.className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
