import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class LessonsModel {
  public add(): void {
    emitter.emit(EmitterViewEvents.HOME_UPDATE);
  }
}

export const lessonsModel = new LessonsModel();
