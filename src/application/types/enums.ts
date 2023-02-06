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

export const enum EmitterViewEvents {
  AUTH_SWITCH = 'AUTH_SWITCH',
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
