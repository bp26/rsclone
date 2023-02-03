class Sloth {
  render() {
    const root = document.querySelector('body');
    const html = document.createElement('div');
    html.innerHTML = `
     <div class="my-modal hidden-modal" style="z-index: 99">
      <div class="container-fluid d-flex align-items-end justify-content-center">
        <div class="w-100">
          <div class="row">
            <div class="col-8 position-relative text-end" style="top: 60px">
              <div class="bg-primary rounded-4 d-inline-block text-start sloth__text-block">
                <p class="text-light">HELLO MY NEW FRIEND!! Nice to meet you. My name is Rush. I will help you for get fundamentals knowladge about JavaScript.</p>
                <button class="btn btn-dark  position-relative text-start me-auto" style = "z-index:100" > next </button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="con-9 col-sm-11 col-lg-10 text-end position-relative" style="z-index: 50">
              <img src="./images/sloth.svg" alt="sloth" />
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    root!.append(html);
    const modal = document.querySelector('.my-modal');
    if (modal)
      modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          console.log(e.target);
          console.log(e.currentTarget);
          this.hiddenWindow('.my-modal');
        }
      });
  }
  startTutorial() {
    console.log('show');
    document.querySelector('body')!.style.overflow = 'hidden';
    document.querySelector('.my-modal')?.classList.remove('hidden-modal');
    document.querySelector('.my-modal')?.classList.add('show-modal');
  }

  hiddenWindow = (className: string) => {
    document.querySelector(className)?.classList.add('hidden-modal');
    document.querySelector(className)?.classList.remove('show-modal');
    document.querySelector('body')!.style.overflow = 'none';
  };
}

export default new Sloth();
