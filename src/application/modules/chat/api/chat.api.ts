import axios from 'axios';
import { IMessage } from '../../../types/interfaces';
import { BASE_URL, CHAT_ROUTE, WEBSOCKET_URL } from '../../../utils/constants/constants';

class ChatApi {
  public async getMessages(): Promise<IMessage[]> {
    const res = await axios.get(`${BASE_URL}/${CHAT_ROUTE}`);
    return res.data;
  }

  public initWebsocket() {
    const socket = new WebSocket(WEBSOCKET_URL);
  }
}

export const chatApi = new ChatApi();
