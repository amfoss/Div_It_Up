# Variables and data types
### Challenge (gotchas in javascript)
   1. **== and === are different** <br>
   
      == compares only the values of the two variables irrespective of the data type whereas <br>
      === compares both the data type and values of two variables.
      
       ```
        console.log(17 == '17') // true
        console.log( 17 === '17') // false
       ```
  2. **Automatic Semicolon Insertion (ASI)** automatically inserts semicolons at the end of statements when they're missing. But this could throw an error sometimes. For example:
     ```
     function getNumber() {
       return
       5;
     }
     console.log(getNumber());
     ```
     You might expect `getNumber()` to return 5, but it actually returns undefined. This happens because ASI inserts a semicolon right after the return statement, like this:
    
     ```
     function getNumber() {
       return
       5;
     }
     console.log(getNumber());
     ```
  3. **Falsy and Truthy Values**
        In Javascript, Some values are falsy i.e. they are evaluated as false in boolean context
        ```
        if ("") {
        console.log("This won't print");
        }
        ```
        Truthy values are values that evaluate to true
        ```
        if ([]) { // even {} is truthy
        console.log("This won't print");
        }
        ```

### Assignment
The data types that one would need to make the shopping cart are
- **String** - For product name, Decription, Product ID, Order ID, Image URL, etc
- **Int or Float** - To store the price, quantity, Total of all the items in the cart, etc
- **Object** - All the Product details can be stored in an object
- **Enumeration** - can identify Product category, order status, etc
