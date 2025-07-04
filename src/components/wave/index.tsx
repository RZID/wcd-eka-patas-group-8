// Deps
import React from "react";
import classNames from "classnames";
import twColors from "tailwindcss/colors";

const Wave = () => {
  return (
    <div className={classNames("w-full", "relative", "bg-stone-100")}>
      <svg
        height="235"
        viewBox="0 0 1440 235"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames("inset-0", "w-full")}
      >
        <path
          fill={twColors.orange[600]}
          d="M.5 192.494c503 158 1156-253.501 1440 0v430H.5v-430z"
        />
        <path
          fillOpacity=".45"
          fill={twColors.orange[600]}
          d="M1 133.483c388 251.5 1382.5-300.001 1440 0v430H1v-430z"
        />
        <path
          fillOpacity=".43"
          fill={twColors.orange[600]}
          d="M1 88.994c484 128.5 1156-253.501 1440 0v430H1v-430z"
        />
      </svg>
    </div>
  );
};

export default Wave;
