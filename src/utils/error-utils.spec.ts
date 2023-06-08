import {
  BadRequestError,
  ForbiddenError,
  GenericError,
  InternalServerError,
  NoRecordError,
  NotAcceptableError,
  NotFoundError,
  ServiceUnavailableError,
  UnauthorizedError,
  ValidationError,
} from './error-utils';

describe('Error utilities', () => {
  describe('GenericError', () => {
    it('should be an instance of Error', () => {
      const error = new GenericError();
      expect(error instanceof Error).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new GenericError();
      expect(error.message).toBe('An error occurred.');
      expect(error.name).toBe('GenericError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new GenericError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new GenericError();
      expect(error.statusCode).toBe(500);
      expect(GenericError.statusCode).toBe(500);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new GenericError(errorMessage);
      const expectedJson = {
        statusCode: GenericError.statusCode,
        name: 'GenericError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('BadRequestError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new BadRequestError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new BadRequestError();
      expect(error.message).toBe('The request contains invalid data.');
      expect(error.name).toBe('BadRequestError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new BadRequestError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new BadRequestError();
      expect(error.statusCode).toBe(400);
      expect(BadRequestError.statusCode).toBe(400);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new BadRequestError(errorMessage);
      const expectedJson = {
        statusCode: BadRequestError.statusCode,
        name: 'BadRequestError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('ForbiddenError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new ForbiddenError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new ForbiddenError();
      expect(error.message).toBe('Access forbidden.');
      expect(error.name).toBe('ForbiddenError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new ForbiddenError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new ForbiddenError();
      expect(error.statusCode).toBe(403);
      expect(ForbiddenError.statusCode).toBe(403);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new ForbiddenError(errorMessage);
      const expectedJson = {
        statusCode: ForbiddenError.statusCode,
        name: 'ForbiddenError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('InternalServerError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new InternalServerError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new InternalServerError();
      expect(error.message).toBe('An unexpected error occurred on the server.');
      expect(error.name).toBe('InternalServerError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new InternalServerError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new InternalServerError();
      expect(error.statusCode).toBe(500);
      expect(InternalServerError.statusCode).toBe(500);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new InternalServerError(errorMessage);
      const expectedJson = {
        statusCode: InternalServerError.statusCode,
        name: 'InternalServerError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('NotAcceptableError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new NotAcceptableError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new NotAcceptableError();
      expect(error.message).toBe(
        'The requested content type is not supported by the server.',
      );
      expect(error.name).toBe('NotAcceptableError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new NotAcceptableError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new NotAcceptableError();
      expect(error.statusCode).toBe(406);
      expect(NotAcceptableError.statusCode).toBe(406);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new NotAcceptableError(errorMessage);
      const expectedJson = {
        statusCode: NotAcceptableError.statusCode,
        name: 'NotAcceptableError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('NotFoundError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new NotFoundError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new NotFoundError();
      expect(error.message).toBe('The requested resource was not found.');
      expect(error.name).toBe('NotFoundError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new NotFoundError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new NotFoundError();
      expect(error.statusCode).toBe(404);
      expect(NotFoundError.statusCode).toBe(404);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new NotFoundError(errorMessage);
      const expectedJson = {
        statusCode: NotFoundError.statusCode,
        name: 'NotFoundError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('NoRecordError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new NoRecordError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new NoRecordError();
      expect(error.message).toBe('The requested record does not exist.');
      expect(error.name).toBe('NoRecordError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new NoRecordError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new NoRecordError();
      expect(error.statusCode).toBe(404);
      expect(NoRecordError.statusCode).toBe(404);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new NoRecordError(errorMessage);
      const expectedJson = {
        statusCode: NoRecordError.statusCode,
        name: 'NoRecordError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('ServiceUnavailableError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new ServiceUnavailableError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new ServiceUnavailableError();
      expect(error.message).toBe(
        'Service is currently unavailable. Please try again later.',
      );
      expect(error.name).toBe('ServiceUnavailableError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new ServiceUnavailableError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new ServiceUnavailableError();
      expect(error.statusCode).toBe(503);
      expect(ServiceUnavailableError.statusCode).toBe(503);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new ServiceUnavailableError(errorMessage);
      const expectedJson = {
        statusCode: ServiceUnavailableError.statusCode,
        name: 'ServiceUnavailableError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('UnauthorizedError', () => {
    it('should be an instance of Error and GenericError', () => {
      const error = new UnauthorizedError();
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new UnauthorizedError();
      expect(error.message).toBe('Access denied. Authorization required.');
      expect(error.name).toBe('UnauthorizedError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new UnauthorizedError(errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should have the correct statusCode', () => {
      const error = new UnauthorizedError();
      expect(error.statusCode).toBe(401);
      expect(UnauthorizedError.statusCode).toBe(401);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new UnauthorizedError(errorMessage);
      const expectedJson = {
        statusCode: UnauthorizedError.statusCode,
        name: 'UnauthorizedError',
        message: errorMessage,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });

  describe('ValidationError', () => {
    const errors = [{ name: 'customName', message: 'custom message' }];

    it('should be an instance of Error and GenericError', () => {
      const error = new ValidationError(errors);
      expect(error instanceof Error).toBe(true);
      expect(error instanceof GenericError).toBe(true);
    });

    it('should set the default message and name correctly', () => {
      const error = new ValidationError(errors);
      expect(error.message).toBe(
        'The provided data does not meet the required criteria.',
      );
      expect(error.name).toBe('ValidationError');
    });

    it('should set the custom message correctly', () => {
      const errorMessage = 'Custom error message';
      const error = new ValidationError(errors, errorMessage);
      expect(error.message).toBe(errorMessage);
    });

    it('should set the errors correctly', () => {
      const error = new ValidationError(errors);
      expect(error.errors).toEqual(errors);
    });

    it('should have the correct statusCode', () => {
      const error = new ValidationError(errors);
      expect(error.statusCode).toBe(400);
      expect(ValidationError.statusCode).toBe(400);
    });

    it('should return the correct JSON representation', () => {
      const errorMessage = 'Error message';
      const error = new ValidationError(errors, errorMessage);
      const expectedJson = {
        statusCode: ValidationError.statusCode,
        name: 'ValidationError',
        message: errorMessage,
        errors,
      };
      expect(error.toJSON()).toEqual(expectedJson);
    });
  });
});
