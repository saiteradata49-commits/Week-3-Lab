// calculator.tests.js
// Unit tests for calculator functions (addition, subtraction, multiplication, division)
// Uses Jest

const { calculate } = require('../calculator');

describe('Calculator', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('subtracts 10 - 4 to equal 6', () => {
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('multiplies 45 x 2 to equal 90', () => {
    expect(calculate(45, 'x', 2)).toBe(90);
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('divides 20 / 5 to equal 4', () => {
    expect(calculate(20, '/', 5)).toBe(4);
    expect(calculate(20, '÷', 5)).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => calculate(10, '/', 0)).toThrow('Division by zero');
    expect(() => calculate(10, '÷', 0)).toThrow('Division by zero');
  });

  test('invalid operator throws error', () => {
    expect(() => calculate(2, '^', 3)).toThrow('Unsupported operator');
  });

  test('non-numeric input throws error', () => {
    expect(() => calculate('a', '+', 3)).toThrow('Both operands must be valid numbers');
    expect(() => calculate(2, '+', 'b')).toThrow('Both operands must be valid numbers');
  });
});
