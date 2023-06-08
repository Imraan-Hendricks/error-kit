import { sum } from '.';

describe('main', () => {
  it('should add numbers', () => {
    const result = sum(5, 7);
    expect(result).toBe(12);
  });
});
