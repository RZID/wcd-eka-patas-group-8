import { JSX } from "react";

export default interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  hasNoPadding?: boolean;
  excludeRounded?: (
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
  )[];
}
