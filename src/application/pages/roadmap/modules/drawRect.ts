import fabric from 'fabric';
import { ColorRect } from '../../../types/enums';
import { roadController } from '../base/road.controller';

export class DrawRectContent {
  mainRect: fabric.fabric.Rect;
  mainContentRect: fabric.fabric.Text;
  mainGroup: fabric.fabric.Group;
  constructor(parent: fabric.fabric.Canvas, left: number, top: number, textContent: string, color = '#000') {
    this.mainRect = new fabric.fabric.Rect({
      fill: ColorRect.FIRST_STATE_RECT,
      width: 200,
      height: 50,
      originX: 'center',
      originY: 'center',
      shadow: '#333333 0px 8px 22px',
      strokeWidth: 2,
      stroke: color,
      rx: 10,
    });

    this.mainContentRect = new fabric.fabric.Text(textContent, {
      fontSize: 30,
      fontWeight: 600,
      originX: 'center',
      originY: 'center',
      fill: ColorRect.FIRST_STATE_TEXT,
    });

    this.mainGroup = new fabric.fabric.Group([this.mainRect, this.mainContentRect], {
      left: left,
      top: top,
      angle: 0,
      hasControls: false,
      hoverCursor: 'pointer',
      lockMovementX: true,
      lockMovementY: true,
      selectable: false,
    });

    const hoverRect = new fabric.fabric.Rect({
      fill: ColorRect.STATE_HOVER_RECT,
      width: 200,
      scaleX: 1.2,
      scaleY: 1.2,
      height: 50,
      originX: 'center',
      originY: 'center',
      shadow: '#333333 0px 12px 22px',
      strokeWidth: 2,
      stroke: color,
      rx: 10,
    });

    const hoverContentRec = new fabric.fabric.Text(textContent, {
      fontSize: 40,
      fontWeight: 600,
      originX: 'center',
      originY: 'center',
      fill: ColorRect.STATE_HOVER_TEXT,
    });

    const hoverGroup = new fabric.fabric.Group([hoverRect, hoverContentRec], {
      left: left - 20,
      top: top,
      angle: 0,
      hasControls: false,
      hoverCursor: 'pointer',
      lockMovementX: true,
      lockMovementY: true,
      selectable: false,
    });

    this.mainGroup.on('mouseover', () => {
      parent.remove(this.mainGroup);
      parent.add(hoverGroup);
    });

    hoverGroup.on('mouseout', () => {
      parent.remove(hoverGroup);
      parent.add(this.mainGroup);
    });

    hoverGroup.on('mousedown', () => {
      if (hoverContentRec.text) {
        roadController.clicked(hoverContentRec.text, color);
      }
    });

    parent.add(this.mainGroup);
  }
}
