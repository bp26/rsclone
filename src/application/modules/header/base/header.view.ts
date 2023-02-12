import { queryHTMLElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { authController } from '../../auth/base/auth.controller';
import { EmitterEventName, HTMLTag } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { IUser } from '../../../types/interfaces';

class HeaderView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.header__root');
  }

  public render(): void {
    const wrapper = new Element(this.root, HTMLTag.DIV, 'header__wrap');
    wrapper.node.innerHTML = `
        <div class="block-header-content">
          <div class="block__logo">
            <svg height="30px" width="30px">
              <use href="#logo"></use>
            </svg>
            <h1 class="title-logo">Rush</h1>
          </div>
          <nav class="block__navigation">
            <ul class="nav-item">
              <li class="nav-list">
                <a class="nav-list__link routing" href="/">Home</a>
              </li>
              <li class="nav-list">
                <a class="nav-list__link routing" href="/documentation">Documentation</a>
              </li>
              <li class="nav-list">
                <a class="nav-list__link routing" href="/lessons">Lessons</a>
              </li>
              <li class="nav-list">
                <a class="nav-list__link routing" href="/roadmap">RoadMap</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="wrapper-controls">
          <div class="block__toggle-content">
            <button class="button-toggle">
              <span>Dark</span>
            </button>
            <button class="button-toggle button-toggle_en">
              <span>En</span>
            </button>
          </div>
          <div class='header-auth'>
            <button class='header-auth__sign header-auth__button'>Sign in</button>
          </div>
        </div>
    `;

    this.bind();
    this.subscribe();
  }

  private renderSignedAuth(user: IUser) {
    const headerAuth = queryHTMLElement('.header-auth');
    headerAuth.innerHTML = `
      <div class='header-auth__profile'>
        <a class="header-auth__profile routing" href='/profile'>
          <svg height="50px" width="50px">
            <use href="#user"></use>
          </svg>
        </a>
      </div>
      <span class='header-auth__welcome'>Welcome, ${user.login}</span>
      <button class='header-auth__logout header-auth__button'>Logout</button>
    `;

    this.bindSigned();
  }

  private bind() {
    const sign = queryHTMLElement('.header-auth__sign');
    sign.onclick = () => authController.showModal();
  }

  private bindSigned() {
    const logout = queryHTMLElement('.header-auth__logout');
    logout.onclick = () => authController.logout();
  }

  private subscribe() {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.renderSignedAuth.bind(this));
  }
}

export const headerView = new HeaderView();
