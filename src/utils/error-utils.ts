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

export class BadRequestError extends GenericError {
  static statusCode: number = 400;
  public statusCode: number = BadRequestError.statusCode;
  public name: string = 'BadRequestError';

  constructor(message: string = 'The request contains invalid data.') {
    super(message);
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

export class InternalServerError extends GenericError {
  static statusCode: number = 500;
  public statusCode: number = InternalServerError.statusCode;
  public name: string = 'InternalServerError';

  constructor(message: string = 'An unexpected error occurred on the server.') {
    super(message);
  }
}

export class UnauthorizedError extends GenericError {
  static statusCode: number = 401;
  public statusCode: number = UnauthorizedError.statusCode;
  public name: string = 'UnauthorizedError';

  constructor(message: string = 'Access denied. Authorization required.') {
    super(message);
  }
}

export class ValidationError<T> extends GenericError {
  static statusCode: number = 400;
  public statusCode: number = ValidationError.statusCode;
  public name: string = 'ValidationError';
  public errors: T[];

  constructor(
    errors: T[],
    message: string = 'The provided data does not meet the required criteria.',
  ) {
    super(message);
    this.errors = errors;
  }

  toJSON() {
    return {
      statusCode: ValidationError.statusCode,
      name: this.name,
      message: this.message,
      errors: this.errors,
    };
  }
}
