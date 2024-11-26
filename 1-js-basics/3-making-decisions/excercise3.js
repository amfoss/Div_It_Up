// The if statement will run code in between its blocks if the condition is true
// Syntax

// if (condition) {
//     //Condition is true. Code in this block will run.
// }

//Example:
let currentMoney = 10;
let laptopPrice = 20;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}

// The else statement will run the code in between its blocks when the condition is false. It's optional with an if statement.
// Syntax + Example
if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}

// Switch Statement
// The switch statement is used to perform different actions based on different conditions. Use the switch statement to select one of many code blocks to be executed.
// Syntax

// switch (expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//     // code block
//}

// program using switch statement
let a = 7;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);

// Conditions and Decisions with Logical Operators
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}

// Negation operator
// Anything that goes into an if needs to evaluate to true/false. By using the ! operator you can negate the expression
// Syntax
// if (!condition) {
//     // runs if condition is false
//   } else {
//     // runs if condition is true
//   }

// Ternary expressions
// Syntax
// let variable = condition ? <return this if true> : <return this if false></return>

let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(biggestNumber);

// Challenge
function checkNumber(num) {
  let result;
  if (num > 0) {
      result = "Positive";
  } else if (num < 0) {
      result = "Negative";
  } else {
      result = "Zero";
  }
  return result;
}

console.log(checkNumber(5));  // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0));  // Output: Zero

function checkNumber1(num) {
  let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  return result;
}

// Test
console.log(checkNumber1(5));  // Output: Positive
console.log(checkNumber1(-3)); // Output: Negative
console.log(checkNumber1(0));  // Output: Zero

// I prefer If..else..if (logical operator approach) as its easily understandable and readable.
