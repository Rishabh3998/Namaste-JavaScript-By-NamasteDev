// EP-03 | Hoisting in JavaScript (variables & functions)

getName(); // Namaste JS
console.log(x); // undefined (due to hoisting)
var x = 7;

function getName() {
  console.log("Namaste JS"); // Namaste JS
}

getName();
console.log(x); // 7

// Here we can see that we can access the functions and the variables before declaration in JS.

// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations
// of functions, variables, and classes are moved to the top of their scope – all before code execution.
// In turn, this allows us to use functions, variables, and classes before they are declared.
// And since we are accessing a variable before declaration it will consist undefined in it due to the
// creation phase concept. For function it does not matter because at any phase the function memory space
// will contain the whole piece of code present inside the function.

// Meaning of not defined?
// This means that the variable that you are trying to access doesn't even exist in the code base. This access
// can vary with the way you are declaring the variable like if you are using var to declare the variable then
// you can access it at the top level or at the bottom level of the line where you declared the variable, but
// if you forgot to declare the variable then you will get not-defined.

// In the case of let and const you can only access the declared variable at the bottom part of the declaration.
// Because they will not give undefined, they are hoisted but still they will not give undefined, If you will
// try to access them before the declaration line. They are hoisted in the temporal dead zone.
// This zone is a zone situated between the declaration and execution times, so if you will try to access
// any variable defined using let or const before declaration you will get not-defined.

// Temporal dead zone: A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible
// until the moment the computer completely initializes it with a value.

getAge(); // getAge is not a function
var getAge = () => {
  console.log("26");
};
getAge(); // 26

// Arrow function follows the same concept like let and const and we cannot invoke the function before
// declaration. It will give an error. Because this is acting like a variable.
