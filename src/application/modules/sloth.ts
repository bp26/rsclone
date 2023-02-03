class Sloth {
  render() {
    const root = document.querySelector('body');
    const html = document.createElement('div');
    html.innerHTML = `
     <div class="my-modal position-fixed top-0 start-0 bottom-0 end-0 bg-black"></div>
     <div>
     <p class="sloth__text position-absolute start-50 translate-middle-x bg-primary rounded-4 p-2" style=" z-index:6">HELLO MY NEW FRIEND!! Nice to meet you. My name is Rush. I will help you for get fundamentals knowladge about JavaScript.</p>
    </div>
    <div  class="sloth__img position-absolute" style="z-index: 5;">
      <img src="./images/sloth.svg" class="d-block" style="width: 200px; height: 200px" alt="sloth" />
    </div>
    `;
    root!.append(html);
    const modal = document.querySelector('.my-modal');
    if (modal)
      modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          console.log('click');
          this.hiddenWindow();
        }
      });
  }
  startTutorial() {
    document.querySelector('body')!.style.overflow = 'hidden';
    document.querySelector('.my-modal')?.classList.add('show-modal');
    document.querySelector('.sloth__text')?.classList.add('show-text');
    document.querySelector('.sloth__img')?.classList.add('show-img');
  }

  hiddenWindow = () => {
    console.log('hidden');
    document.querySelector('body')!.style.overflow = '';
    document.querySelector('.my-modal')?.classList.remove('show-modal');
    document.querySelector('.sloth__text')?.classList.remove('show-text');
    document.querySelector('.sloth__img')?.classList.remove('show-img');
  };
}

export default new Sloth();
