import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class UserModel {
  public add(): void {
    emitter.emit(EmitterViewEvents.HOME_UPDATE);
  }
}

export const userModel = new UserModel();
