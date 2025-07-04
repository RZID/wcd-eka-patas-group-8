import classNames from "classnames";
import { FaLocationDot, FaUtensils } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";

const StepIcon = ({ type }: { type: string }) => {
  const icon =
    type === "start" ? (
      <FaLocationDot />
    ) : type === "rest" ? (
      <FaUtensils />
    ) : (
      <MdMyLocation />
    );

  return (
    <div className={classNames("border-4", "rounded-full", "p-2")}>{icon}</div>
  );
};

export default StepIcon;
