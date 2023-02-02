export class DocumentView {
  render() {
    const root = document.querySelector('#root');
    root!.innerHTML = '';
    const html = document.createElement('div');
    html.innerHTML = `
    HELLO I AM Document;
    `;
    root!.append(html);
  }
}
