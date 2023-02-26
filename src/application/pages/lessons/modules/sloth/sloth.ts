import { getSafeElement } from '../../../../utils/helpers';
import { Storage } from '../../../../types/enums';
import { Tutorial } from '../../../../types/interfaces';
import { heroIcon } from '../../../../utils/constants/icons/slothIcons';

class Sloth {
  count: number;
  writerIntervalID: NodeJS.Timer | string;
  audio: HTMLAudioElement;
  constructor() {
    this.count = 0;
    this.writerIntervalID = '';
    this.audio = new Audio('https://zvukipro.com/uploads/files/2019-07/1564068640_cf9b99726102246.mp3');
  }

  render(data: Tutorial[]) {
    const html = document.createElement('div');
    html.classList.add('sloth-block');
    html.innerHTML = `
     <div class="my-modal position-fixed top-0 start-0 bottom-0 end-0 bg-black"></div>
     <div class="d-flex flex-column">
       <p class="sloth__text position-absolute start-50 translate-middle-x bg-primary rounded-4 p-2 d-flex  flex-column" style=" z-index:6"></p>
     </div>
     <div  class="sloth__img position-absolute" style="z-index: 5;">
      ${heroIcon}
     </div>
    `;
    const checkElement = document.querySelector('.sloth-block');
    if (!checkElement) document.body.append(html);
    this.showSloth();
    this.initTutorial(data);
  }

  initTutorial(data: Tutorial[]) {
    this.count = 0;
    const coverTutorial = document.createElement('div');
    coverTutorial.classList.add('cover-tutorial');
    coverTutorial.style.cssText = 'position:fixed; top:0;bottom:0;left:0;right:0; height:100vh;z-index:150; background-color: rbga(0,0,0,0.6)';
    document.body.append(coverTutorial);
    this.showSlothTutorial(data[this.count]);
    coverTutorial.addEventListener('click', () => {
      this.startTutorialHandler(data);
    });
  }

  hiddenPrev(selector: string) {
    if (selector !== '') {
      const block = getSafeElement(document.querySelector(selector));
      block.classList.remove('show-tutorial-block');
    }
  }
  createNextButton() {
    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-dark inline-block align-self-end position-relative cursor-pointer click-next inset-0';
    nextButton.style.zIndex = '151';
    nextButton.style.height = '40px';
    nextButton.innerHTML = `Next`;
    return nextButton;
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
    textBlock.style.opacity = '0';
    textBlock.textContent = text;
    textBlock.style.width = 'auto';
    textBlock.style.height = 'auto';
    const currentWidth = textBlock.getBoundingClientRect().width;
    this.writerBot(textBlock, text, currentWidth);
  }

  writerBot = (element: HTMLElement, text: string, width: number) => {
    if (this.writerIntervalID !== '') {
      clearInterval(this.writerIntervalID);
    }
    element.style.width = width + 'px';
    element.style.height = element.getBoundingClientRect().height + 40 + 'px';
    element.style.opacity = '1';
    let start = 1;
    this.audio.play();
    const stringLength = text.length;
    this.writerIntervalID = setInterval(() => {
      start++;
      element.textContent = text.slice(0, start);
      if (start === stringLength) {
        this.audio.pause();
        element.append(this.createNextButton());
        clearInterval(this.writerIntervalID);
      }
    }, 50);
  };

  startTutorialHandler = (data: Tutorial[]) => {
    const cover = getSafeElement(document.querySelector('.cover-tutorial'));
    const sloth = getSafeElement(document.querySelector('.sloth-block'));
    this.changeCount();
    if (this.count < data.length) {
      this.hiddenPrev(data[this.count - 1].selector);
      this.showSlothTutorial(data[this.count]);
    } else {
      this.audio.currentTime = 0;
      clearInterval(this.writerIntervalID);
      this.hiddenPrev(data[this.count - 1].selector);
      this.hiddenSloth();
      cover.removeEventListener('click', () => {
        this.startTutorialHandler(data);
      });
      cover.remove();
      sloth.remove();
    }
  };

  showSloth() {
    document.body.style.overflow = 'hidden';
    getSafeElement(document.querySelector('.my-modal')).classList.add('show-modal');
    getSafeElement(document.querySelector('.sloth__text')).classList.add('show-text');
    getSafeElement(document.querySelector('.sloth__img')).classList.add('show-img');
  }

  hiddenSloth = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    document.body.style.overflow = '';
    getSafeElement(document.querySelector('.my-modal')).classList.remove('show-modal');
    getSafeElement(document.querySelector('.sloth__text')).classList.remove('show-text');
    getSafeElement(document.querySelector('.sloth__img')).classList.remove('show-img');
  };
}

export default new Sloth();
