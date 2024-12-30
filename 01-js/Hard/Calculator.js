class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    try {
      
      expression = expression.replace(/\s+/g, '');

      
      if (!/^[\d+\-*/().]+$/.test(expression)) {
        throw new Error("Invalid characters in expression");
      }

      
      const result = eval(expression);

      
      this.result = result;

      return result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}


const calc = new Calculator();

console.log("Initial result:", calc.getResult());

calc.add(5);
console.log("After adding 5:", calc.getResult());

calc.subtract(2);
console.log("After subtracting 2:", calc.getResult());

calc.multiply(3);
console.log("After multiplying by 3:", calc.getResult());

calc.divide(4);
console.log("After dividing by 4:", calc.getResult());

calc.clear();
console.log("After clearing:", calc.getResult());

console.log("Calculating expression: 10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log("Result:", calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"));

try {
  console.log("Invalid calculation test: 10 + abc");
  calc.calculate("10 + abc");
} catch (error) {
  console.error(error.message);
            }
