import { getSafeElement, queryHTMLElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { authController } from '../../auth/base/auth.controller';
import { EmitterEventName, HTMLTag, Theme } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { IUser } from '../../../types/interfaces';
import { headerController } from './header.controller';
import router from '../../../router/router';

class HeaderView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.header__root');
    this.subscribe();
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
            <a class='header__navlink header__navlink_lessons nav-link routing disabled' href='/lessons'>Lessons</a>
            <a class='header__navlink nav-link routing' href='/roadmap'>RoadMap</a>
          </nav>
          <div class='header__settings navbar-nav'>
            <div class='header__theme header__dropdown dropdown'>
              <a class='header__navlink header__dropbtn nav-link dropdown-toggle' data-bs-toggle='dropdown'>Theme</a>
              <div class='header__dropmenu dropdown-menu'>
                <a class='header__dropitem dropdown-item header__dropitem_chosen' data-value='Dark'>Dark</a>
                <a class='header__dropitem dropdown-item' data-value='Light'>Light</a>
              </div>
            </div>
          </div>
          <div class='header__auth navbar-nav align-items-center'>
            <a class='header__button header__sign nav-link'>Sign in</a>
          </div>
        </div>
      </div>
    `;

    this.bind();
    router.hungRouteListeners('routing');
  }

  public renderSignedAuth(user: IUser) {
    const headerAuth = queryHTMLElement('.header__auth');
    headerAuth.innerHTML = `
      <div class='header__profile'>
        <a class='header__profile-iconlink routing-signed' href='/profile'>
          <svg height="50px" width="50px">
            <use href="#user"></use>
          </svg>
        </a>
        <a class ='header__profile-textlink nav-link routing-signed' href='/profile'>Profile</a>
      </div>
      <span class='header__welcome'>${user.login}</span>
      <a class='header__logout header__button nav-link'>Logout</a>
    `;

    this.bindSigned();
    this.enableLessonsLink();
    router.hungRouteListeners('routing-signed');
  }

  private enableLessonsLink() {
    const lessonsLink = queryHTMLElement('.header__navlink_lessons');
    lessonsLink.classList.remove('disabled');
  }

  private switchTheme(theme: Theme) {
    const dark = queryHTMLElement(`.header__theme [data-value="${Theme.DARK}"]`);
    const light = queryHTMLElement(`.header__theme [data-value="${Theme.LIGHT}"]`);

    switch (theme) {
      case Theme.DARK:
        dark.classList.add('header__dropitem_chosen');
        light.classList.remove('header__dropitem_chosen');
        break;
      case Theme.LIGHT:
        dark.classList.remove('header__dropitem_chosen');
        light.classList.add('header__dropitem_chosen');
        break;
    }
  }

  private bind() {
    const sign = queryHTMLElement('.header__sign');
    const theme = queryHTMLElement('.header__theme');

    sign.onclick = () => authController.showModal();

    theme.onclick = (e) => {
      const target = getSafeElement(e.target);
      if (target.classList.contains('header__dropitem')) {
        switch (target.dataset.value) {
          case Theme.DARK:
            headerController.setTheme(Theme.DARK);
            break;
          case Theme.LIGHT:
            headerController.setTheme(Theme.LIGHT);
            break;
        }
      }
    };
  }

  private bindSigned() {
    const logout = queryHTMLElement('.header__logout');
    logout.onclick = () => authController.logout();
  }

  private subscribe() {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.renderSignedAuth.bind(this));
    emitter.on(EmitterEventName.GLOBAL_THEME, this.switchTheme.bind(this));
  }
}

export const headerView = new HeaderView();
