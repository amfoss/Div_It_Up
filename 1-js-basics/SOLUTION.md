1. Variables and Data Types

    Assignment:

        ```
        Solution / Documentation of the
        Assignment
        const shopping_cart{
        itemId : "a#10" // String to uniquely identify your item
        itemName : "RTX 5060" //String to name product
        itemPrice : 999999 // Numeric Pricing of the product
        itemQuantitiy : 1 // Number of items purchasing
        
        This is the minimum requirements as we need brief information to identify the item we have.
        
        }
        ```

    Challenge:

        ```
        Solution / Documentation
        for the challenge given.
        there are two gotchas oin this one is that 
        1) variables in js are case sensitive so age and Age are treated as different variables.
        2) == is a comparison operator which compares two values since here 1 != 2 hence returns false.
        ```
2. Functions and Methods

    Assignment:

        ```
        Solution / Documentation of the
        Assignment
        function rtr(a) {
	  return a;
	}
	console.log(rtr(44));

	function nothing(){
	  nothing;
	}

	console.log(nothing());

	function si(principle, rate, time = 2){
	  return interest = (principle+rate+time)/100
	}
	console.log(si(200,2))
        
        }
        ```

    Challenge:

        ```
        Solution / Documentation
        for the challenge given.
        A method is a function that is associated witha an object whereas a function is not.
        
        ```
3. Making Decisions with javascript

    Assignment:

        ```
        Solution / Documentation of the
        Assignment
        let allStudents = ['A', 'B-', 1, 4, 5, 2];
	let studentsWhoPass = [];

	for (let i = 0; i < allStudents.length; i++) {
	  if (
	    allStudents[i] === 'A' || allStudents[i] === 'A-' || allStudents[i] === 'B' || allStudents[i] === 'B-' || allStudents[i] === 'C' || (typeof allStudents[i] === 'number' && allStudents[i] >= 3)
	  ) {
	    studentsWhoPass.push(allStudents[i]); 
	  }
	}

	console.log(studentsWhoPass);
        }
        ```

    Challenge:

        ```
        Solution / Documentation
        for the challenge given.
        function largest(a, b, c) {
	  let largest;

	  if (a >= b && a >= c) {
	      largest = a; 
	  } else if (b >= a && b >= c) {
	      largest = b; 
	  } else {
	      largest = c;
	  }
	  return largest;
	}

	console.log(largest(6, 9, 3));
	
	function biggest(a, b, c) {
	  return a >= b && a >= c ? a : b >= a && b >= c ? b : c; 
	}

	console.log(biggest(3, 6, 9));
		
		
        ```
4. Arrays and Loops

    Assignment:

        ```
        Solution / Documentation of the
        Assignment
        
        for (let index = 0; index < 20; index+=3) {
  	 console.log(index)}
        
        }
        ```

    Challenge:

        ```
        Solution / Documentation
        for the challenge given.
        
        const array = [];
	for (let index = 0; index < 20; index+=3) {
	  array.push(index)}
	  
	for each:
	array.forEach((element) => console.log(element));
	
	for of:
	for (const item of array) {
	  console.log(item);
	}
	
	map:
	const arr = array.map((x) => x );
console.log(arr);
        ```

        

