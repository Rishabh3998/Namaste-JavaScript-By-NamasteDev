// EP-12 | CRAZY JS INTERVIEW ft. Closures

// Examples of closures for interview:

var t = 100;
function outer() {
  var a = 10; // It will work the same way if we use let
  function inner() {
    console.log(a, t); // 10 100
  }
  return inner;
}

outer()(); // Executing inner in a different scope from its original scope by using currying.

function outer2(b) {
  function inner() {
    console.log(a, b); // 10 'b'
  }
  var a = 10; // It will work the same way if we use let
  return inner;
}

outer2("b")();

// Here still the closure will be formed, and value of a is still accessible.
// Closure has the reference to the outer env it does not affect by the sequence of the variable
// declaration.

// Advantages:

// 1. Module pattern
// 2. Function currying
// 3. Memoization, once etc
// 4. Data hiding and encapsulation

// Data hiding example:
var count = 0; // This is public anybody can access and change
function incrementCounter() {
  count++;
}

function counter() {
  var counter = 0;
  return function increment() {
    counter++;
  };
}

var getCounter = counter();
getCounter(); // increment counter by 1

var getCounter2 = counter();
getCounter(); // increment counter by 1

// The above code is not scalable if we want to make multiple counter, the code will work
// but it is not efficient.

function createCounter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    return count;
  };
  this.decrementCounter = function () {
    count--;
    return count;
  };
}

var counter1 = new createCounter(); // using new because it is a constructor function
const res = counter1.incrementCounter();
console.log(res);

// Disadvantages:

// Memory consumption
// - Closures can consume a lot of memory because creating a function within a function duplicates memory.
// This can slow down the application

// Memory leaks
// - Closures can lead to memory leaks if they capture variables that are no longer needed.
// - For example, if a closure is used in ten locations, the memory will be held until all ten processes
// - are completed.

// Debugging
// Closures can make debugging more difficult because of the complexity of the scope chain.

// Performance issues
// -Overusing or using closures inappropriately can cause performance issues.

// Garbage collector free the un-utilized memory within th browser.

function e() {
  var x = 10,
    z = 20;
  return function () {
    console.log(x);
  };
}
e();

// Since we are not using the z anywhere inside the closure it will be garbage collected once the function
// will be invoked;
