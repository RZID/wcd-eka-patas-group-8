"use client";

// Deps
import { useRef } from "react";
import classNames from "classnames";
import { FiSearch } from "react-icons/fi";

// Components
import Button from "../button";

// Types
import { SearchType } from "./types";

const Search = (props: SearchType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={classNames(
        "p-2",
        "flex",
        "border",
        "gap-x-2",
        "flex-row",
        "bg-white",
        "cursor-text",
        "rounded-full",
        "items-center",
        "text-orange-600",
        "border-orange-600",
        "w-full"
      )}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        inputRef.current?.focus();
      }}
    >
      <div className={classNames("pl-2")}>
        <FiSearch className={classNames("text-2xl")} />
      </div>
      <input
        ref={inputRef}
        placeholder={props.placeholder}
        className={classNames(
          "flex-1",
          "min-w-0",
          "focus:ring-0",
          "text-stone-900",
          "focus:border-none",
          "focus:outline-none",
          "placeholder:text-neutral-600"
        )}
      />
      <div className={classNames("flex", "flex-row")}>
        <Button noFullWidth variant="primary">
          Cari
        </Button>
      </div>
    </div>
  );
};

export default Search;
