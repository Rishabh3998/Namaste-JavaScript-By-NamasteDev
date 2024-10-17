// EP-13 | FIRST CLASS FUNCTIONS ft. Anonymous Functions

// What is an Anonymous function?
// What are First class functions?
// Function statement vs Function Expression vs Function Declaration

// Difference between statement and expression: Hoisting
// a(); // will give output "statement"
// b(); // will give TypeError: b is not a function, it is a variable

// Function statement or declaration
function a() {
  console.log("statement");
}
a();

// Function expression
// Note: Function acts like a value in JS.
var b = function () {
  console.log("expression");
};
b();

// Note:
// When the JS execute code line by line then it will treat 'b' like a variable and assign undefined to
// it in the memory. And when we try to call it before assigning the function it will give the error i.e
// TypeError because JS is treating it like a variable.

// Anonymous function
// function () {} => syntax error need name
const anonymous = function () {};
// These type of functions are used in a place where functions are used as values.

// Named function expression
var by = function xyz() {
  console.log("expression");
};
by();
xyz(); // ReferenceError: xyz is not defined

// Difference between parameters and arguments
const q = function (parameters) {
  console.log(parameters);
};
q("Arguments");

// First class functions
// As we know that functions are treated as values in JS, and we can also replicate almost everything,
// which we can do with a variable that's why we call functions as First class functions in JS.
// We can assign functions to variables, we can return a function from inside a function, we can pass
// a function as an argument in a function.

// Definition: The ability to use functions as values in JS is make them first class functions or
// we can also call them first class citizens.

function first() {}

function second(first) {
  return first;
}

// Arrow functions
// Same can be done with arrow functions

const arrow = () => {};
