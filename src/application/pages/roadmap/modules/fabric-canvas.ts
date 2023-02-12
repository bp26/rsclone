import fabric from 'fabric';
import { DrawMainLineFabricCanvas } from './drawLine';
import { DrawSecondaryLineFabricCanvas } from './drawSecondaryLine';
import { DrawRectContent } from './drawRect';
import { DrawArcMainLine } from './drawArc';
import { BABY_SLOTH } from '../../../utils/constants/slothIcons/baby-sloth';
import { DrawSvgCanvas } from './drawSvg';
import { DrawPolylineCanvas } from './drawPolyline';

export class FabricCanvas {
  private middleCanvas: number;
  constructor(canvas: HTMLCanvasElement) {
    const fabricCanvas = new fabric.fabric.Canvas(canvas);
    this.middleCanvas = canvas.clientWidth / 2;

    const polylynes = new DrawPolylineCanvas(fabricCanvas, this.middleCanvas);
    const svgImageIgnor = new DrawSvgCanvas(fabricCanvas, BABY_SLOTH, 30, 630, 100);
    const mainLineIgnor = new DrawMainLineFabricCanvas(fabricCanvas, [this.middleCanvas, 120, this.middleCanvas, 750]);
    const arcLine1 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 40, 495, 300, -8, Math.PI * 40, Math.PI * 60);
    const arcLine2 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 350, 1030, 300, -10, Math.PI - 50, Math.PI * 20);
    const arcLine3 = new DrawArcMainLine(fabricCanvas, this.middleCanvas - 30, 1425, 500, -2, Math.PI + 130, Math.PI - 130);
    const domainLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 55], 'pink');
    const dnsLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 175], 'pink');
    const hostingLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 290], 'pink');
    const networkLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 55], 'pink');
    const httpLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 175], 'pink');
    const browserLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 290], 'pink');

    const internetRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 150, 'Internet', 'pink');
    const dnsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 50, 'DNS', 'pink');
    const domainRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 150, 'Domain', 'pink');
    const hostingRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 250, 'Hosting', 'pink');
    const networkRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 50, 'Network', 'pink');
    const httpRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 150, 'HTTP', 'pink');
    const browserRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 250, 'Browser', 'pink');

    const htmlRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 450, 'HTML', 'blue');
    const cssRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 550, 'CSS', 'yellow');
    const jsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 650, 'JavaScript', 'orange');

    const basicsLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 375], 'blue');
    const semanticLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 445], 'blue');
    const formLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 515], 'blue');
    const practiesLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 585], 'blue');
    const accesLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 375], 'blue');
    const seoLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 445], 'blue');

    const basicsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 350, 'Basics', 'blue');
    const semanticRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 420, 'Semantic', 'blue');
    const formRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 490, 'Forms', 'blue');
    const practiesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 560, 'Best Practies', 'blue');
    const accesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 350, 'Accessibility', 'blue');
    const seoRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 420, 'SEO Basic', 'blue');

    const basicLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 515], 'yellow');
    const layoutLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 585], 'yellow');
    const mediaLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 655], 'yellow');

    const basicRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 490, 'Basics', 'yellow');
    const layoutRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 560, 'Layouts', 'yellow');
    const mediaRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 630, 'Media Query', 'yellow');

    const syntaxRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 630, 'Syntax', 'orange');
    const domRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 700, 'DOM', 'orange');
    const ajaxRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 770, 'AJAX', 'orange');
    const es6RectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 840, 'ES6+', 'orange');

    const syntaxLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 655], 'orange');
    const domLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 725], 'orange');
    const ajaxLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 795], 'orange');
    const es6LineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 865], 'orange');

    const gitRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 50, 1000, 'Git', 'brown');
    const gitHubRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1000, 'GitHub', 'brown');
    const gitLubRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1070, 'GitLab', 'brown');

    const githubLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 250, 1025, this.middleCanvas + 320, 1024], 'brown');
    const gitLubLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 420, 1050, this.middleCanvas + 420, 1070], 'brown');

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
