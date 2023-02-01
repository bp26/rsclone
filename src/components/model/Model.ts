export class Model {
  data: { a: number } = { a: 1 };
  static instance: Model;
  constructor() {
    if (typeof Model.instance === 'object') {
      return Model.instance;
    }
    console.log('hello');
    Model.instance = this;
    return this;
  }

  getData() {
    console.log('asdasd');
    return this.data;
  }

  addPost() {
    console.log(this.data);
  }
}
