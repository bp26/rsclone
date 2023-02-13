import { headerView } from './header.view';
import { model } from '../../../base/model';

class HeaderController {
  public init(): void {
    headerView.render();
  }

  public switchLang(): void {
    model.switchLang();
  }

  public switchTheme(): void {
    model.switchTheme();
  }
}

export const headerController = new HeaderController();
