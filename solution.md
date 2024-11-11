# 1.js-basics
## Variables and Data Types
### Assignment
The data types that you would need to complete your shopping experience are:

user_id: The id of the user associated with the shopping.

items: A list or array of Items in the cart, showing the orders added to the cart by the user.

subtotal : The total cost of all the items in the cart before taxes, shipping, and discounts.

tax : The calculated tax for the cart, based on the subtotal.

shipping_cost: The shipping cost based on the shipping method selected.

discounts : the list of discounts with t&c.

total_price : The final price of the cart, including all taxes, shipping, and discounts.

### Challenge
#### Gotchas:
It gives unexpected output where we expect other output, it is very hard to trace and troubleshoot these problems. In simple terms it may be considered as a logical error.

Ex:
```
let age = 1; let Age = 2; age == Age
```
The above code resolves false as js is Case sensitive, as we havee given age=1 and Age=2 and we have used '==' operator it checks if both the values are equal.

Other example's:
```
'1' == 1;   // true
'1' === 1;  // false
```
In the above code '==' operator checks if the values are equal and return true whereas '===' operator checks even the data type so it returns false.

```
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr1 == arr2;  // false
arr1 === arr2; // false
```
In the above both return false even though the elements of the array are same but they are two distinct objects stored at different memory locations.


## Functions and Methods
### Assignment 
Function that returns a value
```
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
```
The above function gives output 8, the sum value gets returned from the function and we print the value outside the function using console.log

Function that does not return a value.
```
function Greet(name) {
  console.log(`Hello, ${name}`);
}

Greet("Alice");
```
This function does not return any value.

Function with default parameters
```
function greet(name = "Guest", age = 30) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet("Bob", 25);  // Output: Hello, Bob. You are 25 years old.
greet("Alice");    // Output: Hello, Alice. You are 30 years old. 
greet();           // Output: Hello, Guest. You are 30 years old.
```
The above function takes default parameters when parameters are not given in function call.

### Challenge
Function is a block of code which performs specific tasks whenever called whereas method is a function which is associated with an object.

## Making Decisions with JavaScript
### Assignment 
The code for the task given in assignment is :
```
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];

for(let i=0;i < allStudents.length;i++){
if(allStudents[i]>=3 || allStudents[i]==='A' || allStudents[i]==='-A' || allStudents[i]==='B' || allStudents[i]==='-B'){
studentsWhoPass.push(allStudents[i]);
}
}
console.log(studentsWhoPass);
```
### Challenge
```
// Code using logical operators
let int;
let x=10;
if (x > 0) {
        int = "Positive";
    } else if (x < 0) {
        int = "Negative";
    } else {
        int = "Zero";
    }
console.log(int);
```
```
// Code using ternary expression
let x=10;
let int = x>0 ? "Positive" : (x<0 ? "Negative" : "zero");
console.log(int);
```

I prefer to use ternary expression as the complexity and lines of the code decreases compared to using if....else

## Arrays-loops
### Assignment 
The code for the givem assignment is :
```
for(let i=1; i<=20; i=i+3){
      console.log(i);
}
```
Output in console:
1  
4  
7  
10  
13  
16  
19 
### Challenge
The rewritten code for the above assignment in for-of loop is:
```
const numbers = [];
for (let i = 1; i <= 20; i += 3) {
    numbers.push(i);
}

for (let num of numbers) {
    console.log(num);
}
```
Output is same.

