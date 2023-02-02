export class HomeView {
  render() {
    const root = document.querySelector('#root');
    root!.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
    HELLO I AM HOME;
    `;
    root!.append(html);
  }
}
