import { queryHTMLElement } from '../../../../utils/helpers';
import { EmitterEventName, HTMLTag } from '../../../../types/enums';
import { Element } from '../../../../utils/element';
import { emitter } from '../../../../utils/emitter';
import { Modal } from 'bootstrap';
import { lessonsController } from '../../base/lessons.controller';

class LessonModal {
  public init(): void {
    const modal = new Element(document.body, HTMLTag.DIV, 'lessons-modal modal fade data-keyboard="false"');
    modal.node.id = 'lessonsModal';

    modal.node.innerHTML = `
      <div class='lessons-modal__container modal-dialog modal-dialog-centered' style='color: black'>
        <div class='lessons-modal__content modal-content'>

          <div class='preloader lessons-modal__preloader d-none position-absolute'>
            <div class='preloader__circle lessons-modal__circle'></div>
          </div>

          <div class='lessons-modal__main'>
            <div class='lessons-modal__body modal-body d-flex flex-column justify-content-center align-items-center'>
              <h2 class='lessons-modal__title modal-title'>Congratulations!</h2>
              <p class='lessons-modal'>You have succesfully completed this lesson! You got <span class='lessons-modal__coins'>0</span> coins!</p>
              <button class='lessons-modal__confirm btn btn-primary'>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bind();
    this.subscribe();
  }

  public showModal() {
    const element = queryHTMLElement('#lessonsModal');
    const modal = new Modal(element);
    modal.show();
    this.showPreloader();
  }

  private hideModal() {
    const element = queryHTMLElement('#lessonsModal');
    const modal = Modal.getInstance(element);
    if (modal) {
      modal.hide();
    }
  }

  public showPreloader(): void {
    const preloader = queryHTMLElement('.lessons-modal__preloader');
    preloader.classList.remove('d-none');
    document.body.classList.add('pe-none');
  }

  private hidePreloader(): void {
    const preloader = queryHTMLElement('.lessons-modal__preloader');
    preloader.classList.add('d-none');
    document.body.classList.remove('pe-none');
  }

  private setCoinsCount(coins: number) {
    const coinsCount = queryHTMLElement('.lessons-modal__coins');
    coinsCount.textContent = `${coins}`;
  }

  private bind(): void {
    const confirm = queryHTMLElement('.lessons-modal__confirm');
    confirm.onclick = () => {
      this.hideModal();
      lessonsController.init();
    };
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.LESSONS_SOLVED, (coins: number) => {
      this.setCoinsCount(coins);
      this.showModal();
    });
    emitter.on(EmitterEventName.GLOBAL_USER_UPDATE_LESSONS, this.hidePreloader.bind(this));
  }
}

export const lessonModal = new LessonModal();
