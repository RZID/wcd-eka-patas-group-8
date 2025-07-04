export interface TimelineType {
  type: "start" | "end" | "rest";
  title: string;
  desc: string | string[];
  image: string;
}
