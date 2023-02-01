import { Model } from './../../model/Model';
import { HomeView } from './../../view/Home/Home.view';
export class HomeController {
  view: HomeView;
  model: Model;
  constructor() {
    this.view = new HomeView();
    this.model = new Model();
  }

  start() {
    this.view.render();
  }
}
