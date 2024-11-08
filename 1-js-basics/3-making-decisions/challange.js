let num = 24
if (num%3==0 && num%2==0){
    console.log("Even")
} else {
    console.log("Odd")
}
// We can reduce this code using a ternary expression

let number = 24
console.log(number%3==0 && number%2==0 ? "Even" : "Odd")

/* I will prefer if-else statements over ternary expressions when I work on bigger 
projects because they are more readable and easy to debug but for simple programs, it would be better to use a more concise syntax i.e. ternary expression.*/