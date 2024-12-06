# JavaScript Basics  
## Subtopic 1: Data Types  

### Assignment  

Create a product object with the following properties and corresponding data types:  
- **Product Name**: String  
- **Product ID**: String  
- **Price**: Float  
- **Quantity**: Float  
- **Product Availability**: Boolean  
- **Product Category**: Enumerator (use an `enum` or similar structure to define categories such as "Electronics", "Clothing", etc.).  


### Challenge  

Evaluate the following code snippets and understand the difference between `==` and `===`:  

```javascript
console.log(12 == '12'); // Output: true
console.log(12 === '12'); // Output: false
```
---

## Subtopic-2: Methods and Functions

### Assignment:
```
function sum(x,y){
	console.log(x+y);
}
sum(5,3);
```

```
function sum(){
	let a = 2;
	let b = 3;
	console.log(a+b);
}
sum()
```
```
function sum(a,b=1,c=3){
	console.log(a+b+c);
}
sum(2);
sum(2,3,4);
```
### Challenge:
The difference between function and method is that a method is associated with object whereas function is not associated with object and can take input argument. 

---

## Subtopic-3: Making Decisions
### Assignment:
```
let allStudents = ['A','B-',1,4,5,2];
let studentsWhoPass = [];
for (let i = 0; i < allStudents.length; i++) {
	let grade = allStudents[i];
    	if (typeof grade === 'number' && grade >= 3) {
      		studentsWhoPass.push(grade);
   	 }
	 else if (typeof grade === 'string' && (grade === 'A' || grade === 'A-' || grade === 'B' || grade === 'B-' || grade === 'C')){
      		studentsWhoPass.push(grade);
    	}
}
```

### Challenge:
```
let a=10;
if (a%2==0 && a%3==0){
	console.log("Divisble by 6");
}
else{
	console.log("Not divisble by 6");
}
```
or
```
console.log(a%2==0 && a%3==0 ? "Divisible by 6" : "Not divisible by 6");
```

---

## Subtopic-4: Array-Loops
### Assignment:
```
for(let i=3;i<20;i+=3){
	console.log(i);
}
```

### Challenge:
Using for-of
```
let a=[1,2,3,4,5];
for(let i of a){
	console.log(i);
}
```