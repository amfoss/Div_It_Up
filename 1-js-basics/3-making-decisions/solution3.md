# Solution for 3: Decision Making

Everything that I studied, that is, all the theory with the programs is metioned in the excercise_.js file
I have also attached a js file to run and check the code.

Solution for the Operators

```
let allStudents = ['A', 'B-', 1, 4, 5, 2, 'C', 3, 'C-'];
let passedStudents = [];

for (let i = 0; i < allStudents.length; i++) {
    let grade = allStudents[i];
    if (typeof grade === 'number') {
        // First grading system (numeric grades)
        if (grade >= 3) {
            passedStudents.push(grade);
        }
    } else if (typeof grade === 'string') {
        // Second grading system (letter grades)
        if (grade === 'A' || grade === 'A-' || grade === 'B' || grade === 'B-' || grade === 'C') {
            passedStudents.push(grade);
        }
    }
}

console.log("Students who pass:", passedStudents);

```
