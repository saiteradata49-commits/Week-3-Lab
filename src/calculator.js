#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (x)
 *  - Division (÷)
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 * Example:
 *   node calculator.js 5 + 3
 */

function calculate(num1, operator, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both operands must be valid numbers');
  }
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
    case '*':
      return a * b;
    case '÷':
    case '/':
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    default:
      throw new Error('Unsupported operator');
  }
}

if (require.main === module) {
  const [,, num1, operator, num2] = process.argv;
  function printUsage() {
    console.log('Usage: node calculator.js <number1> <operator> <number2>');
    console.log('Operators supported: +  -  x  ÷');
    process.exit(1);
  }
  if (!num1 || !operator || !num2) {
    printUsage();
  }
  try {
    const result = calculate(num1, operator, num2);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { calculate };
