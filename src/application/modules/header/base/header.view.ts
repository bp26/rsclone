import { queryHTMLElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { authController } from '../../auth/base/auth.controller';
import { EmitterEventName, HTMLTag, Lang, Theme } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { IUser } from '../../../types/interfaces';
import { headerController } from './header.controller';

class HeaderView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.header__root');
  }

  public render(): void {
    const wrapper = new Element(this.root, HTMLTag.DIV, 'header__wrapper navbar navbar-expand-lg navbar-dark');
    wrapper.node.innerHTML = `
      <div class='header__container container-xxl'>
        <a class='header__brand navbar-brand d-flex align-items-center routing' role='button' href="/">
          <div class='header__logo p-1'>RS</div>
          <h1 class='header__title'>Rush</h1>
        </a>
        <button class='header__toggle navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-expanded="false">
            <div class='navbar-toggler-icon'></div>
        </button>
        <div class='header__collapse collapse navbar-collapse justify-content-between align-items-center' id='navbarCollapse'>
          <nav class='header__nav navbar-nav'>
            <a class='header__navlink nav-link routing' href='/'>Home</a>
            <a class='header__navlink nav-link routing' href='/documentation'>Documentation</a>
            <a class='header__navlink nav-link routing' href='/lessons'>Lessons</a>
            <a class='header__navlink nav-link routing' href='/roadmap'>RoadMap</a>
          </nav>
          <div class='header__settings navbar-nav'>
            <a class='header__button header__lang nav-link'>English</a>
            <a class='header__button header__theme nav-link'>Dark</a>
          </div>
          <div class='header__auth navbar-nav align-items-center'>
            <a class='header__button header__sign nav-link'>Sign in</a>
          </div>
        </div>
      </div>
    `;

    this.bind();
    this.subscribe();
  }

  private renderSignedAuth(user: IUser) {
    const headerAuth = queryHTMLElement('.header__auth');
    headerAuth.innerHTML = `
      <div class='header__profile'>
        <a class='header__profile-iconlink routing' href='/profile'>
          <svg height="50px" width="50px">
            <use href="#user"></use>
          </svg>
        </a>
        <a class ='header__profile-textlink nav-link routing' href='/profile'>Profile</a>
      </div>
      <span class='header__welcome'>${user.login}</span>
      <a class='header__logout header__button nav-link'>Logout</a>
    `;

    this.bindSigned();
  }

  private switchLang(lang: Lang) {
    const langButton = queryHTMLElement('.header__lang');
    langButton.textContent = lang;
  }

  private switchTheme(theme: Theme) {
    const themeButton = queryHTMLElement('.header__theme');
    themeButton.textContent = theme;
  }

  private bind() {
    const sign = queryHTMLElement('.header__sign');
    const theme = queryHTMLElement('.header__theme');
    const lang = queryHTMLElement('.header__lang');

    sign.onclick = () => authController.showModal();
    theme.onclick = () => headerController.switchTheme();
    lang.onclick = () => headerController.switchLang();
  }

  private bindSigned() {
    const logout = queryHTMLElement('.header__logout');
    logout.onclick = () => authController.logout();
  }

  private subscribe() {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.renderSignedAuth.bind(this));
    emitter.on(EmitterEventName.GLOBAL_LANGUAGE, this.switchLang.bind(this));
    emitter.on(EmitterEventName.GLOBAL_THEME, this.switchTheme.bind(this));
  }
}

export const headerView = new HeaderView();
