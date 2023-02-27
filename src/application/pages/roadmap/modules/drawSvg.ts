import fabric from 'fabric';

export class DrawSvgCanvas {
  constructor(parent: fabric.fabric.Canvas, svg: string, top: number, left: number, scale: number) {
    fabric.fabric.loadSVGFromString(svg, function (objects, options) {
      const obj = fabric.fabric.util.groupSVGElements(objects, options);
      obj.set({
        selectable: false,
        top: top,
        left: left,
        hoverCursor: 'default',
      });
      obj.scaleToWidth(scale);
      parent.add(obj).renderAll();
    });
  }
}
