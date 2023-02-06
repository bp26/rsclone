import { EmitterCallback } from './types';

export interface EmitterEvents {
  [key: string]: EmitterCallback[];
}

export interface IUser {
  login: string;
  password: string;
}
