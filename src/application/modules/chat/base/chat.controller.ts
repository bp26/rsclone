import { chatModel } from './chat.model';
import { chatView } from './chat.view';

class ChatController {
  public async init() {
    const messages = await chatModel.loadMessages();
    chatView.render(messages);
  }

  public send(message: string) {
    if (message) {
      console.log(message);
    }
  }
}

export const chatController = new ChatController();
