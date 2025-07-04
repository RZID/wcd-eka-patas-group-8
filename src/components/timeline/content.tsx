// Deps
import Image from "next/image";
import classNames from "classnames";
import { GoDotFill } from "react-icons/go";

// Components
import Card from "../card";

// Types
import { TimelineType } from "./types";

const TimelineContent = ({
  alignment,
  timeline,
}: {
  alignment?: "left" | "right";
  timeline: TimelineType;
}) => (
  <div
    className={classNames("flex", "w-full", "flex-row", "items-center", "py-5")}
  >
    {alignment === "right" && (
      <div className={classNames("w-10", "h-1", "bg-orange-600")} />
    )}
    <div className={classNames("flex-1")}>
      <Card hasNoPadding className={classNames("flex", "flex-col", "gap-y-5")}>
        <div className={classNames("flex", "flex-col", "gap-y-2", "p-5")}>
          <h1
            className={classNames(
              "flex-1",
              "text-lg",
              "font-bold",
              "text-stone-900"
            )}
          >
            {timeline.title}
          </h1>

          <div className={classNames("text-neutral-600")}>
            {Array.isArray(timeline.desc) ? (
              timeline.desc.map((desc, key) => (
                <div
                  className={classNames("flex", "flex-row", "gap-x-2")}
                  key={`timeline-${key}`}
                >
                  <div className={classNames("pt-1", "px-1")}>
                    <GoDotFill />
                  </div>

                  <p className={classNames("flex-1")}>{desc}</p>
                </div>
              ))
            ) : (
              <p>{timeline.desc}</p>
            )}
          </div>
        </div>

        <Image
          src={timeline.image}
          alt="Timeline image"
          className={classNames("h-64", "object-cover", "w-full")}
        />
      </Card>
    </div>
    {alignment === "left" && (
      <div className={classNames("w-10", "h-1", "bg-orange-600")} />
    )}
  </div>
);

export default TimelineContent;
