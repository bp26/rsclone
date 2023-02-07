import { AuthMode } from './enums';

type AuthEvents = {
  AUTH_SWITCH: (mode: AuthMode) => void;
  AUTH_ERROR: (error: string) => void;
  AUTH_SUCCESS: () => void;
  AUTH_LOGOUT: () => void;
};

export type EmitterEvents = AuthEvents;
