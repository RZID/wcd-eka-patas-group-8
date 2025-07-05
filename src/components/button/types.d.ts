import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "transparent" | "outline" | "primary" | "outline-primary";
  circle?: boolean;
  noFullWidth?: boolean;
}
