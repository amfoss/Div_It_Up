# Solution for 2: Functions

Everything that I studied, that is, all the theory with the programs is metioned in the excercise_.js file
I have also attached a js file to run and check the code.

This assignment will familiarise you with the use of functions in different situations.

## Function that returns something:

```
function addNumbers(a, b) {
    return a + b;
}

// Example usage:
const result = addNumbers(1, 2);
console.log(`Sum: ${result}`); // Output: Sum: 3


```
## Function that doesn't return anything

```
def greet_user(name):
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

// Example usage:
greetUser("Prarthana"); // Output: Hello, Prarthana!


```
## Function with no Parameters

```
function printMessage() {
    console.log("Dream Team Task: 04");
}
printMessage(); 

```
## Function with mix parameters

```
function introducePerson(name, age = 20, city = "Hyd") {
    return `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
}
const intro1 = introducePerson("Prarthana");
console.log(intro1);

```
