// Find the smallest number in an array using forEach
let array = [8,3,1,6,4,7]
let min = array[1]


array.forEach((element)=>{
    min = min>element ? element : min
});
console.log(min)

// Using for-of to do the same

min = array[1] 

for (let element of array){
    min = min>element ? element : min
};
console.log(min)

// map in javascript

const words = ['apple', 'banana', 'cherry'];
const uppercased = words.map(word => word.toUpperCase());

console.log(uppercased);
