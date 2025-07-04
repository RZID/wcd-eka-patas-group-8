import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TimelineType {
  type: "start" | "end" | "rest";
  title: string;
  desc: string | string[];
  image: StaticImport;
}
