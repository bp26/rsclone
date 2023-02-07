import { lessonsModel } from './lessons.model';
import { lessonsView } from './lessons.view';

class LessonsController {
  public add(): void {
    lessonsModel.add();
  }

  public init(): void {
    lessonsView.render();
    this.initChilden();
  }

  private initChilden(): void {
    //
  }
}

export const lessonsController = new LessonsController();
