import axios from 'axios';
import { IMessage, IUser } from '../../../types/interfaces';
import { BASE_URL, CHAT_ROUTE, WEBSOCKET_TIMEOUT, WEBSOCKET_URL } from '../../../utils/constants/constants';
import { IMessageData } from '../../../types/interfaces';
import { MessageType } from '../../../types/enums';
import { chatModel } from '../base/chat.model';
import { EmitterEventName } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class ChatApi {
  private socket?: WebSocket;

  constructor() {
    this.subscribe();
  }

  public async getMessages(): Promise<IMessage[]> {
    const res = await axios.get(`${BASE_URL}/${CHAT_ROUTE}`);
    return res.data;
  }

  public initWebsocket(): void {
    const socket = new WebSocket(WEBSOCKET_URL);
    socket.onmessage = (e) => this.handleReceivedData(JSON.parse(e.data));
    socket.onerror = () => socket.close();
    socket.onclose = () => setTimeout(() => this.initWebsocket.call(this), WEBSOCKET_TIMEOUT);
    this.socket = socket;
  }

  public sendMessage(data: Omit<IMessage, 'time'>): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(
        JSON.stringify({
          type: MessageType.MESSAGE,
          data,
        })
      );
      emitter.emit(EmitterEventName.CHAT_SENT_MESSAGE);
    }
  }

  private handleReceivedData(messageData: IMessageData): void {
    const { type, data } = messageData;
    switch (type) {
      case MessageType.CONNECTION:
        chatModel.handleReceivedConnection(data);
        break;
      case MessageType.MESSAGE:
        chatModel.handleReceivedMessage(data);
        break;
    }
  }

  private notifyServerOnConnection(user: IUser): void {
    if (this.socket) {
      this.socket.send(
        JSON.stringify({
          type: MessageType.CONNECTION,
          data: {
            user: user.login,
          },
        })
      );
    }
  }

  private subscribe(): void {
    emitter.on(EmitterEventName.GLOBAL_USER_LOAD_SUCCESS, this.notifyServerOnConnection.bind(this));
  }
}

export const chatApi = new ChatApi();
