import { chatCloud } from '../../../utils/constants/icons/chatCloud';
import { queryHTMLElement, queryHTMLTextAreaElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { EmitterEventName, HTMLTag } from '../../../types/enums';
import { IMessage, INotification } from '../../../types/interfaces';
import { chatController } from './chat.controller';
import { emitter } from '../../../utils/emitter';
import { Offcanvas } from 'bootstrap';

class ChatView {
  constructor() {
    this.subscribe();
  }

  render(messages: IMessage[]): void {
    const chat = queryHTMLElement('.chat');
    chat.innerHTML = `
      <button class='chat__open bg-transparent border-0 position-fixed'>${chatCloud}
        <span class="chat__badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger invisible">0</span>
      </button>
      <div class="chat__container offcanvas offcanvas-end text-light" tabindex="-1" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="chat__header offcanvas-header bg-secondary d-flex flex-column align-items-center">
          <div class="w-100 d-flex justify-content-end">
            <button class="chat__close btn-close btn-close-white text-reset"></button>
          </div>
          <h3 id="chat__title">Chat</h3>
        </div>
        <div class="chat__body d-flex flex-column justify-content-between offcanvas-body bg-secondary">
          <div class="chat__window flex-grow-1 p-3 mb-2 bg-dark rounded-4"></div>
          <form class="chat__form align-content-end">
            <textarea disabled class="chat__textarea bg-dark w-100 rounded-4 text-light p-1" style="height: 100px; resize:none"></textarea>
            <div>
              <button class="chat__send btn btn-lg btn-primary w-100 d-flex align-items-center justify-content-center gap-2 disabled">
                <span class="chat__spinner spinner-grow spinner-grow-md d-none"></span>
                <span class="">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
  `;

    messages.forEach((message) => this.renderMessage(message));
    this.snapChatWindow();
    this.bind();
  }

  public show(): void {
    const element = queryHTMLElement('#offcanvasRight');
    const offcanvas = new Offcanvas(element);
    offcanvas.show();
  }

  private hide(): void {
    const element = queryHTMLElement('#offcanvasRight');
    const offcanvas = Offcanvas.getInstance(element);
    if (offcanvas) {
      offcanvas.hide();
    }
  }

  private renderMessage(message: IMessage): void {
    const chatWindow = queryHTMLElement('.chat__window');
    const chatMessage = new Element(chatWindow, HTMLTag.DIV, 'chat__message');
    chatMessage.node.innerHTML = `
      <p class="p-0 mb-0">
        <span class="text-danger">${message.user}:</span>
      ${message.content}
      </p>
      <p class="text-end fs-6">${message.time}</p>`;
  }

  private renderConnectionNotification(notification: INotification): void {
    const chatWindow = queryHTMLElement('.chat__window');
    const chatNotification = new Element(chatWindow, HTMLTag.DIV, 'chat__notification');
    chatNotification.node.innerHTML = `<p class="p-0 my-3"> <span class="text-success">${notification.user}</span> has joined!</p>`;
  }

  private toggleControls(setOn: boolean): void {
    const textarea = queryHTMLElement('.chat__textarea');
    const send = queryHTMLElement('.chat__send');

    switch (setOn) {
      case true:
        send.classList.remove('disabled');
        textarea.removeAttribute('disabled');
        break;
      case false:
        send.classList.add('disabled');
        textarea.setAttribute('disabled', '');
        break;
    }
  }

  private toggleSpinner(setOn: boolean): void {
    const spinner = queryHTMLElement('.chat__spinner');

    switch (setOn) {
      case true:
        spinner.classList.remove('d-none');
        break;
      case false:
        spinner.classList.add('d-none');
        break;
    }
  }

  private setMessageNotifications(notifications: number): void {
    const badge = queryHTMLElement('.chat__badge');
    badge.textContent = `${notifications}`;
    badge.classList.remove('invisible');
  }

  private resetMessageNotifications(): void {
    const badge = queryHTMLElement('.chat__badge');
    badge.textContent = '';
    badge.classList.add('invisible');
  }

  private snapChatWindow(): void {
    const chatWindow = queryHTMLElement('.chat__window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  public toggleTextareaError(setOn: boolean): void {
    const textarea = queryHTMLElement('.chat__textarea');
    switch (setOn) {
      case true:
        textarea.classList.add('chat__textarea_invalid');
        break;
      case false:
        textarea.classList.remove('chat__textarea_invalid');
        break;
    }
  }

  private bind(): void {
    const open = queryHTMLElement('.chat__open');
    const close = queryHTMLElement('.chat__close');
    const send = queryHTMLElement('.chat__send');
    const textarea = queryHTMLTextAreaElement('.chat__textarea');

    open.onclick = () => {
      this.show();
      chatController.toggleOffcanvas(true);
    };

    close.onclick = () => {
      this.hide();
      chatController.toggleOffcanvas(false);
      this.toggleTextareaError(false);
    };

    send.onclick = (e) => {
      e.preventDefault();
      chatController.send(textarea.value);
      textarea.value = '';
    };

    textarea.oninput = () => this.toggleTextareaError(false);
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, () => this.toggleControls(true));
    emitter.on(EmitterEventName.CHAT_SENT_MESSAGE, () => {
      this.toggleControls(false);
      this.toggleSpinner(true);
    });
    emitter.on(EmitterEventName.CHAT_RECEIVED_MESSAGE, (message) => {
      this.renderMessage(message);
      this.toggleControls(true);
      this.toggleSpinner(false);
      this.snapChatWindow();
    });
    emitter.on(EmitterEventName.CHAT_RECEIVED_CONNECTION, (notification) => {
      this.renderConnectionNotification(notification);
      this.snapChatWindow();
    });
    emitter.on(EmitterEventName.CHAT_NOTIFICATIONS_SET, this.setMessageNotifications.bind(this));
    emitter.on(EmitterEventName.CHAT_NOTIFICATIONS_RESET, this.resetMessageNotifications.bind(this));
  }
}

export const chatView = new ChatView();
