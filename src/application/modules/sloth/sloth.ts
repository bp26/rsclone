import { heroIcon } from '../../utils/constants/slothIcons/icons';
class Sloth {
  tutorial: { selector: string; text: string }[];
  constructor() {
    this.tutorial = [
      {
        selector: '',
        text: 'HELLO MY NEW FRIEND!! Nice to meet you. My name is Rush. I will help you for get fundamentals knowladge about JavaScript.',
      },
      {
        selector: '.lessons-block',
        text: 'тут уроки короче',
      },
      {
        selector: '.block__navigation',
        text: 'тут навигация',
      },
      {
        selector: '.block-autorization',
        text: 'тут авторизация',
      },
    ];
  }
  render() {
    const root = document.querySelector('body');
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
    root!.append(html);
    this.handler();
    this.initTutorial(this.tutorial);
  }
  handler() {
    const modal = document.querySelector('.my-modal');
    if (modal)
      modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          console.log('click');
          this.hiddenSloth();
        }
      });
  }
  initTutorial(data: { selector: string; text: string }[]) {
    if (localStorage.getItem('tutorial')) {
      return;
    }
    const coverTutorial = document.createElement('div');

    coverTutorial.style.cssText = 'position:fixed; top:0;bottom:0;left:0;right:0; height:100vh;z-index:100; background-color: rbga(0,0,0,0.6)';
    const body = document.querySelector('body');
    body!.append(coverTutorial);
    let count = 0;
    showS(data[count]);
    const startTutorialHandler = () => {
      changeCount();
      if (count < data.length) {
        console.log('show', count, data);
        showS(data[count]);
        hiddenPrev(data[count - 1].selector);
      } else {
        hiddenPrev(data[count - 1].selector);
        coverTutorial.remove();
        this.hiddenSloth();
        localStorage.setItem('tutorial', 'complete');
        window.removeEventListener('click', startTutorialHandler);
      }
    };
    window.addEventListener('click', startTutorialHandler);

    function hiddenPrev(selector: string) {
      if (selector !== '') {
        const block = document.querySelector(selector);
        block?.classList.remove('show-tutorial-block');
      }
    }
    function changeCount() {
      count = count + 1;
    }
    function showS({ selector, text }: { selector: string; text: string }) {
      console.log('SHOW THis', selector, text);
      if (selector !== '') {
        const block = document.querySelector(selector);
        block?.classList.add('show-tutorial-block');
      }
      const textBlock = document.querySelector('.sloth__text');
      textBlock!.textContent = text;
    }
  }
  showSloth() {
    document.querySelector('body')!.style.overflow = 'hidden';
    document.querySelector('.my-modal')?.classList.add('show-modal');
    document.querySelector('.sloth__text')?.classList.add('show-text');
    document.querySelector('.sloth__img')?.classList.add('show-img');
  }
  hiddenSloth = () => {
    console.log('hidden');
    document.querySelector('body')!.style.overflow = '';
    document.querySelector('.my-modal')?.classList.remove('show-modal');
    document.querySelector('.sloth__text')?.classList.remove('show-text');
    document.querySelector('.sloth__img')?.classList.remove('show-img');
  };
}

export default new Sloth();
