export class ResponceError extends Error {
  status: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = `${status}`;
  }
}
