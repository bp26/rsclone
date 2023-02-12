import fabric from 'fabric';
import { DrawMainLineFabricCanvas } from './drawLine';
import { DrawSecondaryLineFabricCanvas } from './drawSecondaryLine';
import { DrawRectContent } from './drawRect';

export class FabricCanvas {
  private middleCanvas: number;
  constructor(canvas: HTMLCanvasElement) {
    const fabricCanvas = new fabric.fabric.Canvas(canvas);
    this.middleCanvas = canvas.clientWidth / 2;
    const lineIgnor = new DrawMainLineFabricCanvas(fabricCanvas, [this.middleCanvas, 0, this.middleCanvas, 1500]);
    const line1Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 55]);
    const line2Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 175]);
    const line3Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 290]);
    const line4Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 55]);
    const line5Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 175]);
    const line6Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 290]);

    const rect1Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 150, 'Internet');
    const rect2Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 50, 'DNS');
    const rect3Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 150, 'Domain');
    const rect4Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 250, 'Hosting');
    const rect5Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 50, 'Network');
    const rect6Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 150, 'HTTP');
    const rect7Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 250, 'Browser');
  }
}
