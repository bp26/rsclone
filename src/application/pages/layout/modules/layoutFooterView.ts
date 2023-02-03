import { getSafeElement } from '../../../utils/helpers';

export class LayoutFooterView {
  private root: HTMLElement;
  constructor() {
    const root = document.querySelector('.footer__root');
    this.root = getSafeElement(root);
  }

  public render(): void {
    const footer = document.createElement('div');
    footer.classList.add('footer__wrap');
    footer.innerHTML = `
        <div class="githubs-logo">
          <div class="github-art">
            <svg height="30px" width="30px">
              <use href="#github"></use>
            </svg>
          </div>
          <div class="github-alex">
            <svg height="30px" width="30px">
              <use href="#github"></use>
            </svg>
          </div>
          <div class="github-menther">
            <svg height="30px" width="30px">
              <use href="#github"></use>
            </svg>
          </div>
        </div>
        <p class="year-create">2023</p>
        <div class="rs-logo">
        <svg height="50px" width="150px">
          <use href='#rs-school'></use>
        </svg>
        </div>
    `;
    this.root.append(footer);
  }
}
