import { headerController } from '../modules/header/header.controller';
import { footerController } from '../modules/footer/footer.controller';
import { homeController } from '../pages/home/base/home.controller';

class Controller {
  constructor() {
    headerController.init();
    footerController.init();
  }

  public initHomePage(): void {
    homeController.init();
  }

  public initDocumentationPage(): void {
    //
  }

  public initLessonsPage(): void {
    //
  }

  public initUserPage(): void {
    //
  }

  public initRoadmapPage(): void {
    //
  }
}

export const controller = new Controller();
