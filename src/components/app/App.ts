import { RoadMapController } from './../controller/RoadMap/RoadMap.controller';
import { ProfileController } from './../controller/Profile/Profile.controller';
import { LessonController } from './../controller/Lesson/Lesson.controller';
import { DocumentController } from './../controller/Document/Document.controller';
import { HomeController } from './../controller/Home/Home.controller';

class App {
  homeContoller: HomeController;
  documentController: DocumentController;
  lessonController: LessonController;
  profileContoller: ProfileController;
  RoadMapController: RoadMapController;
  constructor() {
    this.homeContoller = new HomeController();
    this.documentController = new DocumentController();
    this.lessonController = new LessonController();
    this.profileContoller = new ProfileController();
    this.RoadMapController = new RoadMapController();
  }
}

export const app = new App();
