// Deps
import classNames from "classnames";

// Types
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return (
    <button
      className={classNames(
        "py-1",
        "px-5",
        "border",
        "w-full",
        "h-full",
        props.circle ? "rounded-full" : "rounded-2xl",
        "font-semibold",
        "transition-all",
        "hover:cursor-pointer",
        props.variant === "transparent"
          ? classNames(
              "text-white",
              "bg-transparent",
              "hover:bg-white",
              "border-transparent",
              "hover:text-black",
              "hover:border-white"
            )
          : props.variant === "outline"
          ? classNames(
              "text-white",
              "border-white",
              "bg-transparent",
              "hover:bg-white",
              "hover:text-black"
            )
          : props.variant === "outline-primary"
          ? classNames(
              "bg-transparent",
              "text-orange-600",
              "hover:text-white",
              "border-orange-600",
              "hover:bg-orange-600"
            )
          : props.variant === "primary"
          ? classNames("text-white", "border-white", "bg-orange-600")
          : ""
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
