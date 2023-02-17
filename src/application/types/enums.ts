export const enum HTMLTag {
  DIV = 'div',
  P = 'p',
  H2 = 'h2',
  FORM = 'form',
  SPAN = 'span',
  INPUT = 'input',
  BUTTON = 'button',
  UL = 'ul',
  LI = 'li',
  SECTION = 'section',
  IMG = 'img',
  LABEL = 'label',
  SELECT = 'select',
  TABLE = 'table',
  TH = 'th',
  TR = 'tr',
  TD = 'td',
}

export const enum EmitterEventName {
  GLOBAL_USER_LOAD_SUCCESS = 'GLOBAL_USER_LOAD_SUCCESS',
  GLOBAL_USER_LOAD_ERROR = 'GLOBAL_USER_LOAD_ERROR',
  GLOBAL_USER_UPDATE_LESSONS = 'GLOBAL_USER_UPDATE_LESSONS',
  GLOBAL_THEME = 'GLOBAL_THEME',

  AUTH_SWITCH = 'AUTH_SWITCH',
  AUTH_ERROR = 'AUTH_ERROR',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_LOGOUT = 'AUTH_LOGOUT',

  LESSONS_SOLVED = 'LESSONS_SOLVED',

  CHAT_RECEIVED_MESSAGE = 'CHAT_RECEIVED_MESSAGE',
  CHAT_RECEIVED_CONNECTION = 'CHAT_RECEIVED_CONNECTION',
  CHAT_NOTIFICATIONS_SET = 'CHAT_NOTIFICATIONS_SET',
  CHAT_NOTIFICATIONS_RESET = 'CHAT_NOTIFICATIONS_RESET',
  CHAT_SENT_MESSAGE = 'CHAT_SENT_MESSAGE',
}

export const enum StatusCode {
  OK = '200',
  BAD_REQUEST = '400',
  UNAUTHORIZED = '401',
  FORBIDDEN = '403',
  NOT_FOUND = '404',
  CONFLICT = '409',
  SERVER_ERROR = '500',
}

export const enum AuthMode {
  REGISTER = 'Sign up',
  LOGIN = 'Sign in',
}

export const enum AuthSwitchName {
  ALREADY = 'Already have an account?',
  NOT = `Don't have an account yet?`,
}

export const enum AuthErrorType {
  LOGIN = 'login',
  PASSWORD = 'password',
}

export const enum AuthErrorMessage {
  NO_LOGIN = 'Please enter your login',
  NO_PASSWORD = 'Please enter your password',
  SHORT_LOGIN = 'Login should be at least 3 characters long',
  SHORT_PASSWORD = 'Password should be at least 6 characters long',
}

export const enum Storage {
  TUTORIAL = 'tutorial',
  COMPLETE = 'complete',
}

export enum Colors {
  WARNING = 'warning',
  DARK = 'dark',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SUCCESS = 'success',
}

export const enum Theme {
  DARK = 'Dark',
  LIGHT = 'Light',
}

export const enum MessageType {
  CONNECTION = 'CONNECTION',
  MESSAGE = 'MESSAGE',
}
