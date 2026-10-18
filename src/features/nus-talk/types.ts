export const areaIds = [
  "algorithms",
  "ai",
  "graphics",
  "security",
  "databases",
  "hci",
  "retrieval",
  "networks",
  "parallel",
  "languages",
  "software",
] as const;
export type AreaId = (typeof areaIds)[number];
export type Area = {
  id: AreaId;
  en: string;
  vi: string;
  question: string;
  explanation: string;
  application: string;
  interest: string;
  careers: { title: string; work: string }[];
  color: string;
  symbol: string;
};
export type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  areaId?: AreaId;
};
export type Session = {
  mode: "presentation" | "exploration";
  slide: number;
  area: AreaId;
};
export type DemoProps = { motionAllowed: boolean };
