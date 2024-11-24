function add_with_parameters(num1,num2){
    let sum = num1+num2;
    return sum;
}
let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
console.log("Their sum is", add_with_parameters(a,b));

// The above function can also be written in a way that it does not explicitly return anything.

function add_without_parameters(){
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    console.log("Their sum is", a+b)
}
console.log(add_without_parameters()) // By default, such functions return 'undefined' in JavaScript.
