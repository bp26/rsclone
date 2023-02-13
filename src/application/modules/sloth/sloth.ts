import { getSafeElement } from './../../utils/helpers';
import { Storage, Tutorial } from './../../types/enums';
import { exampleTutorial } from '../../utils/constants/slothExampleTutorialArray';
import { heroIcon } from '../../utils/constants/slothIcons/icons';
class Sloth {
  tutorial: Tutorial[];
  count: number;
  constructor() {
    this.tutorial = exampleTutorial;
    this.count = 0;
  }

  render() {
    const html = document.createElement('div');
    html.innerHTML = `
     <div class="my-modal position-fixed top-0 start-0 bottom-0 end-0 bg-black"></div>
     <div>
     <p class="sloth__text position-absolute start-50 translate-middle-x bg-primary rounded-4 p-2" style=" z-index:6"></p>
    </div>
    <div  class="sloth__img position-absolute" style="z-index: 5;">
      ${heroIcon}
    </div>
    `;

    document.body.append(html);
    if (localStorage.getItem(Storage.TUTORIAL)) {
      return;
    } else {
      this.showSloth();
      this.initTutorial();
    }
  }
  initTutorial() {
    this.count = 0;
    const coverTutorial = document.createElement('div');
    coverTutorial.classList.add('cover-tutorial');
    coverTutorial.style.cssText = 'position:fixed; top:0;bottom:0;left:0;right:0; height:100vh;z-index:150; background-color: rbga(0,0,0,0.6)';
    document.body.append(coverTutorial);
    this.showSlothTutorial(this.tutorial[this.count]);
    coverTutorial.addEventListener('click', this.startTutorialHandler);
  }

  hiddenPrev(selector: string) {
    if (selector !== '') {
      const block = getSafeElement(document.querySelector(selector));
      block.classList.remove('show-tutorial-block');
    }
  }

  changeCount() {
    this.count = this.count + 1;
  }

  showSlothTutorial({ selector, text }: Tutorial) {
    if (selector !== '') {
      const block = getSafeElement(document.querySelector(selector));
      block.classList.add('show-tutorial-block');
    }
    const textBlock = getSafeElement(document.querySelector('.sloth__text'));
    textBlock.textContent = text;
    this.writerBot(textBlock, text);
  }

  writerBot = (element: Element, text: string) => {
    let start = 1;
    const stringLength = text.length;
    const intervalID = setInterval(() => {
      element.textContent = text.slice(0, start);
      start++;
      if (start === stringLength) {
        clearInterval(intervalID);
      }
    }, 50);
  };

  startTutorialHandler = () => {
    const cover = getSafeElement(document.querySelector('.cover-tutorial'));
    this.changeCount();
    if (this.count < this.tutorial.length) {
      this.showSlothTutorial(this.tutorial[this.count]);
      this.hiddenPrev(this.tutorial[this.count - 1].selector);
    } else {
      localStorage.setItem(Storage.TUTORIAL, Storage.COMPLETE);
      this.hiddenPrev(this.tutorial[this.count - 1].selector);
      this.hiddenSloth();
      cover.removeEventListener('click', this.startTutorialHandler);
      cover.remove();
    }
  };

  showSloth() {
    document.body.style.overflow = 'hidden';
    getSafeElement(document.querySelector('.my-modal')).classList.add('show-modal');
    getSafeElement(document.querySelector('.sloth__text')).classList.add('show-text');
    getSafeElement(document.querySelector('.sloth__img')).classList.add('show-img');
  }

  hiddenSloth = () => {
    document.body.style.overflow = '';
    getSafeElement(document.querySelector('.my-modal')).classList.remove('show-modal');
    getSafeElement(document.querySelector('.sloth__text')).classList.remove('show-text');
    getSafeElement(document.querySelector('.sloth__img')).classList.remove('show-img');
  };
}

export default new Sloth();
