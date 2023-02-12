import { FabricCanvas } from '../modules/fabric-canvas';
import { HTMLTag } from '../../../types/enums';
import { Element } from '../../../utils/element';
import { getSafeElement } from '../../../utils/helpers';

class RoadView {
  private root: HTMLElement;
  constructor() {
    const root = document.querySelector('.main__root');
    this.root = getSafeElement(root);
  }

  public render() {
    this.root.innerHTML = '';
    const wrapFrontMap = new Element(this.root, HTMLTag.DIV, 'front-wrap');
    const titleFrontMapIgnor = new Element(wrapFrontMap.node, HTMLTag.H1, 'front-wrap__title', 'Frontend Roadmap');
    const wrapperCanvas = new Element(wrapFrontMap.node, HTMLTag.DIV, 'front-wrap__canvas-wrap');
    const canvas = new Element(wrapperCanvas.node, HTMLTag.CANVAS, '');
    canvas.node.setAttribute('width', `${wrapperCanvas.node.clientWidth}`);
    canvas.node.setAttribute('height', `${wrapperCanvas.node.clientHeight}`);
    if (canvas.node instanceof HTMLCanvasElement) {
      const createFabricIgnor = new FabricCanvas(canvas.node);
    }
  }
}

export const roadView = new RoadView();
