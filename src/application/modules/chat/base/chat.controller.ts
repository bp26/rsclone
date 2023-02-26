import { model } from '../../../base/model';
import { chatModel } from './chat.model';
import { chatView } from './chat.view';

class ChatController {
  public async init() {
    chatModel.initSettings();
    const messages = await chatModel.loadMessages();

    chatView.render(messages);
    if (model.isAuthenticated) {
      chatView.activateOpenButton();
    }

    chatModel.initWebsocket();
  }

  public send(content: string): void {
    if (content) {
      chatModel.sendMessage(content);
    } else {
      chatView.toggleTextareaError(true);
    }
  }

  public toggleChat(setOpen: boolean): void {
    chatModel.toggleChatState(setOpen);
  }
}

export const chatController = new ChatController();
