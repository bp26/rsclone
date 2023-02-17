import { chatModel } from './chat.model';
import { chatView } from './chat.view';

class ChatController {
  public async init() {
    const messages = await chatModel.init();
    chatView.render(messages);
  }

  public send(content: string): void {
    if (content) {
      chatModel.sendMessage(content);
    } else {
      chatView.toggleTextareaError(true);
    }
  }

  public toggleOffcanvas(setOpen: boolean): void {
    chatModel.toggleOffcanvasState(setOpen);
  }
}

export const chatController = new ChatController();
