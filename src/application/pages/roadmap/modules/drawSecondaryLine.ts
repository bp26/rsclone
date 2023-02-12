import fabric from 'fabric';

export class DrawSecondaryLineFabricCanvas {
  constructor(parent: fabric.fabric.Canvas, aCoords: [number, number, number, number]) {
    const line = new fabric.fabric.Line(aCoords, {
      stroke: 'pink',
      strokeWidth: 5,
      hoverCursor: 'auto',
      strokeDashArray: [8, 8],
      lockMovementX: true,
      lockMovementY: true,
      hasControls: false,
    });
    parent.add(line);
  }
}
