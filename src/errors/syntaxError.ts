export default class SyntaxError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}
