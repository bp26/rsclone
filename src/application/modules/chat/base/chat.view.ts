import { chatCloud } from '../../../utils/constants/icons/chatCloud';
import { queryHTMLElement, queryHTMLTextAreaElement } from '../../../utils/helpers';
import { Element } from '../../../utils/element';
import { EmitterEventName, HTMLTag } from '../../../types/enums';
import { IMessage, INotification } from '../../../types/interfaces';
import { chatController } from './chat.controller';
import { emitter } from '../../../utils/emitter';

class ChatView {
  constructor() {
    this.subscribe();
  }

  render(messages: IMessage[]) {
    const chat = queryHTMLElement('.chat');
    chat.innerHTML = `
      <button class='chat__open bg-transparent border-0 position-fixed' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'>${chatCloud('#bcbec1')}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0
        </span>
      </button>
      <div class="chat__container offcanvas offcanvas-end text-light" tabindex="-1" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="chat__header offcanvas-header bg-secondary">
          <h5 id="chat__title offcanvasRightLabel">Chat</h5>
          <button class="chat__close btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="chat__body d-flex flex-column justify-content-between offcanvas-body bg-secondary">
          <div class="chat__window flex-grow-1 p-3 mb-3 bg-dark rounded-4"></div>
          <form class="chat__form align-content-end">
            <textarea class="chat__textarea bg-dark w-100 rounded-4 text-light" style="height: 100px"></textarea>
            <div>
              <button class="chat__send btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
  `;

    messages.forEach((message) => this.renderMessage(message));
    this.bind();
  }

  private renderMessage(message: IMessage) {
    const chatWindow = queryHTMLElement('.chat__window');
    const chatMessage = new Element(chatWindow, HTMLTag.DIV, 'chat__message');
    chatMessage.node.innerHTML = `
      <p class="p-0 mb-0">
        <span class="text-danger">${message.user}:</span>
      ${message.content}
      </p>
      <p class="text-end fs-6">${message.time}</p>`;
  }

  private renderNotification(notification: INotification) {
    const chatWindow = queryHTMLElement('.chat__window');
    const chatNotification = new Element(chatWindow, HTMLTag.DIV, 'chat__notification');
    chatNotification.node.innerHTML = `<p class="p-0 my-3"> <span class="text-success">${notification.user}</span> has joined!</p>`;
  }

  private bind() {
    const send = queryHTMLElement('.chat__send');
    const chatTextarea = queryHTMLTextAreaElement('.chat__textarea');

    send.onclick = (e) => {
      e.preventDefault();
      chatController.send(chatTextarea.value);
      chatTextarea.value = '';
    };
  }

  private subscribe() {
    emitter.on(EmitterEventName.CHAT_RECEIVED_MESSAGE, this.renderMessage.bind(this));
    emitter.on(EmitterEventName.CHAT_RECEIVED_CONNECTION, this.renderNotification.bind(this));
  }
}

export const chatView = new ChatView();
