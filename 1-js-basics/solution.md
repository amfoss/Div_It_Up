```
1-js-basics:

Challenge:
JavaScript is notorious for its surprising ways of handling datatypes on occasion. Do a bit of research on these 'gotchas'. For example: case sensitivity can bite! Try this in your console: let age = 1; let Age = 2; age == Age (resolves false -- why?). What other gotchas can you find?

Gotcha is term used for tricky parts in javascripts dealing with case sensitivity. Unlike other programing languages java script is different from rest of them in this aspect these mainly include

a) difference in equality operators like == is not same as === == means that the data type doesnt need to match only the value is check like "12" == 12 will return true on the other hand === is a strict checker where the type also needs to be same

b) It auto matically inserts semi colon to your code even though it is optional in javascript sometimes it can even result in errors

c)The default base for parseInt is a radix 10. However if like parseInt("0x11") is passed then result will be 17 as it assumes it will be a hex base 16



Assignment:
Imagine you are building a shopping cart. Write some documentation on the data types that you would need to complete your shopping experience. How did you arrive at your choices?

To build a shopping cart, we need to choose the appropriate data types to represent different aspects of the cart. Here's a breakdown:

    Product Details: Each product in the cart can be represented by an object containing properties like id, name, price, quantity, and total.
        Example: { id: 1, name: "Laptop", price: 999.99, quantity: 1, total: 999.99 }

    Cart Total: A number to store the total value of the cart (i.e., the sum of all items' totals).
        Example: let cartTotal = 999.99;

    Customer Information: A string or object to store the customer's name, email, and address.
        Example: let customerInfo = { name: "John Doe", email: "john@example.com", address: "123 Main St" };

    Shopping Cart Items: An array to store the list of products in the cart.
        Example: let cartItems = [{ id: 1, name: "Laptop", price: 999.99, quantity: 1, total: 999.99 }];

    Discount or Coupon: A boolean or number to track if there is a discount or coupon applied to the cart.
        Example: let discountApplied = true; or let discountAmount = 50;

    Quantity Updates: A number for tracking the number of each item in the cart.
        Example: let itemQuantity = 3;





2-functions-methords;

Challenge:
Can you articulate in one sentence the difference between functions and methods? Give it a try!
A function is a block of code that performs a task, while a method is a function specifically associated with an object, allowing it to interact with itself.

Assignment:
Create different functions, both functions that return something and functions that don't return anything.
See if you can create a function that has a mix of parameters and parameters with default values.

//This function take two numbers and returns the sum back this function also has parameters containing that accepts value and also has default value
  function sum(num1=5,num2 = 1){
    return num1+num2;
}
//This function just prints Helloworld and doesnot return anything
function Myfunc(){
    console.log("Hello World");
}

sum(1,4);
Myfunc();




3-making decisions

Challenge:
Create a program that is written first with logical operators, and then rewrite it using a ternary expression. What's your preferred syntax?

let a = 3;
let b = 8;
if(a>b){
    console.log("a is bigger");
}
else{
    console.log("b is bigger");
}

a > b ? console.log("a is bigger") : console.log("b is bigger");

Assignment:
Play around with operators. Here's a suggestion for a program you can implement:
You have a set of students from two different grading systems.


let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  let studentsWhoPass = [];

  for(let i =0;i<6;i++){
    if( allStudents[i] !='C-' || allStudents[i] >= 3){
        studentsWhoPass.push(allStudents[i]);
    }
  }
  console.log(studentsWhoPass);




4-Arrays and Loops:

Challenge:
  There are other ways of looping over arrays other than for and while loops. There are forEach, for-of, and map. Rewrite your array loop using one of these techniques.

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
  for (let i = 0; i < iceCreamFlavors.length; i++) {
    console.log(iceCreamFlavors[i]);
  }
  //The forEach() method of Array
  iceCreamFlavors.forEach((element)=>console.log(element));
  //for..of looping
  for(const flavour of iceCreamFlavors){
    console.log(flavour);
  }
  //using map function
  iceCreamFlavors.map((x)=>console.log(x))


Assignment:
Create a program that lists every 3rd number between 1-20 and prints it to the console.


  for(let i =1;i<20;i+=3){
    console.log(i)
  }

```