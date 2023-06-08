export class GenericError extends Error {
  static statusCode: number = 500;
  public name: string = 'GenericError';

  constructor(message: string = 'An error occurred.') {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GenericError);
    }
  }

  toJSON() {
    return {
      statusCode: GenericError.statusCode,
      name: this.name,
      message: this.message,
    };
  }
}
