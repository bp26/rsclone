import { EmitterCallback } from './types';

export interface EmitterEvents {
  [key: string]: EmitterCallback[];
}

export interface RoadData {
  name: string;
  p1: string;
  p2: string;
  name_links: string[];
  links: string[];
}
