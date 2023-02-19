import { AuthMode, AuthErrorType, Theme } from './enums';
import { IMessage, INotification, IUser } from './interfaces';

export type EmitterEvents = {
  AUTH_SWITCH: (mode: AuthMode) => void;
  AUTH_ERROR: (type: AuthErrorType, error: string) => void;
  AUTH_SUCCESS: () => void;
  AUTH_LOGOUT: () => void;

  GLOBAL_USER_LOAD_SUCCESS: (user: IUser) => void;
  GLOBAL_USER_LOAD_ERROR: () => void;
  GLOBAL_USER_UPDATE_LESSONS: () => void;
  GLOBAL_THEME: (theme: Theme) => void;

  LESSONS_SOLVED: (coins: number) => void;

  CHAT_RECEIVED_MESSAGE: (message: IMessage) => void;
  CHAT_RECEIVED_CONNECTION: (notification: INotification) => void;
  CHAT_NOTIFICATIONS_SET: (notifications: number) => void;
  CHAT_NOTIFICATIONS_RESET: () => void;
  CHAT_SENT_MESSAGE: () => void;
  CHAT_NOTIFIED: () => void;
};
