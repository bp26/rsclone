import { headerView } from './header.view';
import { model } from '../../../base/model';
import { Theme } from '../../../types/enums';

class HeaderController {
  public init(): void {
    headerView.render();
  }

  public setTheme(theme: Theme): void {
    model.setTheme(theme);
  }
}

export const headerController = new HeaderController();
