import fabric from 'fabric';

export class DrawArcMainLine {
  constructor(parent: fabric.fabric.Canvas, left: number, top: number, radius: number, angle: number, startAngle: number, endAngle: number) {
    const arc = new fabric.fabric.Circle({
      radius: radius,
      left: left,
      top: top,
      angle: angle,
      startAngle: startAngle,
      endAngle: endAngle,
      stroke: 'green',
      strokeWidth: 10,
      strokeDashArray: [5, 8],
      fill: '',
      lockMovementX: true,
      lockMovementY: true,
      hoverCursor: 'default',
      hasControls: false,
      selectable: false,
    });
    parent.add(arc);
  }
}
