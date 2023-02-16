import { lessonsModel } from './lessons.model';
import { lessonsView } from './lessons.view';

class LessonsController {
  public init(): void {
    lessonsView.render(lessonsModel.init());
  }

  public submitTask(currentLesson: string, title: string, price: string): void {
    lessonsModel.submitTask(currentLesson, title, price);
  }
}

export const lessonsController = new LessonsController();
