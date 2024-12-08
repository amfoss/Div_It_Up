# js-basics

---
## Sub Topic-1

### challenge 
```
Javascript is case-sensitive,which means both age and AGE are different identifiers and values are also different




- const obj = { a: 3 };
obj = { b: 5 } // not allowed

- Case sentivity

- == performs type coercion before comaprsion

2=='2'  //true

- === checks both value and type ,without coercion.

2==='2'  //false



NaN which is not equal to itself
```
### Assignment

```
I will use these datatypes to create a shopping cart
    -Number
    -String
    -Boolean
    -Array
    -Null
    

Number :
    I have choosed this as we will be pricing the amount for items ,which can be used for price calculation

String:
    This is used for naming and description of the item

Boolean :
    To check payment status.Whether the payment is done or not

 Array:
    To show the produts or to add the produts in cart
    as it stores multiple items

Null :
    Used when an item is removed from cart or store or when item is not there
```
---

## Sub Topic-2 

### Challenge
```
Function can be called be directly but method should be called with an object
```

### Assignment

```
function printGreetings(name){
	let grettings=` hi,${name}`;
	console.log(grettings);
}

function add(num1,num2){
	return num1+num2;}

function grettings(){
	console.log(“good morning”);
}

function mail(local_part,domainName=”gmail.com”){
	email=`${local_part}@${domainName}`;
	console.log(email);
}

mail(“dilip”)
mail(“dilip”,”yahoo.com”)

```


## Sub Topic-3

### Challenge 

```
et age=20;
if(age>=18){
	console.log(“elegible for driving licenses”);
}
else{
	console.log(“not eligible for drivinglicenses”);
}



let age=17;
let age_check=age>=18 ? “eligible for driving licenses” : “not eligible for drivinglicenses”;
console.log(age_check);


I prefer ternary operation over logical operations if it is simple like deciding in between two .But it would be complex to understand when the expression is complex 

Selecting between ternary and logical operation depends on the situtaion and complexiy

```


### Assignment

```
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
    let grade = allStudents[i];
	//number 
    if (typeof grade === "number") {
        if (grade >= 3) {
            studentsWhoPass.push(grade);
        }
	//letters
    } else if (typeof grade === "string") {
        if (grade === "A" || grade === "A-" || grade === "B" || grade === "B-" || grade === "C") {
            studentsWhoPass.push(grade);
        }
    }
}

console.log("Students who pass:", studentsWhoPass);

```


## Sub Topic-4

### Challenge

```
let fruits=[“apple”,”kiwi”,”banana”];
for(let fruit of fruits){
	console.log(fruit);}

let fruits = ["apple", "kiwi", "banana"];

fruits.forEach(fruit => {
    console.log(fruit);
});
```

### Assignment

```
let list_thirdnumber=[];
for(let i=1;i<=20;i=i+3){
	list_thirdnumber.push(i);
	}
console.log(list_thirdnumber);

```