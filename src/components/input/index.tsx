"use client";

// Deps
import { useRef } from "react";
import classNames from "classnames";

// Types
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={classNames(
        "flex",
        "py-1",
        "flex-row",
        "rounded-2xl",
        "items-center",
        "overflow-hidden",
        "text-gray-600",
        "bg-neutral-100",
        "hover:cursor-text"
      )}
    >
      {props.icon && (
        <div className={classNames("text-xl", "px-3")}>{props.icon}</div>
      )}
      <div className={classNames("flex", "flex-col", "flex-1")}>
        {props.label && (
          <p className={classNames("text-xs", "text-gray-400")}>
            {props.label}
          </p>
        )}
        <input
          ref={inputRef}
          placeholder={props.placeholder}
          className={classNames(
            "focus:ring-0",
            "focus:border-none",
            "focus:outline-none",
            "placeholder:text-gray-600"
          )}
        />
      </div>
    </div>
  );
};

export default Input;
