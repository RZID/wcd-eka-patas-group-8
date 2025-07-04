import classNames from "classnames";
import { TimelineType } from "./types";
import TimelineContent from "./content";
import StepIcon from "./icon";

const TimelineStep = ({
  step,
  index,
}: {
  step: TimelineType;
  index: number;
}) => {
  const isLeft = index % 2 !== 0;
  const isRight = !isLeft;

  return (
    <div
      className={classNames(
        "flex",
        "w-full",
        "flex-row",
        "relative",
        "text-orange-600"
      )}
    >
      <div className={classNames("flex-1", "hidden", "lg:block")}>
        {isLeft && <TimelineContent alignment="left" timeline={step} />}
      </div>
      <div>
        <div
          className={classNames("flex", "flex-col", "items-center", "h-full")}
        >
          <div className={classNames("bg-orange-600", "w-1", "flex-1")} />
          <StepIcon type={step.type} />
          <div className={classNames("bg-orange-600", "w-1", "flex-1")} />
        </div>
      </div>
      <div className={classNames("flex-1", "relative")}>
        {isRight ? (
          <TimelineContent alignment="right" timeline={step} />
        ) : (
          <div className={classNames("block", "lg:hidden")}>
            <TimelineContent alignment="right" timeline={step} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineStep;
