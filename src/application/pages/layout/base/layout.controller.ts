import { layoutModel } from './layout.model';
import { layoutView } from './layout.view';

class LayoutController {
  public add(): void {
    layoutModel.add();
  }

  public init(): void {
    layoutView.render();
  }
}

export const layoutController = new LayoutController();
