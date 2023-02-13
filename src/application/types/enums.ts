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

export const enum EmitterViewEvents {
  HOME_UPDATE = 'HOME_UPDATE',
  LAYOUT_UPDATE = 'LAYOUT_UPDATE',
}

export interface Tutorial {
  selector: string;
  text: string;
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
  GWASP = 'GWASP',
  PACKAGES = 'Packages',
  NPM = 'npm',
  YARN = 'yarn',
  PNPM = 'pnpm',
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
