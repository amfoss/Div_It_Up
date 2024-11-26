// let myVariable;
// myVariable has now been declared using the let keyword. It currently doesn't have a value.

let myVariable = 123;
// The above is called an explicit initialization when a variable is declared and is assigned a value at the same time.

const PI = 3;
// PI = 4; // not allowed
// Constants must be initialized, or an error will occur when running code.
// The reference of a constant cannot be changed once initialized, or an error will occur when running code.

let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
// Template literals are another way to format strings, except instead of quotes, the backtick is used. Anything that is not plain text must be placed inside placeholders ${ }. This includes any variables that may be strings.

// Challenge

// 1. Case Sensitivity
let age = 1; 
let Age = 2; 
console.log(age == Age); // false
// JavaScript is case-sensitive, meaning age and Age are treated as entirely different variables.

// 2. Type Coercion
console.log(1 == '1'); // true
console.log(1 === '1'); // false
// == performs type coercion, converting '1' (string) to 1 (number) before comparing.
// === is a strict equality operator and doesn't perform type coercion, so it compares both value and type.

// 3. numm vs. undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// null and undefined are considered loosely equal (==) because they both represent "absence of value".
// They are not strictly equal (===) because null is an object type and undefined is a primitive type.

// 4. NaN is Not Equal to Itself
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// NaN (Not-a-Number) is unique in that it is not equal to anything, including itself. Use Number.isNaN(value) to check for NaN.

// 5. Typeof Difference
console.log(typeof null); // "object"
console.log(typeof NaN); // "number"
// typeof null returns "object" because of a historical bug in JavaScript that was never fixed for backward compatibility.
// typeof NaN returns "number" because NaN is technically a special value of the number type.