import fabric from 'fabric';

export class DrawSecondaryLineFabricCanvas {
  constructor(parent: fabric.fabric.Canvas, aCoords: [number, number, number, number], color: string) {
    const line = new fabric.fabric.Line(aCoords, {
      stroke: color,
      strokeWidth: 5,
      hoverCursor: 'default',
      strokeDashArray: [8, 8],
      lockMovementX: true,
      lockMovementY: true,
      hasControls: false,
      selectable: false,
    });
    parent.add(line);
  }
}
