import { IMessage } from '../../../types/interfaces';
import { chatApi } from '../api/chat.api';

class ChatModel {
  private messages: IMessage[] = [];

  public async loadMessages(): Promise<IMessage[]> {
    try {
      if (!this.messages) {
        this.messages = await chatApi.getMessages();
      }
      return this.messages;
    } catch (error) {
      console.log(error);
      return this.messages;
    }
  }
}

export const chatModel = new ChatModel();
