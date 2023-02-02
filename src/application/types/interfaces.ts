import { EmitterCallback } from "./types";

export interface EmitterEvents {
  [key: string]: EmitterCallback[];
}
