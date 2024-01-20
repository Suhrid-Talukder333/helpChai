export type CalculationData = {
  ph: number,
  ec: number,
  turb: number;
  alk: number;
  tds: number;
  ca: number | null;
  mg: number | null;
  na: number;
  th: number | null;
  k: number | null;
  cl: number;
  s: number;
  do: number | null;
  fe: number | null;
}

export type CalculationParamerters = [
  "ph",
  "ec",
  "turb",
  "alk",
  "tds",
  "ca",
  "mg",
  "na",
  "th",
  "k",
  "cl",
  "s",
  "do",
  "fe"
]

export type CarouselItem = {
  img: string;
  desc: string;
  buttonIcon: string;
  text: string;
  color: string;
  ref: string;
}

export type ResultType = {
  value: number;
  desc: string;
  img_url: string;
}

export type INDEX = "best" | "good" | "poor" | "worse" | "unfit"
