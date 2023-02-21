import { queryHTMLElement } from '../../utils/helpers';
import { EmitterEventName, HTMLTag } from '../../types/enums';
import { Element } from '../../utils/element';
import { emitter } from '../../utils/emitter';
import { Modal } from 'bootstrap';
import { lessonsController } from '../../pages/lessons/base/lessons.controller';

class ConfirmationModal {
  public init(): void {
    const modal = new Element(document.body, HTMLTag.DIV, 'confirmation-modal modal fade data-keyboard="false"');
    modal.node.id = 'confirmationModal';

    modal.node.innerHTML = `
      <div class='confirmation-modal__container modal-dialog modal-dialog-centered' style='color: black'>
        <div class='confirmation-modal__content modal-content'>

          <div class='preloader confirmation-modal__preloader d-none position-absolute'>
            <div class='preloader__circle confirmation__circle'></div>
          </div>

          <div class='confirmation-modal__main'></div>
        </div>
      </div>
    `;

    this.subscribe();
  }

  private renderLessonsModal(coins: number) {
    const root = queryHTMLElement('.confirmation-modal__main');
    root.innerHTML = `
      <div class='confirmation-modal__body modal-body d-flex flex-column justify-content-center align-items-center'>
        <h2 class='confirmation-modal__title modal-title'>Congratulations!</h2>
        <p class='confirmation-modal__text'>You have succesfully completed this lesson! You got <span class='confirmation-modal__coins'>${coins}</span> coins!</p>
        <button class='confirmation-modal__confirm btn btn-primary'>Confirm</button>
      </div>
    `;

    this.bindLessons();
  }

  private renderUserModal() {
    const root = queryHTMLElement('.confirmation-modal__main');
    root.innerHTML = `
      <div class='confirmation-modal__body modal-body d-flex flex-column justify-content-center align-items-center'>
      <p class='confirmation-modal__text'>User settings updated!</p>
        <button class='confirmation-modal__confirm btn btn-primary'>Confirm</button>
      </div>
    `;

    this.bindUser();
  }

  private showModal() {
    const element = queryHTMLElement('#confirmationModal');
    const modal = new Modal(element);
    modal.show();
    this.showPreloader();
  }

  private hideModal() {
    const element = queryHTMLElement('#confirmationModal');
    const modal = Modal.getInstance(element);
    if (modal) {
      modal.hide();
    }
  }

  public showPreloader(): void {
    const preloader = queryHTMLElement('.confirmation-modal__preloader');
    preloader.classList.remove('d-none');
    document.body.classList.add('pe-none');
  }

  private hidePreloader(): void {
    const preloader = queryHTMLElement('.confirmation-modal__preloader');
    preloader.classList.add('d-none');
    document.body.classList.remove('pe-none');
  }

  private bindLessons(): void {
    const confirm = queryHTMLElement('.confirmation-modal__confirm');
    confirm.onclick = () => {
      this.hideModal();
      lessonsController.init();
    };
  }

  private bindUser(): void {
    const confirm = queryHTMLElement('.confirmation-modal__confirm');
    confirm.onclick = () => {
      this.hideModal();
    };
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.LESSONS_SOLVED, (coins: number) => {
      this.renderLessonsModal(coins);
      this.showModal();
    });
    emitter.on(EmitterEventName.USER_SETTINGS, () => {
      this.renderUserModal();
      this.showModal();
    });
    emitter.on(EmitterEventName.GLOBAL_USER_UPDATE, this.hidePreloader.bind(this));
  }
}

export const lessonModal = new ConfirmationModal();
