import { ProfileView } from '../../view/Profile/Profile.view';

export class ProfileController {
  view: ProfileView;
  constructor() {
    this.view = new ProfileView();
  }
}
