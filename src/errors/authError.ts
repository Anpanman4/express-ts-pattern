export default class AuthError extends Error {
  private status: number;

  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}
