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
  AUTH_SWITCH = 'AUTH_SWITCH',
  AUTH_ERROR = 'AUTH_ERROR',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
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
  REGISTER = 'Register',
  LOGIN = 'Sign in',
}

export interface Tutorial {
  selector: string;
  text: string;
}

export const enum Storage {
  TUTORIAL = 'tutorial',
  COMPLETE = 'complete',
}
