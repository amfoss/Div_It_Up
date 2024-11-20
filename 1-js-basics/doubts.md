# Why does 1 + 1 = 2 in JavaScript, but '1' + '1' = 11? Think about it. What about '1' + 1?
- This behavior in JavaScript boils down to type coercion and the behavior of the + operator.
- + operator in JavaScript is overloaded: If either operand's string, string concatenation is performed.
- 1 + '1' = '11'
- '1' + '1' = '11'

#  When would you use a template literal vs. a plain string?
## Plain string:
For simple static text when the string doesn't include any variables, expressions or special
formatting, a plain string is more concise.
```javascript
   let name = "Alice";
   let age = 25;
   let message = "Hello, my name is" + name + "and I am" + age + "years old.";
```
## Template literals
- When the strings span over multiple lines (no need of escape sequences).
- when strings include variables or expressions, 
- template literals make the code cleaner and more readable, eg:
 ```javascript
       let name = 'Aakash';
       let age = 20;
       let intro = `Hello, my name is ${name} and my age is ${age}.`
 ```




