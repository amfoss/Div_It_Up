// a function is a block of code we can execute on demand. This is perfect for scenarios where we need to perform the same task multiple times

// Syntax
function nameOfFunction() { // function definition
    // function definition/body
}


// Whenever we want to call (or invoke) our function, we use the name of the function followed by ()

// If we want to make it a little more flexible, like allowing someone to specify the name of the person to greet, we can add a parameter. A parameter (also sometimes called an argument), is additional information sent to a function
// Syntax
function name(param, param2, param3) {

}

function displayGreeting(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
  }
  displayGreeting('Prarthana');
  // displays "Hello, Prarthana!" when run
  //  If someone doesn't want to customize it, we provide a default value instead. To provide a default value to a parameter, we set it much in the same way we set a value for a variable

  function displayGreeting2(name, salutation='Hello') {
    console.log(`${salutation}, ${name}`);
  }
  displayGreeting2('Prarthana', 'Hi');
// displays "Hi, Prarthana"

// A return value is returned by the function, and can be stored in a variable just the same as we could store a literal value such as a string or number.



// It uses a special indicator of =>, which looks like an arrow - thus the name! By using =>, we are able to skip the function keyword
// Syntax
setTimeout(() => {
    console.log('3 seconds has elapsed');
  }, 3000);

// Challenge

// Functions are standalone blocks of code that perform tasks, while methods are functions associated with an object and can access and modify the object's data.
// Functions are independent and can be called on their own, whereas methods are tied to objects and operate on the object's attributes.
