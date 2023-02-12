import { EmitterCallback } from './types';

export interface EmitterEvents {
  [key: string]: EmitterCallback[];
}

export interface Lessons {
  id: number;
  title: string;
  description: string;
  price: string;
  buttonsArray: Array<string>;
  answer: string;
  answerBlock: () => void;
  selector: string;
}
