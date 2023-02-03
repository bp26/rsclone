import { getSafeElement } from '../../../utils/helpers';

export class LayoutHeaderView {
  private root: HTMLElement;
  constructor() {
    const root = document.querySelector('.header__root');
    this.root = getSafeElement(root);
  }
  public render(): void {
    const header = document.createElement('div');
    header.classList.add('header__wrap');
    header.innerHTML = `
        <div class="block__logo">
          <svg height="30px" width="30px">
            <use href="#logo"></use>
          </svg>
          <h1 class="title-logo">Rush</h1>
        </div>
        <nav class="block__navigation">
          <ul class="nav-item">
            <li class="nav-list">
              <a href="">Home</a>
            </li>
            <li class="nav-list">
              <a href="">Documentaition</a>
            </li>
            <li class="nav-list">
              <a href="">Lessons</a>
            </li>
            <li class="nav-list">
              <a href="">RoadMap</a>
            </li>
          </ul>
        </nav>
        <div class="wrapper-controls">
          <div class="block__toggle-content">
            <button class="button-toggle">
              <span>Dark</span>
            </button>
            <button class="button-toggle button-toggle_en">
              <span>En</span>
            </button>
          </div>
          <div class="block-autorization">
            <div class="buttons__autorization">
              <button class="button-autorization">
                <span>Sign in</span>
              </button>
              <button class="button-autorization">
                <span>Login</span>
              </button>
            </div>
            <div class="block-profile">
              <svg height="50px" width="50px">
                <use href="#user"></use>
              </svg>
            </div>
          </div>
        </div>
    `;
    this.root.append(header);
  }
}
