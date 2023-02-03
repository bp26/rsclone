import { EmitterViewEvents } from '../../../types/enums';
import { emitter } from '../../../utils/emitter';

class LayoutModel {
  public add(): void {
    emitter.emit(EmitterViewEvents.LAYOUT_UPDATE);
  }
}

export const layoutModel = new LayoutModel();
