import { GenericError } from './';

describe('main', () => {
  it('should correctly export named errors', () => {
    const error = new GenericError();
    expect(error instanceof Error).toBe(true);
  });
});
