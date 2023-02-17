import { chatModel } from './chat.model';
import { chatView } from './chat.view';

class ChatController {
  public async init() {
    const messages = await chatModel.init();
    chatView.render(messages);
  }

  public send(content: string) {
    if (content) {
      chatModel.sendMessage(content);
    }
  }
}

export const chatController = new ChatController();
