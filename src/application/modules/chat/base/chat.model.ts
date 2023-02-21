import { IMessage, INotification } from '../../../types/interfaces';
import { chatApi } from '../api/chat.api';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';
import { model } from '../../../base/model';
import { chatAudio } from '../audio/chat.audio';

class ChatModel {
  private isOpen = false;
  private notifyOn = true;
  private notifications = 0;
  private messages: IMessage[] = [];

  public initSettings() {
    if (model.user) {
      this.notifyOn = model.user.chat.notifications;
    }
  }

  public async initWebsocket(): Promise<void> {
    chatApi.initWebsocket();
  }

  public async loadMessages(): Promise<IMessage[]> {
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
        user: model.user._id,
        content,
      });
  }

  public handleReceivedMessage(message: IMessage): void {
    emitter.emit(EmitterEventName.CHAT_RECEIVED_MESSAGE, message);
    if (!this.isOpen && this.notifyOn) {
      this.notifications++;
      emitter.emit(EmitterEventName.CHAT_NOTIFICATIONS_SET, this.notifications);
      chatAudio.play();
    }
  }

  public handleReceivedConnection(notification: INotification): void {
    emitter.emit(EmitterEventName.CHAT_RECEIVED_CONNECTION, notification);
  }

  public toggleChatState(setOpen: boolean): void {
    switch (setOpen) {
      case true:
        this.notifications = 0;
        break;
      case false:
        emitter.emit(EmitterEventName.CHAT_NOTIFICATIONS_RESET);
        break;
    }
    this.isOpen = setOpen;
  }

  public setNotifications(setOn: boolean) {
    if (!setOn) {
      emitter.emit(EmitterEventName.CHAT_NOTIFICATIONS_RESET);
    }
    this.notifyOn = setOn;
  }

  public notifyServerOnConnection(): void {
    if (model.isAuthenticated && model.user) {
      chatApi.notifyServerOnConnection(model.user);
    }
  }
}

export const chatModel = new ChatModel();
