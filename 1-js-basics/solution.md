# Sub Topic 1 - Data Types

 ## Assignment : Data Type Practice

 ### Instruction :
 -Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?-

 ### Solution : 
 Product :
 1, productName : String-> name of products in cart.
 2, qunatityItems : number-> number of each iteem in cart.
 3, itemPrice : number -> price of each item.
 4, availability : boolean -> weather the item is present or not.

 User : 
 5, userName : string -> name of the user.
 6, userAddress : object -> as the address might change.
 7, userId : string -> seperate id for each users.

 Cart:
 8, countItem : number -> total items in cart.
 9, items : [prod1,prod2] -> array of objects.
 10, cartTotal : number -> total amount.
 11, isEmpty : boolean -> check wheather the cart is Empty or not.

 ## Challenge : 
 1, Try this in your console: let age = 1; let Age = 2; age == Age (resolves false -- why?) : because case sensitivity, as 'a' and 'A'are Different.
   a, if '''age == age; Age == Age''' will give True.

# Sub Topic 2 - functions,methods
## Assignment : Fun with Functions

### Instruction : 
Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.


### Solution :
1, Function that returns something:
```function addNumbers(a, b) {
    return a + b;
}
```

2, Function that doesnot return Anything:
```function logMessage(message) {
    console.log(message);
}
```
3, Function with only default parameters:
``` function calculateDiscount(price, discountRate = 0.1) {
    return price - price * discountRate;
}
```
4, Arrow function that return something:
```const multiplyNumbers = (x, y) => x * y;```
5, Arrow function that doesnot return anything:
```const logDate = () => {
    console.log(`Today's date is ${new Date().toDateString()}`);
};
```

## Challenge :
''' Functions are standalone blocks in javascript whereas methods are functions that are always associated with objects and depict their properties.'''

# Sub Topic 3 - making decisions
## Assignment : Operators
### Instructions :
Play around with operaators. Heres a suggestion for a program you can implement:
You have a set of students from two different grading system.

### Solution :

```
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];

for (let grade of allStudents) {
    if (typeof grade === 'string') {
        if (['A', 'A-', 'B', 'B-', 'C'].includes(grade)) {
            studentsWhoPass.push(grade);
        }
    } else if (typeof grade === 'number' && [3, 4, 5].includes(grade)) {
        studentsWhoPass.push(grade);
    }
}

console.log(studentsWhoPass);
```
## Challenge :
Create a program that is written first with logical operators, and then 
rewrite it using a ternary expression. What's your preferred syntax?
```function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(checkVotingEligibility(20)); // 
console.log(checkVotingEligibility(16)); // 
```
Re-written :
```function checkVotingEligibility(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

console.log(checkVotingEligibility(20)); // 
console.log(checkVotingEligibility(16)); // 
```
My preferance :

Logical Operators (if-else):
Preferred when the logic is complex or involves multiple conditions.
Easier to read and maintain for nested or multi-step logic.

Ternary Expression:
Ideal for simple conditions with straightforward outcomes.
Compact and efficient for small, clear logic.

# Sub Topic 4 - arrays, loops
## Assignment : Loop an Array
### Instructions:
Create a program that lists every 3rd number between 1-20 and prints it to the console.
TIP: use a for-loop and modify the iteration-expression

### Solution : 
```
for (let i = 1; i <= 20; i += 3) {
  console.log(i);
}
```
## Challenge:
1, For each :
```let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
];

let studentsWhoPass = [];

allStudents.forEach(grade => {
  if (typeof grade === 'number' && grade >= 3) {
    studentsWhoPass.push(grade);
  } else if (typeof grade === 'string' && ['A', 'A-', 'B', 'B-', 'C'].includes(grade)) {
    studentsWhoPass.push(grade);
  }
});

console.log('Students who pass (forEach):', studentsWhoPass);
```
2, for-of:
```let studentsWhoPass = [];

for (let grade of allStudents) {
  if (typeof grade === 'number' && grade >= 3) {
    studentsWhoPass.push(grade);
  } else if (typeof grade === 'string' && ['A', 'A-', 'B', 'B-', 'C'].includes(grade)) {
    studentsWhoPass.push(grade);
  }
}

console.log('Students who pass (for-of):', studentsWhoPass);
```
3,map:
```let studentsWhoPass = allStudents.map(grade => {
  if (typeof grade === 'number' && grade >= 3) {
    return grade;
  } else if (typeof grade === 'string' && ['A', 'A-', 'B', 'B-', 'C'].includes(grade)) {
    return grade;
  } else {
    return null; 
  }
}).filter(grade => grade !== null); 

console.log('Students who pass (map):', studentsWhoPass);
```


























