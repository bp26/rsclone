import fabric from 'fabric';

export class DrawMainLineFabricCanvas {
  constructor(parent: fabric.fabric.Canvas, aCoords: [number, number, number, number]) {
    const line = new fabric.fabric.Line(aCoords, {
      stroke: 'green',
      strokeWidth: 10,
      hoverCursor: 'auto',
      strokeDashArray: [5, 8],
      lockMovementX: true,
      lockMovementY: true,
      hasControls: false,
    });
    parent.add(line);
  }
}
