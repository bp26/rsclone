import { AuthMode, AuthErrorType } from './enums';
import { IUser } from './interfaces';

type AuthEvents = {
  AUTH_SWITCH: (mode: AuthMode) => void;
  AUTH_ERROR: (type: AuthErrorType, error: string) => void;
  AUTH_SUCCESS: () => void;
  AUTH_LOGOUT: () => void;
  GLOBAL_USER_LOAD_SUCCESS: (user: IUser) => void;
  GLOBAL_USER_LOAD_ERROR: () => void;
  GLOBAL_USER_UPDATE_SUCCESS: () => void;
  GLOBAL_USER_UPDATE_ERROR: () => void;
};

export type EmitterEvents = AuthEvents;
