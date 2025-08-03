export class CustomError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}
