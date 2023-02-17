import { IMessage, INotification } from '../../../types/interfaces';
import { chatApi } from '../api/chat.api';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { model } from '../../../base/model';

class ChatModel {
  private messages: IMessage[] = [];

  public async init(): Promise<IMessage[]> {
    chatApi.initWebsocket();
    return await this.loadMessages();
  }

  private async loadMessages(): Promise<IMessage[]> {
    try {
      this.messages = await chatApi.getMessages();
      return this.messages;
    } catch (error) {
      console.log(error);
      return this.messages;
    }
  }

  public sendMessage(content: string): void {
    if (model.isAuthenticated && model.user)
      chatApi.sendMessage({
        user: model.user.login,
        content,
      });
  }

  public handleReceivedMessage(message: IMessage): void {
    emitter.emit(EmitterEventName.CHAT_RECEIVED_MESSAGE, message);
  }

  public handleReceivedConnection(notification: INotification): void {
    emitter.emit(EmitterEventName.CHAT_RECEIVED_CONNECTION, notification);
  }
}

export const chatModel = new ChatModel();
