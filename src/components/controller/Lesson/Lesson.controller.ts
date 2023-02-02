import { Model } from './../../model/Model';
import { LessonView } from '../../view/Lesson/Lesson.view';

export class LessonController {
  model: Model;
  view: LessonView;
  constructor() {
    this.model = new Model();
    this.view = new LessonView();
  }

  start() {
    this.view.render();
  }
}
