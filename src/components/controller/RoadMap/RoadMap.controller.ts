import { RoadMapView } from '../../view/RoadMap/RoadMap.view';
import { Model } from './../../model/Model';
export class RoadMapController {
  view: RoadMapView;
  model: Model;
  constructor() {
    this.view = new RoadMapView();
    this.model = new Model();
  }

  start() {
    this.view.render();
  }
}
