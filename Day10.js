// EP-10 | Closures in JS

// Closure: A function bind together with its lexical environment. A function along with its lexical scope
// forms a closure. Function y is bind to the variable of function x, so a closure is formed and it has the
// access to its parent's lexical scope.

// Example: closure
// global scope
function x() {
  // outer scope
  var a = 10;
  function y() {
    // inner scope
    console.log(a); // 10
  }
  y();
}
x();

// MDN definition of closures: A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment). In other words a closure gives us
// the access to an outer function's scope form an inner function. In JS closures are created every time
// a function is created, at function creation time.

// We can do all the same things which we can perform with the variables like we can assign a function to
// a variable, we can pass the function as an arg in a function, we can return a function from a function.

function temp() {}

// Allowed
function get(temp) {}

// Allowed
function send() {
  return function () {};
}

// Allowed
const res = function (temp) {
  return function () {};
};

// Due to these powers of function we call them First class functions in JS.

// Whenever a function returns a function then teh returned function will always returned with it attached
// lexical scope and the reference it forms with its parent's env will also be there. It can access those
// variables from anywhere at anytime.

// Corner cases:

function q() {
  var w = 10;
  function r() {
    console.log(w);
  }
  w = 100; // This will re-initialize the value of w before returning the function
  return r;
}

var result = q();
result(); // 100

function i() {
  var h = 100;
  function j() {
    var g = 99;
    function k() {
      console.log(g, h); // 99 100
    }
    k();
  }
  j();
}
i();

// Uses:

// 1. Module design pattern
// 2. Currying
// 3. Once function
// 4. Memoize
// 5. maintaining state in async world
// 6. setTimeouts()
// 7. Iterators etc etc .....
