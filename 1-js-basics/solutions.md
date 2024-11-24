# 1-data-types

### 🚀 Challenges

## 'Gotchas' in JavaScript

1. Case sensitivity
```javascript
let age = 1
let Age = 2
age == Age          // returns false
```

This is because the variables `age` and `Age` are treated as different with different values `1` and `2`. Hence when we check for equality, it returns `false`.

2. == and ===
```javascript
console.log(12 == '12')     // returns true 
console.log( 12 === '12')   // returns false
```

The `==` operator performs type coercion when 2 different data types are used to check for equality. Here, `12` is a number and `'12'` being a string. Therefore it converts the string `'12'` into a number `12` and is then returns a true value for the equality check. But the `===` operator enforces strict data type equality check where both the arguments have to be of the same data type along with the same value for it to return true, else it returns false. 

3. 0 and -0

```javascript
0 == -0;                // true
12/0 == 12/-0;          // false
```

This is because JavaScript handles numbers differently. There's both positive zero and a negative zero. When checking for equality, they might be the same but when divided by negative and positive zeroes separately, it results in negative and positive infinity respectively.


## JavaScript exercise

### Check if Number is Even/Odd (https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/)

```javascript
if (value%2 == 0)
	console.log("Even number");
else
	console.log("Odd number");
```

## Assignment

Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?

| Data type | Purpose |
| :-:       | :-:         |
| Number    | Prices, quantity  |
| String    | Product name, categories, reviews |
| Arrays    | To list the products that a row in a shelf contains |
| Objects   | Entire description of a product in the shopping cart as one |
| Boolean   | To show whether an item we're finding is in available in stock or not |
| null      | To show the absence of a value, here could be missing details on the description of a product |

# 2-functions-methods

### 🚀 Challenges

### Difference between functions and methods in one sentence
Functions are independent set of instructions and do not depend on any objects, whereas method is a function which is linked with an object.

## Assignment
Create different functions, both functions that return something and functions that don't return anything. Also create a function that has a mix of parameters and parameters with default values.


### Function that returns a value:

```javascript
function square(n) {
    return(n*n);            // returns a value
}
```

### Function that doesn't return a value

```javascript
function square(n) {
    const result = n*n;
    console.log(`The square of ${n} is `, result);
}
```

### Function with parameters and parameters having default values
```javascript
function velocityOfRaindrop(u, a=(-9.81), t) {
    const v = u + a*t;
    return(v);
}
```

# 3-making-decisions

### 🚀 Challenges
Create a program that is written first with logical operators, and then rewrite it using a ternary expression. 

### Program using logical operators
```javascript
if (num%2==0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

### Same program using ternary operators
```javascript
console.log(((num%2==0) ? "Even number" : "Odd number" ));
```
Ternary operators keep the code neat when a simple and quick decision-making is required.


## Assignment
Grading system program
```javascript
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
    if (isNaN(allStudents[i])) {
        if (allStudents[i]!='C-') {
            studentsWhoPass.push(allStudents[i]);
        }
    } else {
        if (allStudents[i]>=3) {
            studentsWhoPass.push(allStudents[i]);
        }
    }
}
console.log(studentsWhoPass);
```

# 4-arrays-loops

### 🚀 Challenges
Looping over an array using forEach.
```javascript
let states = ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana"];
states.forEach((i) => console.log(i));
```

Looping over an array using for-of.
```javascript
let states = ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana"];
for (const i  of states) {
    console.log(i);
}
```

Looping over an array using map.
```javascript
let states = ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Telangana"];
const i = states.map((x) => x);
console.log(i);
```

## Assignment
Create a program that lists every 3rd number between 1-20 and prints it to the console.

```javascript
for (let i=1; i<=20; i+=3) {
    console.log(i);
}
```