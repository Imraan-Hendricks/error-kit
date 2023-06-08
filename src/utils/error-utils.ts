export class GenericError extends Error {
  static statusCode: number = 500;
  public statusCode: number = GenericError.statusCode;
  public name: string = 'GenericError';

  constructor(message: string = 'An error occurred.') {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GenericError);
    }
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      name: this.name,
      message: this.message,
    };
  }
}

export class ForbiddenError extends GenericError {
  static statusCode: number = 403;
  public statusCode: number = ForbiddenError.statusCode;
  public name: string = 'ForbiddenError';

  constructor(message: string = 'Access forbidden.') {
    super(message);
  }
}
