# Sub Topic 1 - data types

## Assignment : Data Types Practice

### Instructions :
```
Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?
```
### Solution :
```
- Components associated with the cart : cart itself, user, product.
- Cart : 
1) size : number -> total items in the car
2) isEmpty : boolean -> to check the state of the cart
3) cartTotal : number -> total payable amount 
4) items : [product1, product2] -> array of objects, as there are several objects a user can order

- Product :
2) productName : string -> name of products in car
4) quantity : number -> total quantity of each product in cart
5) productPrice : number -> price of each product in cart
7) avalability : boolean -> check if the product is in stock or not

- User :
1) name : string -> name of the user
2) address : object -> user address should be an object as it's value might change in future,
3) isLoggedIn : boolean -> to check if user is logged in and can hence view the cart or not 
and it has several nested components such as street, city, state, country, pincode.
4) userId : string -> to differentiate one user from the other
```
## Challenge : 
```
1) let age = 1; let Age = 2; age == Age
- above code resolves false in js, why? : because of the case sensitivity, in this case 'a' and 'A'.
- incase the above situation said : age == age; or Age == Age the output would have been 'true'.
- other such cases: 
a. loose equality vs. strict equality : 0 == '0' (true); 0 === '0' (false)
b. Nan === Nan (false) -> Nan is the only value in Javascript that doesn't equal itself
c. addition of arrays: arrays are converted to strings during addition: [1,2] + [3,4] = "1,23,4"
d. floating-point nos: 0.4 + 0.59 === 0.99 (false)-> floating point nos are depicted in binary in js.
```

## Review & Self Study :
```
- Exercise Done : https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/
- Implemented all the given examples in the console and learned the concept
- What I learned: 
1. access and manipulation of different
   parts of a URL, such as protocol, host, pathname, and query parameters
2. String manipulation methods like split() to deconstruct or reconstruct custom URLs
- Uses of accessing URL components in Javascript : 
- client-side routing : eg. /home, /about
- rendering specific components based on query parameter : eg. ?country=india
- manipulating url paths
- reconstructing urls
```

# Sub Topic 2 - functions, methods
## Assignment : Fun with Functions

### Instructions : 
Create different functions, both functions that return something and functions that don't return anything.
See if you can create a function that has a mix of parameters and parameters with default values.

### Solution :

1. Function that returns something : 
```js
function twoSum(a, b) {
  return a + b;
}
console.log(twoSum(2,4)); // output : 6
```
2. Function that doesn't return anything :
```js
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
console.log(greetUser("Aakash")); // output : Hello, Aakash!
```
3. Function with mix of parameters : 
```js
function examEligibility(totalClasses, classesAttended, subject, name, success = 'Congrats', failure = 'Sorry'){
  const percentage = (classesAttended/totalClasses)*100;
  if (percentage > 75){
    console.log('${success} ${name}, you're eligible for the ${subject} exam!');
  }
  else {
    console.log('${failure} ${name} you can't attend the ${subject} exam :(');
  }
}
```
## Challenge : 
```
Functions are standalone blocks in javascript whereas methods are functions that are always 
associated with objects and depict their properties.
```

# Sub Topic 3 - making decisions
## Assignment : Operators
### Instructions : 
Play around with operators. Here's a suggestion for a program you can implement:
You have a set of students from two different grading systems.

### Solution :
```js
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
```js
function checkSleepTime(taskGoal, tasksDone){
  if (tasksDone >= taskGoal){
    console.log('Congrats you can sleep now'); 
  }
  else {
    console.log('You may not sleep now, acheive the target first');
  }
}
```
```js
function checkSleepTime(taskGoal, tasksDone){

  let permissionGranted = 'Well done, you can sleep now :)';
  let permissionDenied = 'You must complete the tasks before sleeping .\/.'

  switch(tasksDone >= taskGoal){

    case true:
      return permissionGranted;
    case false:
      return permissionDenied;
  } 
}
```
# Sub Topic 4 - arrays, loops
## Assignment : Loop an Array	 
### Instructions : 
Create a program that lists every 3rd number between 1-20 and prints it to the console.
TIP: use a for-loop and modify the iteration-expression
### Solution : 
```js
for(let i = 2; i < 20; i += 3){
    console.log(i+1);
}
```

## Challenge :
1. forEach
```js
const array1 = [1,2,3,4,5,6];
array.forEach((element) => console.log(element));
```
2. for of
```js
const array = [1,2,3,4,5,6];
for (const element of array) {
  console.log(element);
}
```
3. map
```js
const array = [1,2,3,4,5,6];
const mapped = array.map((x) => x);
console.log(mapped);
```
