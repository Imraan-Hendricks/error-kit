import { ForbiddenError, GenericError } from './error-utils';

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
});
