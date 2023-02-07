import { AuthMode } from './enums';

type AuthEvents = {
  AUTH_SWITCH: (mode: AuthMode) => void;
  AUTH_ERROR: (error: string) => void;
};

export type EmitterEvents = AuthEvents;
