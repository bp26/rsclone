import { Model } from './../../model/Model';
import { ProfileView } from '../../view/Profile/Profile.view';

export class ProfileController {
  view: ProfileView;
  model: Model;
  constructor() {
    this.view = new ProfileView();
    this.model = new Model();
  }

  start() {
    this.view.render();
  }
}
