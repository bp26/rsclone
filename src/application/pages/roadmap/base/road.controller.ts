import { roadView } from './road.view';

class RoadController {
  public init(): void {
    roadView.render();
  }
}

export const roadController = new RoadController();
