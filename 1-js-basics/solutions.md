# Variables and data types
### Challenge (gotchas in javascript)
   1. **== and === are different** <br>
   
      == compares only the values of the two variables irrespective of the data type whereas <br>
      === compares both the data type and values of two variables.
      
       ```
        console.log(17 == '17') // true
        console.log( 17 === '17') // false
       ```
  2. **Automatic Semicolon Insertion (ASI)** automatically inserts semicolons at the end of statements when they're missing. But this could throw an       error sometimes. For example:
     ```
     function getNumber() {
       return
       5;
     }
     console.log(getNumber());
     ```
     You might expect `getNumber()` to return 5, but it actually returns undefined. This happens because ASI inserts a semicolon right after the return statement, like this:
    
     ```
     function getNumber() {
       return
       5;
     }
     console.log(getNumber());
     ```

### Assignment
The data types that one would need to make the shopping cart are
- **String** - For product name, Decription, Product ID, Order ID, Image URL, etc
- **Int or Float** - To store the price, quantity, Total of all the items in the cart, etc
- **Object** - All the Product details can be stored in an object
- **Enumeration** - can identify Product category, order status, etc

# Methods and functions
### Challange
Functions are independent blocks of code that perform specific tasks and can be called from anywhere, while methods are functions that are associated with an object and are called on that object
### Assignment
```
function add(num1,num2){
    let sum = num1+num2;
    return sum;
}
let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
console.log("Their sum is", add(a,b));
```
The above function returns the sum of numbers given by the user. The same can be written in a way that it does not explicitly return anything.
```
function add(){
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    console.log("Their sum is", a+b)
}
```
By default, such functions return 'undefined' in JavaScript.
```
function add(){
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    console.log("Their sum is", a+b)
}
console.log(add())
```
The below function uses defult value of parameters if no value is given by the user
```
function total(subtotal, discount = 0, deliveryFee = 50) {
    let discountAmount = subtotal * discount/100;
    let totalCost = subtotal - discountAmount + deliveryFee;

    return `The total cost is ${totalCost.toFixed(2)}`;
}

console.log(total(200, 30, 60));
console.log(total(200));
```
