import fabric from 'fabric';
import { DrawMainLineFabricCanvas } from './drawLine';
import { DrawSecondaryLineFabricCanvas } from './drawSecondaryLine';
import { DrawRectContent } from './drawRect';
import { DrawArcMainLine } from './drawArc';
import { BABY_SLOTH } from '../../../utils/constants/slothIcons/baby-sloth';

export class FabricCanvas {
  private middleCanvas: number;
  constructor(canvas: HTMLCanvasElement) {
    const fabricCanvas = new fabric.fabric.Canvas(canvas);
    this.middleCanvas = canvas.clientWidth / 2;
    const polyline = new fabric.fabric.Polyline(
      [
        {
          x: this.middleCanvas - 390,
          y: 1240,
        },
        {
          x: this.middleCanvas + 150,
          y: 1240,
        },
        {
          x: this.middleCanvas + 150,
          y: 1430,
        },
        {
          x: this.middleCanvas - 390,
          y: 1430,
        },
        {
          x: this.middleCanvas - 390,
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
          x: this.middleCanvas + 240,
          y: 1575,
        },
        {
          x: this.middleCanvas + 280,
          y: 1575,
        },
        {
          x: this.middleCanvas + 280,
          y: 1530,
        },
        {
          x: this.middleCanvas + 560,
          y: 1530,
        },
        {
          x: this.middleCanvas + 560,
          y: 1780,
        },
        {
          x: this.middleCanvas + 280,
          y: 1780,
        },
        {
          x: this.middleCanvas + 280,
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

    fabric.fabric.loadSVGFromString(BABY_SLOTH, function (objects, options) {
      const obj = fabric.fabric.util.groupSVGElements(objects, options);
      obj.set({
        selectable: false,
        top: 30,
        left: 630,
        hoverCursor: 'auto',
      });
      obj.scaleToWidth(100);
      fabricCanvas.add(obj).renderAll();
    });
    fabricCanvas.add(polyline);
    fabricCanvas.add(polyline1);
    const lineIgnor = new DrawMainLineFabricCanvas(fabricCanvas, [this.middleCanvas, 120, this.middleCanvas, 750]);
    const arcLine1 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 40, 495, 300, -8, Math.PI * 40, Math.PI * 60);
    const arcLine2 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 350, 1030, 300, -10, Math.PI - 50, Math.PI * 20);
    const arcLine3 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 30, 1425, 500, -2, Math.PI + 130, Math.PI - 130);
    const line1Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 55], 'pink');
    const line2Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 175], 'pink');
    const line3Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 290], 'pink');
    const line4Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 55], 'pink');
    const line5Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 175], 'pink');
    const line6Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 290], 'pink');

    const rect1Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 150, 'Internet', 'pink');
    const rect2Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 50, 'DNS', 'pink');
    const rect3Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 150, 'Domain', 'pink');
    const rect4Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 250, 'Hosting', 'pink');
    const rect5Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 50, 'Network', 'pink');
    const rect6Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 150, 'HTTP', 'pink');
    const rect7Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 250, 'Browser', 'pink');

    const rect8Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 450, 'HTML', 'blue');
    const rect9Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 550, 'CSS', 'yellow');
    const rect10Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 650, 'JavaScript', 'orange');

    const line7Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 375], 'blue');
    const line8Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 445], 'blue');
    const line9Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 515], 'blue');
    const line10Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 585], 'blue');
    const line11Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 375], 'blue');
    const line12Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 445], 'blue');

    const rect11Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 350, 'Basics', 'blue');
    const rect12Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 420, 'Semantic', 'blue');
    const rect13Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 490, 'Forms', 'blue');
    const rect14Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 560, 'Best Practies', 'blue');
    const rect15Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 350, 'Accessibility', 'blue');
    const rect16Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 420, 'SEO Basic', 'blue');

    const line13Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 515], 'yellow');
    const line14Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 585], 'yellow');
    const line15Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 655], 'yellow');

    const rect17Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 490, 'Basics', 'yellow');
    const rect18Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 560, 'Layouts', 'yellow');
    const rect19Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 630, 'Media Query', 'yellow');

    const rect20Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 630, 'Syntax', 'orange');
    const rect21Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 700, 'DOM', 'orange');
    const rect22Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 770, 'AJAX', 'orange');
    const rect23Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 840, 'ES6+', 'orange');

    const line16Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 655], 'orange');
    const line17Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 725], 'orange');
    const line18Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 795], 'orange');
    const line19Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 865], 'orange');

    const rect24Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 50, 1000, 'Git', 'brown');
    const rect25Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1000, 'GitHub', 'brown');
    const rect26Ignor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1070, 'GitLab', 'brown');

    const line20Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 250, 1025, this.middleCanvas + 320, 1024], 'brown');
    const line21Ignor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 420, 1050, this.middleCanvas + 420, 1070], 'brown');

    const webSecurityRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 200, 1300, 'Web Security', 'red');
    const httpsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 1270, 'HTTPS', 'red');
    const corsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 1340, 'CORS', 'red');
    const cspRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 350, 1340, 'CSP', 'red');
    const gwaspRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 350, 1270, 'GWASP', 'red');

    const webSecurityLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 200, 1325, this.middleCanvas + 150, 1325], 'red');

    const packagesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 30, 1550, 'Packages', 'green');
    const npmRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1550, 'npm', 'green');
    const yarnRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1620, 'yarn', 'green');
    const pnpmRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1690, 'pnpm', 'green');
  }
}
