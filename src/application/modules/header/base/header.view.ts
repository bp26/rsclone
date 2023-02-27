import { getFirstLetter, queryHTMLElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { authController } from '../../auth/base/auth.controller';
import { EmitterEventName, HTMLTag } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { IUser } from '../../../types/interfaces';
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
            <a class='header__navlink nav-link routing' href='/' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</a>
            <a class='header__navlink nav-link routing' href='/documentation' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Documentation</a>
            <a class='header__navlink header__navlink_lessons nav-link routing disabled' href='/lessons' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Lessons</a>
            <a class='header__navlink nav-link routing' href='/roadmap' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">RoadMap</a>
            <a class='header__navlink nav-link routing' href='/quiz' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Quiz</a>
          </nav>
          <div class='header__auth navbar-nav align-items-center'>
            <a class='header__button header__sign nav-link button'>Sign in</a>
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
        <a class='header__profile-iconlink routing-signed' href='/profile' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"></a>
        <a class ='header__profile-textlink nav-link routing-signed' href='/profile' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Profile</a>
      </div>
      <span class='header__login'>${user.login}</span>
      <a class='header__logout header__button nav-link button'>Logout</a>
    `;

    this.bindSigned();
    this.enableLessonsLink();
    this.setUserAvatar(user);
    router.hungRouteListeners('routing-signed');
  }

  private setUserAvatar(user: IUser): void {
    const userLink = queryHTMLElement('.header__profile-iconlink');
    const userIcon = `${user.avatar.secure_url ? `<img src=${user.avatar.secure_url} />` : `<span>${getFirstLetter(user.login)}</span>`}`;
    userLink.innerHTML = userIcon;
  }

  private enableLessonsLink() {
    const lessonsLink = queryHTMLElement('.header__navlink_lessons');
    lessonsLink.classList.remove('disabled');
  }

  private bind() {
    const sign = queryHTMLElement('.header__sign');
    sign.onclick = () => authController.showModal();
  }

  private bindSigned() {
    const logout = queryHTMLElement('.header__logout');
    logout.onclick = () => authController.logout();
  }

  private subscribe() {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.renderSignedAuth.bind(this));
    emitter.on(EmitterEventName.GLOBAL_USER_UPDATE_AVATAR, this.setUserAvatar.bind(this));
  }
}

export const headerView = new HeaderView();
