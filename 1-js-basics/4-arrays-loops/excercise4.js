// Arrays
// Syntax
let myArray = [];

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"

// You can leverage the index to change a value, like this:
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5

// you can insert a new value at a given index like this:
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"

// For Loop
// Counting up to 10
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/* 
'counter': A variable that is typically initialized with a number that counts the number of iterations
'condition': Expression that uses comparison operators to cause the loop to stop when false
'iteration-expression': Runs at the end of each iteration, typically used to change the counter value 
*/

// While Loop
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}

// while loops only require a condition that will stop the loop when the condition becomes false

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed

//Challenge

// 1. forEach
iceCreamFlavors.forEach(flavor => {
    console.log(flavor);
});

// 2. for..of
for (const flavor of iceCreamFlavors) {
    console.log(flavor);
}

// 3. map
iceCreamFlavors.map(flavor => {
    console.log(flavor);
});
