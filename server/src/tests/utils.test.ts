import { luhn } from '../utils';

describe('luhn algorithm correctly detects card numbers', () => {
  test('returns true for valid card numbers', () => {
    expect(luhn('371449635398431')).toBe(true);
    expect(luhn('30569309025904')).toBe(true);
    expect(luhn('6011111111111117')).toBe(true);
    expect(luhn('3530111333300000')).toBe(true);
    expect(luhn('5555555555554444')).toBe(true);
    expect(luhn('4111111111111111')).toBe(true);
  });
  test('returns false for inValid card numbers', () => {
    expect(luhn('1234')).toBe(false);
    expect(luhn('111111111111')).toBe(false);
  });
});
