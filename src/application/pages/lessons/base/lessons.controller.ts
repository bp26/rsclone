import { exampleTutorial } from './../../../utils/constants/slothExampleTutorialArray';
import { Storage } from '../../../types/enums';
import sloth from '../modules/sloth/sloth';
import { lessonsModel } from './lessons.model';
import { lessonsView } from './lessons.view';

class LessonsController {
  public init(): void {
    lessonsView.render(lessonsModel.init());
    if (!localStorage.getItem(Storage.TUTORIAL)) {
      sloth.render(exampleTutorial);
      localStorage.setItem(Storage.TUTORIAL, Storage.COMPLETE);
    }
  }

  public submitTask(currentLesson: string, title: string, price: string): void {
    lessonsModel.submitTask(currentLesson, title, price);
  }
}

export const lessonsController = new LessonsController();
