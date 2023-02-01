import { ProfileController } from './../controller/Profile/Profile.controller';
import { LessonController } from './../controller/Lesson/Lesson.controller';
import { DocumentController } from './../controller/Document/Document.controller';
import { HomeController } from './../controller/Home/Home.controller';

export class App {
  homeContoller: HomeController;
  documentController: DocumentController;
  lessonController: LessonController;
  profileContoller: ProfileController;
  constructor() {
    this.homeContoller = new HomeController();
    this.documentController = new DocumentController();
    this.lessonController = new LessonController();
    this.profileContoller = new ProfileController();
  }
}
