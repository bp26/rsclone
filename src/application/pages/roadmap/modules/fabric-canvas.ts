import fabric from 'fabric';
import { DrawMainLineFabricCanvas } from './drawLine';
import { DrawSecondaryLineFabricCanvas } from './drawSecondaryLine';
import { DrawRectContent } from './drawRect';
import { DrawArcMainLine } from './drawArc';
import { BABY_SLOTH } from '../../../utils/constants/slothIcons/baby-sloth';
import { DrawSvgCanvas } from './drawSvg';
import { DrawPolylineCanvas } from './drawPolyline';
import { RoadmapRectName, ColorRect } from '../../../types/enums';

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
    const domainLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 55], ColorRect.INTERNET);
    const dnsLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 175], ColorRect.INTERNET);
    const hostingLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 175, this.middleCanvas + 275, 290], ColorRect.INTERNET);
    const networkLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 55], ColorRect.INTERNET);
    const httpLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 175], ColorRect.INTERNET);
    const browserLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 175, this.middleCanvas - 275, 290], ColorRect.INTERNET);

    const internetRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 150, RoadmapRectName.INTERNET, ColorRect.INTERNET);
    const dnsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 50, RoadmapRectName.DNS, ColorRect.INTERNET);
    const domainRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 150, RoadmapRectName.DOMAIN, ColorRect.INTERNET);
    const hostingRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 250, RoadmapRectName.HOSTING, ColorRect.INTERNET);
    const networkRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 50, RoadmapRectName.NETWORK, ColorRect.INTERNET);
    const httpRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 150, RoadmapRectName.HTTP, ColorRect.INTERNET);
    const browserRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 250, RoadmapRectName.BROWSER, ColorRect.INTERNET);

    const htmlRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 450, RoadmapRectName.HTML, ColorRect.HTML);
    const cssRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 550, RoadmapRectName.CSS, ColorRect.CSS);
    const jsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 650, RoadmapRectName.JAVA_SCRIPT, ColorRect.JAVA_SCRIPT);

    const basicsLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 375], ColorRect.HTML);
    const semanticLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 445], ColorRect.HTML);
    const formLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 515], ColorRect.HTML);
    const practiesLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 475, this.middleCanvas - 250, 585], ColorRect.HTML);
    const accesLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 375], ColorRect.HTML);
    const seoLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 475, this.middleCanvas + 250, 445], ColorRect.HTML);

    const basicsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 350, RoadmapRectName.BASICS, ColorRect.HTML);
    const semanticRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 420, RoadmapRectName.SEMANTIC, ColorRect.HTML);
    const formRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 490, RoadmapRectName.FORMS, ColorRect.HTML);
    const practiesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 560, RoadmapRectName.BEST_PRACTIES, ColorRect.HTML);
    const accesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 350, RoadmapRectName.ACCESSIBILITY, ColorRect.HTML);
    const seoRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 420, RoadmapRectName.SEO_BASIC, ColorRect.HTML);

    const basicLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 515], ColorRect.CSS);
    const layoutLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 585], ColorRect.CSS);
    const mediaLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 100, 575, this.middleCanvas + 250, 655], ColorRect.CSS);

    const basicRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 490, RoadmapRectName.BASICS_CSS, ColorRect.CSS);
    const layoutRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 560, RoadmapRectName.LAYOUTS, ColorRect.CSS);
    const mediaRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 250, 630, RoadmapRectName.MEDIA_QUERY, ColorRect.CSS);

    const syntaxRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 630, RoadmapRectName.SYNTAX, ColorRect.JAVA_SCRIPT);
    const domRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 700, RoadmapRectName.DOM, ColorRect.JAVA_SCRIPT);
    const ajaxRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 770, RoadmapRectName.AJAX, ColorRect.JAVA_SCRIPT);
    const es6RectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 450, 840, RoadmapRectName.ES6, ColorRect.JAVA_SCRIPT);

    const syntaxLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 655], ColorRect.JAVA_SCRIPT);
    const domLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 725], ColorRect.JAVA_SCRIPT);
    const ajaxLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 795], ColorRect.JAVA_SCRIPT);
    const es6LineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas - 100, 675, this.middleCanvas - 250, 865], ColorRect.JAVA_SCRIPT);

    const gitRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 50, 1000, RoadmapRectName.GIT, ColorRect.GIT);
    const gitHubRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1000, RoadmapRectName.GIT_HUB, ColorRect.GIT);
    const gitLubRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1070, RoadmapRectName.GIT_LUB, ColorRect.GIT);

    const githubLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 250, 1025, this.middleCanvas + 320, 1024], ColorRect.GIT);
    const gitLubLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 420, 1050, this.middleCanvas + 420, 1070], ColorRect.GIT);

    const webSecurityRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 200, 1300, RoadmapRectName.WEB_SECURITY, ColorRect.WEB_SECURITY);
    const httpsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 1270, RoadmapRectName.HTTPS, ColorRect.WEB_SECURITY);
    const corsRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 100, 1340, RoadmapRectName.CORS, ColorRect.WEB_SECURITY);
    const cspRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 350, 1340, RoadmapRectName.CSP, ColorRect.WEB_SECURITY);
    const gwaspRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas - 350, 1270, RoadmapRectName.GWASP, ColorRect.WEB_SECURITY);

    const webSecurityLineIgnor = new DrawSecondaryLineFabricCanvas(fabricCanvas, [this.middleCanvas + 200, 1325, this.middleCanvas + 150, 1325], ColorRect.WEB_SECURITY);

    const packagesRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 30, 1550, RoadmapRectName.PACKAGES, ColorRect.PACKAGES);
    const npmRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1550, RoadmapRectName.NPM, ColorRect.PACKAGES);
    const yarnRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1620, RoadmapRectName.YARN, ColorRect.PACKAGES);
    const pnpmRectIgnor = new DrawRectContent(fabricCanvas, this.middleCanvas + 320, 1690, RoadmapRectName.PNPM, ColorRect.PACKAGES);
  }
}
