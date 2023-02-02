import { EmitterViewEvents } from "../../../types/enums";
import { emitter } from "../../../utils/emitter";

class HomeModel {

  public add(): void {
    emitter.emit(EmitterViewEvents.HOME_UPDATE);
  }
}

export const homeModel = new HomeModel();
