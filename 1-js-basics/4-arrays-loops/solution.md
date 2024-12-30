# assignment subtask 4 of part 1
```j
for(let i=0;i<21;i+=3){
    console.log(i);
}
```
# challenge subtask 4 of part 1
### original code
```j
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} 
```

### changed code using for-of looping
```j
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (item of iceCreamFlavors) {
  console.log(item);
```
