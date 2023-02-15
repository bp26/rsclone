import { roadView } from './road.view';
import { dataRoad } from '../../../utils/constants/dataRoad/contentRoad';

class RoadController {
  public init(): void {
    roadView.render();
  }

  public clicked(value: string, color: string): void {
    if (value) {
      const dataRect = dataRoad.find((item) => item.name === value);
      dataRect ? roadView.createModal(dataRect, color) : false;
    }
  }
}

export const roadController = new RoadController();
