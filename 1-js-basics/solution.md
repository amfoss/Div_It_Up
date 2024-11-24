# 1-JS-Basics  

---
---

## 1. Subtopic 1 - data-types
---
### Challenge  
let age = 1; let Age = 2; age == Age (resolves false -- why?). What other gotchas can you find?
---
- Here the variable **age** stores 1 whereas **Age** stores 2.
- So age==Age resolves false because the variables in JavaScript are case sensitive. It means 1==2 which is obviously false.
- Some other **Gotchas** also occur because JavaScript is a not a Strictly types language. <br>
1. `'0' == 0` returns true. Whereas `'0' === 0` return false. This is because o type coersion in Javascript.
2. `'5' + 2` will give 52, `'5' - 3` will give 3, `'5' * 2` gives  10.
3. There are values which are considered **falsy** like - `false`, `0`, `''`, `null`, `undefined`, `Nan`. `if (''){ console.log("Hello")}` wont run where as `if (' '){console.log("Hello")}` hello will run as there is a space.
4. JavaScript returns the datatype of null as object which is misleading. `console.log(typeof(null))` returns object. Use === to check for null.

---

### Assignment 
Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?
---
The Entities associated with a shopping cart would be **cart**, **user**, **product** and **Location**
For each entity, the Datatypes would be,
- Cart
    - totalItems : `number`- displays total items in the cart.
    - totalPrice : `number`- display total amount to be paidfor items in the cart.
    - discount : `number`- the discount % given to the totalPrice.
    - items : `Array of Objects`- This array contains objects of products.
- User
    - userid : `String`- unique id of a particular user.
    - username : `String`- Name of Customer.
    - emailid : `String`- contains email id of the customer.
    - isLoggedIn : `boolean`- Checks if the user is logged in to their account.
    - userAddress - `String`- shows the customer's address.
- Product
    - productid : `String`- unique id for each product.
    - productName : `String`- Name of Product
    - quantity : `number`- To display the quantity of each product.
    - price : `number`- To display the price of each product.
    - isAvailable : `boolean`- To display if the product is in stock.
- Location 
    - deliveryAddress : `String`- Address to which the item is to be delivered.
    - expecteddate : `String`- Expected time and date of delivery for the location.

---

### Review and Self-Study
Exercise Done : **Get URL and URL Parts in JavaScript**
- I tried the exampole code in VSCode and verified it. 
- Things I Learnt
    - A url can be divided into parts and connected again in JavaScript using split() function. 
    - The URL broke down into parts can be stored inside variables and the URL can be reconstructed with **+** operator. 
    - A URL can also be stored in a array.
    - The URL path can be manipulated and connected back again.

---
---

## 2. Subtopic 2 - Functions-Methods
---
### Challenge
Can you articulate in one sentence the difference between functions and methods? Give it a try!
---
Functions can take input arguments and return output values. On the other hand, a method is a function that is associated with an object in object-oriented programming. Methods are functions that are called on objects and can modify or access the object's properties.

---

### Assignment
Create different functions, both functions that return something and functions that don't return anything.
See if you can create a function that has a mix of parameters and parameters with default values.
---
1. Function that returns something
    ```
    function thisReturns(x, y){
        z = x + y;
        return z;
    }
    console.log(thisReturns(5, 10))
    ```
    This function returns 15.

2. Function that doesn't return anything.
    ```
    function thisDoesNotReturn(x, y){
        console.log(x+y)
    }
    thisDoesNotReturn(10, 10)
    ```
    This function doesn't return anything. It just prints 20.

3. Function with mix of parameters and parameter with default values
    ```
    function mixed(x, y = 5){
        console.log(x+y)
    }
    mixed(10)
    ```
    Here, 10 is assigned to the variable x and y has default value 15. So it prints 15.

---

### Review and Self Study
Arrow functions cannot be used as methods. They are a better replacement to anonymous functions and traditional function expression. 
1. Without arrow function
    ```
    const obj = {
    num: 100,
    }

    const add = function (a, b, c) {
    return this.num + a + b + c;
    }
    console.log(add.call(obj, 1, 2, 3));
    ```
2. With arrow function
    ```
    const obj = {
    num: 100,
    }
    const add = (a, b, c) => this.num + a + b  + c;
    console.log(add.call(obj, 1, 2, 3));
    ```
Both will return the output 106.

---
---

## 3. Subtopic 3 - making-decisions
---
### Challenge
Create a program that is written first with logical operators, and then rewrite it using a ternary expression. What's your preferred syntax?
---
- Using Logical Operators
    ```
    let x = 50, y = 10;
    if (x > y){
        greatest = x;
    }
    else{
        greatest = y;
    }
    console.log(greatest);
    ```

- Using Ternary Expression
    ```
    let x = 50, y = 10;
    const greatest = (x>y) ? x : y;
    console.log(greatest);
    ```
There both give the same output 50.

---

### Assignment
``` 
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];
for (let i=0; i<allStudents.length; i++){
    let student = allStudents[i];
    if (typeof(student) === 'number' && student > 3){
        studentsWhoPass.push(student);
    }
    else if(typeof(student) === 'string' && ['A', 'A-', 'B', 'B-', 'C'].includes(student)){
        studentsWhoPass.push(student)
    }
}
console.log("Students who Passed : "+studentsWhoPass)
```

---
---

## 4. Subtopic 4 - arrays-loops
---
### Challenge 
There are other ways of looping over arrays other than for and while loops. There are forEach, for-of, and map. Rewrite your array loop using one of these techniques
---
- Using forEach
    ```
    let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

    iceCreamFlavors.forEach( (item) => {
        console.log(item);
    } )
    ```
    prints all values
- Using for-of
    ```
    let Array = [1, 2, 3, 4, 5];

    for (let item of Array){
        console.log(item)
    }
    ```
- Using map
    ```
    let Array = [1, 2, 3, 4, 5];

    let newArray = Array.map((item) => item*10);
    console.log(newArray);
    ```
    newArray contains all the values of Array multplied by 10.

---

### Assignment 
Create a program that lists every 3rd number between 1-20 and prints it to the console.
---
- It is simple. Just give the iteration step as 3.
    ```
    for (let i=1; i<=20; i+=3){
        console.log(i);
    }
    ```
---

