// calculator.tests.js
// Unit tests for calculator functions (addition, subtraction, multiplication, division)
// Uses Jest

const { calculate, modulo, power, squareRoot } = require('../calculator');

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
    expect(() => calculate(2, '@', 3)).toThrow('Unsupported operator');
  });

  test('non-numeric input throws error', () => {
    expect(() => calculate('a', '+', 3)).toThrow('Both operands must be valid numbers');
    expect(() => calculate(2, '+', 'b')).toThrow('Both operands must be valid numbers');
  });

  // Extended operations
  test('modulo with 5 % 2 to equal 1', () => {
    expect(calculate(5, '%', 2)).toBe(1);
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws error', () => {
    expect(() => calculate(5, '%', 0)).toThrow('Division by zero');
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });

  test('power with 2 ^ 3 to equal 8', () => {
    expect(calculate(2, '^', 3)).toBe(8);
    expect(power(2, 3)).toBe(8);
  });

  test('square root with √16 to equal 4', () => {
    expect(calculate(16, '√')).toBe(4);
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of negative throws error', () => {
    expect(() => calculate(-9, '√')).toThrow('Cannot take square root of negative number');
    expect(() => squareRoot(-9)).toThrow('Cannot take square root of negative number');
  });
});
