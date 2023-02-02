import { model } from "./model";
import { homeController } from "../pages/home/base/home.controller";

class Controller {
  public initHomePage(): void {
    homeController.init();
  }

  public initDocumentationPage(): void {

  }

  public initLessonsPage(): void {

  }

  public initUserPage(): void {

  }

  public initRoadmapPage(): void {

  }
}

export const controller = new Controller();
