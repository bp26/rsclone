const fabric = require('fabric').fabric;
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
    const canvas = new Element(this.root, HTMLTag.CANVAS, 'canvas');
    const fabricCanvas = new fabric.Canvas(canvas.node);
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
    });
    rect.set('selectable', false);
    fabricCanvas.add(rect);
  }
}

export const roadView = new RoadView();
