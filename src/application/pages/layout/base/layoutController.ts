import { layoutModel } from './layoutModel';
import { layoutView } from './layoutView';

class LayoutController {
  public add(): void {
    layoutModel.add();
  }

  public init(): void {
    layoutView.render();
  }
}

export const layoutController = new LayoutController();
