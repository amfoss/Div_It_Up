## Documentation of the Assignment

### **1.data types**


**Assignment:**

```
const items = {};

- This variable is declared to store a distionary of items that is to be displayed in the website .Here const is used as the details are not going to be reassigned

const features= {};

- This variable is declared to store a dictionary of items that contains details regarding all the functionalities of the 

let shoppingCart = [];

- This variable is declared to store the list of user selected items further to buy.

const totalElement=6;
 
- This variable is declared to store the count of items user has in their cart.It can be displayed while placing order.

const input="";

- This variable is to store string.it will be useful to store the users command . which can be further analysed to respond with proper functions.


const imageElement;

- This variable will be useful inorder to store any image elemts that need to be displayed regarding the products.

const Discount;

- This variable will be useful to store if any discounted price is there.

var tax;

- This variable will be useful to specify tax rate for products.

const actualprice;

- This variable will be useful inorder to store the actual price and later can be displayed too.

const icon;

- This variable will be useful to store any icons if needed.

var final_price;

- This variable is to calculate and store the final price of the product after tax and discount.

let Bool = true

- This varibale will be useful to decide whether the payment was succesful or not.
```

**Challenge:**
```

What’s a gotcha?
it is much like a logical error . while writing a code we expect it to do something but it produces an undesired outcome
caused by the developer’s ignorance of the language inner workings.

Example:
let age = 1; let Age = 2; age == Age //returns false

The '==' operator checks for equality condition if the values are not equal it will return false


Lets dive into some more gotchas:

1. console.log( 12 === '12') //returns false

   The '===' operator is a strict equality operator it checks for datatype of both the variable's.



2. 0 == -0; // true but 12/0 == 12/-0; //false

   In JavaScript whenever we divide something by 0 it produces the value infinity and whenever we divide something by -0
   it produces value negative infinity.



3.typeof null;  //"object"

   null isnt an object but typeof returns an object due to an old bug in the language.



4. function prod(x, y) {
      return
      x*y
    }

  The return statement wont return anything becuase the compiler interprets these two statemetns as
  return;
  x+y;



5.null == undefined; // true !
  However when using the strict equality operator reveals different results
  null === undefined; // false

  This is because in JavaScript null is a primitive value that belongs to both null type and undefined' the two values are
  quite similiar so when compared using an equality operator it returns true. but using strict equality operator trying to
  do property access on one of them is going to get you in trouble !.



```




### **2.functions-methods**

**Assignment:**

```
function function1(name,age){
    var year = 2024-age;
    console.log(`Hello ${name}, you were born in ${year}!`);
}


function1("Aadarsh","17");

//output: Hello Aadarsh, you were born in 2007!


function function2(name, age) {
    var year = 2024 - age;
    const message = `Hello ${name}, you were born in ${year}!`;
    return message;
}

const find = function2("Aadarsh", 17);
console.log(find);

//output: Hello Aadarsh, you were born in 2007!


function multiply(a,b,c){
    const prod=a*b*c;
    return prod;
}
const value=multiply(2,20,30);
console.log(value);

//output: 1200

function multiply(a,b=10,c=20){
    const prod=a*b*c;
    return prod;
}
const value=multiply(2);
console.log(value);

//output: 400

```

**Challenge:**
```
Function is a reusable block of code that can be called on its own which is made by the developer, while method is a function
that's associated with an object and is built-in.
```

### **3.Making-decisions**

**Assignment:**

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

for(let i=0; i<=allStudents.length; i++){
    if(allStudents[i]>=3 || ['A','B','C','A-','B-','C-'].includes(allStudents[i])){
        studentsWhoPass.push(allStudents[i]);

    } 
}

console.log(studentsWhoPass);
```

**Challenge:**
```
//Program to check whether the user is eligible to vote using age.

//With logical operators:
let age=17;
let response = (age>=18) ? "Eligible to vote": "Not eligible to vote";
console.log(reponse);
//output 'Not eligible to vote'

//With Ternery expression
let age=17;
const response = (age>=18) ? "Eligible to vote": "Not eligible to vote";
console.log(response);
//output 'Not eligible to vote'

My preffered syntax:

- I preffer using if/else statement with logical operator because there i can give lot of conditions and will be more code efficient.

```

### **4.Arrays-loops**

**Assignment:**

```
for(let i=1; i<=20; i=i+3){
      console.log(i);
}

output:
1  
4  
7  
10  
13  
16  
19  

```

**Challenge:**
```
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
}

//rewriting this code using for-of

for (let name of iceCreamFlavors){
    console.log(name);
}

output :
Chocolate
Strawberry
Vanilla
Pistachio
Rocky Road
```
