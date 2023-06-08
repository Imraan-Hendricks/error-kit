import { GenericError } from './error-utils';

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

  it('should have the correct static statusCode', () => {
    expect(GenericError.statusCode).toBe(500);
  });

  it('should set the custom message correctly', () => {
    const errorMessage = 'Custom error message';
    const error = new GenericError(errorMessage);
    expect(error.message).toBe(errorMessage);
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
