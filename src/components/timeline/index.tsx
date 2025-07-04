"use client";

// Deps
import { useState } from "react";
import classNames from "classnames";

// Types
import { TimelineType } from "./types";

// Components
import TimelineStep from "./step";

const Timeline = () => {
  const [steps] = useState<TimelineType[]>([
    {
      type: "start",
      title: "Surabaya",
      desc: "Titik keberangkatan bisa dari garasi kami atau terminal Bungurasih",
      image: "/images/timeline-1.png",
    },
    {
      type: "rest",
      title: "Rest Area KM 575",
      desc: "Titik keberangkatan bisa dari garasi kami atau terminal Bungurasih",
      image: "/images/timeline-2.png",
    },
    {
      type: "end",
      title: "Sampai Tujuan",
      desc: [
        "Untuk penumpang tujuan solo titik pemberhentian ada di terminal Tirtonadi.",
        "Untuk penumpang tujuan Kota Yogya & Magelang, bisa melanjutkan perjalanan.",
      ],
      image: "/images/timeline-3.png",
    },
  ]);

  return (
    <div className={classNames("flex", "flex-col", "lg:items-center")}>
      <div
        className={classNames(
          "w-4",
          "ml-3",
          "lg:ml-0",
          "rounded-full",
          "aspect-square",
          "bg-orange-600"
        )}
      />

      <div className={classNames("flex", "flex-row")}>
        <div className={classNames("flex-1", "hidden", "lg:block")} />
        <div className={classNames("bg-orange-600", "w-1")} />
        <div className={classNames("flex-1")} />
      </div>

      {steps.map((step, index) => (
        <TimelineStep key={`step-${index}`} step={step} index={index} />
      ))}

      {/* Bottom Dot */}
      <div
        className={classNames(
          "w-4",
          "ml-3",
          "lg:ml-0",
          "rounded-full",
          "aspect-square",
          "bg-orange-600"
        )}
      />
    </div>
  );
};

export default Timeline;
