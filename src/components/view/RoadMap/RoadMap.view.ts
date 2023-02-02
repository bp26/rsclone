export class RoadMapView {
  render() {
    const root = document.querySelector('#root');
    root!.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
    HELLO I AM Road Map;
    `;
    root!.append(html);
  }
}
