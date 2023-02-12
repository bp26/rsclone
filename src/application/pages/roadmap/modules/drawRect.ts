import fabric from 'fabric';

export class DrawRectContent {
  mainRect: fabric.fabric.Rect;
  mainContentRect: fabric.fabric.Text;
  mainGroup: fabric.fabric.Group;
  constructor(parent: fabric.fabric.Canvas, left: number, top: number, textContent: string) {
    this.mainRect = new fabric.fabric.Rect({
      fill: '#436aa3',
      width: 200,
      height: 50,
      originX: 'center',
      originY: 'center',
      shadow: 'rgba(0,0,0,0.8) 0px 8px 22px',
      strokeWidth: 2,
      stroke: '#000',
      rx: 10,
    });

    this.mainContentRect = new fabric.fabric.Text(textContent, {
      fontSize: 35,
      fontWeight: 600,
      originX: 'center',
      originY: 'center',
      fill: '#bcbec1',
    });

    this.mainGroup = new fabric.fabric.Group([this.mainRect, this.mainContentRect], {
      left: left,
      top: top,
      angle: 0,
      hasControls: false,
      hoverCursor: 'pointer',
      lockMovementX: true,
      lockMovementY: true,
    });

    const hoverRect = new fabric.fabric.Rect({
      fill: '#4187ee',
      width: 200,
      scaleX: 1.2,
      scaleY: 1.2,
      height: 50,
      originX: 'center',
      originY: 'center',
      shadow: 'rgba(0,0,0,0.8) 0px 12px 22px',
      strokeWidth: 2,
      stroke: '#000',
      rx: 10,
    });

    const hoverContentRec = new fabric.fabric.Text(textContent, {
      fontSize: 40,
      fontWeight: 600,
      originX: 'center',
      originY: 'center',
      fill: '#cfe7a1',
    });

    const hoverGroup = new fabric.fabric.Group([hoverRect, hoverContentRec], {
      left: left - 20,
      top: top,
      angle: 0,
      hasControls: false,
      hoverCursor: 'pointer',
      lockMovementX: true,
      lockMovementY: true,
    });

    this.mainGroup.on('mouseover', () => {
      parent.remove(this.mainGroup);
      parent.add(hoverGroup);
    });

    hoverGroup.on('mouseout', () => {
      parent.remove(hoverGroup);
      parent.add(this.mainGroup);
    });

    // hoverGroup.on('mousedown', () => {
    //   console.log(hoverGroup.item(1).text)
    // })

    parent.add(this.mainGroup);
  }
}
