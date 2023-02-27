import { queryHTMLElement } from '../../../utils/helpers';
import { homeController } from './home.controller';

class HomeView {
  private root: HTMLElement;

  constructor() {
    this.root = queryHTMLElement('.main__root');
  }

  public render(): void {
    this.root.innerHTML = '';
    const container = document.createElement('article');
    container.classList.add('home__container');
    container.innerHTML = `
      <section class="home-start container-xxl">
        <div class="start-content">
          <h2 class="home-title">As long as dreamers keep dreaming, you will code and succeed!</h2>
          <button class="home-start-button rounded button">
            <span>Get started</span>
          </button>
        </div>
        <div class="sloth-start"></div>
      </section>
      <section class="home__traine container-xxl">
        <div class="sloth-traine img-fluid"></div>
        <div class="traine-content">
          <h2 class="home-title">Training is 80% practical</h2>
          <p class="home-text">
            There are many good books on the Internet, but you won't become a programmer
            by reading books. To become a programmer, you need to program a lot. JSRush is an online JavaScript
            programming course that is 80% hands-on. Exactly what you need to become a JavaScript programmer.
          </p>
        </div>
      </section>
      <section class="home__lern container-xxl">
        <div class="lern-content">
          <h2 class="home-title">Learn JavaScript online anytime</h2>
          <p class="home-text home-text_traine">
          Practice at your own pace, with the regularity that suits you. There is no need to wait until
          the group is recruited and adapt to a tight schedule. Just click "Get Started" and dive into
          the exciting world of JavaScript today!
          </p>
        </div>
        <div class="sloth-lern"></div>
      </section>
      <section class="home__check container-xxl">
        <div class="sloth-check"></div>
        <div class="check-content">
          <h2 class="home-title">Instant task check</h2>
          <p class="home-text">
            Do you know the situation when you submitted a task/work for verification,
            and you had to wait a week for the results, because inspector busy? This is
            the case in most face-to-face courses. In JSRush, you get the results of checking
            a task in less than a second after clicking the "Check" button.
          </p>
        </div>
      </section>
    `;

    this.root.append(container);
    this.bind();
  }

  private bind(): void {
    const start = queryHTMLElement('.home-start-button');
    start.onclick = () => homeController.start();
  }
}

export const homeView = new HomeView();
