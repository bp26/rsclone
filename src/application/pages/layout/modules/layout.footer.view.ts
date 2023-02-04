import { getSafeElement } from '../../../utils/helpers';

class LayoutFooterView {
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
          <div>
            <a class="github-art" href="https://github.com/Arterixs" target="_blank">
              <svg height="70px" width="70px">
                <use href="#github"></use>
              </svg>
            </a>
          </div>
          <div>
            <a class="github-alex" href="https://github.com/AlexeiTim" target="_blank">
              <svg height="70px" width="70px">
                <use href="#github"></use>
              </svg>
            </a>
          </div>
          <div>
            <a class="github-menther" href="https://github.com/bp26" target="_blank">
              <svg height="70px" width="70px">
                <use href="#github"></use>
              </svg>
            </a>
          </div>
        </div>
        <p class="year-create">2023</p>
        <div class="rs-logo">
          <a class="rs-logo__link" href="https://rs.school/" target="_blank">
            <svg height="120px" width="190px">
              <use href='#rs-school'></use>
            </svg>
          </a>
        </div>
    `;
    this.root.append(footer);
  }
}

export const layoutFooterView = new LayoutFooterView();
