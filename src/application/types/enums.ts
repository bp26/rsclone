export const enum HTMLTag {
  DIV = 'div',
  P = 'p',
  H1 = 'h1',
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
  CANVAS = 'canvas',
  A = 'a',
}

export const enum EmitterEventName {
  AUTH_SWITCH = 'AUTH_SWITCH',
  AUTH_ERROR = 'AUTH_ERROR',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  GLOBAL_USER_LOAD_SUCCESS = 'GLOBAL_USER_LOAD_SUCCESS',
  GLOBAL_USER_LOAD_ERROR = 'GLOBAL_USER_LOAD_ERROR',
  GLOBAL_USER_UPDATE_SUCCESS = 'GLOBAL_USER_UPDATE_SUCCESS',
  GLOBAL_USER_UPDATE_ERROR = 'GLOBAL_USER_UPDATE_ERROR',
  GLOBAL_LANGUAGE = 'GLOBAL_LANGUAGE',
  GLOBAL_THEME = 'GLOBAL_THEME',
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

export const enum RoadmapRectName {
  INTERNET = 'Internet',
  DNS = 'DNS',
  DOMAIN = 'Domain',
  HOSTING = 'Hosting',
  NETWORK = 'Network',
  HTTP = 'HTTP',
  BROWSER = 'Browser',
  HTML = 'HTML',
  CSS = 'CSS',
  JAVA_SCRIPT = 'JavaScript',
  BASICS = 'Basics',
  SEMANTIC = 'Semantic',
  FORMS = 'Forms',
  BEST_PRACTIES = 'Best Practies',
  ACCESSIBILITY = 'Accessibility',
  SEO_BASIC = 'SEO Basic',
  BASICS_CSS = 'Basics CSS',
  LAYOUTS = 'Layouts',
  MEDIA_QUERY = 'Media Query',
  SYNTAX = 'Syntax',
  DOM = 'DOM',
  AJAX = 'AJAX',
  ES6 = 'ES6+',
  GIT = 'Git',
  GIT_HUB = 'GitHub',
  GIT_LUB = 'GitLab',
  WEB_SECURITY = 'Web Security',
  HTTPS = 'HTTPS',
  CORS = 'CORS',
  CSP = 'CSP',
  OWASP = 'OWASP',
  PACKAGES = 'Packages',
  NPM = 'NPM',
  YARN = 'YARN',
  PNPM = 'PNPM',
}

export const enum ColorRect {
  INTERNET = 'pink',
  HTML = 'blue',
  CSS = 'yellow',
  JAVA_SCRIPT = 'orange',
  GIT = 'brown',
  WEB_SECURITY = 'red',
  PACKAGES = 'green',
}

export enum Colors {
  WARNING = 'warning',
  DARK = 'dark',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SUCCESS = 'success',
}

export const enum Lang {
  EN = 'English',
  RU = 'Russian',
}

export const enum Theme {
  DARK = 'Dark',
  LIGHT = 'Light',
}
