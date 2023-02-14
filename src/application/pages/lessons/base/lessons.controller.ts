import { model } from './../../../base/model';
import { lessonsModel } from './lessons.model';
import { lessonsView } from './lessons.view';

class LessonsController {
  public init(): void {
    lessonsView.render();
  }

  submitTask(title: string, price: string, currentLessons: string) {
    lessonsModel.submitTask(title, price, currentLessons);
  }
}

export const lessonsController = new LessonsController();
