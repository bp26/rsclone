import fabric from 'fabric';

export class DrawPolylineCanvas {
  constructor(parent: fabric.fabric.Canvas, middle: number) {
    const polyline = new fabric.fabric.Polyline(
      [
        {
          x: middle - 390,
          y: 1240,
        },
        {
          x: middle + 150,
          y: 1240,
        },
        {
          x: middle + 150,
          y: 1430,
        },
        {
          x: middle - 390,
          y: 1430,
        },
        {
          x: middle - 390,
          y: 1240,
        },
      ],
      {
        fill: '',
        stroke: 'red',
        strokeDashArray: [8, 8],
        strokeWidth: 5,
        selectable: false,
        hoverCursor: 'auto',
      }
    );

    const polyline1 = new fabric.fabric.Polyline(
      [
        {
          x: middle + 240,
          y: 1575,
        },
        {
          x: middle + 280,
          y: 1575,
        },
        {
          x: middle + 280,
          y: 1530,
        },
        {
          x: middle + 560,
          y: 1530,
        },
        {
          x: middle + 560,
          y: 1780,
        },
        {
          x: middle + 280,
          y: 1780,
        },
        {
          x: middle + 280,
          y: 1575,
        },
      ],
      {
        fill: '',
        stroke: 'green',
        strokeDashArray: [8, 8],
        strokeWidth: 5,
        selectable: false,
        hoverCursor: 'auto',
      }
    );

    parent.add(polyline);
    parent.add(polyline1);
  }
}
