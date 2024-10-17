// EP-14 | Callback Functions in JS ft. Event Listeners

// What is a callback function in JS?
// When we pass a function inside a function as an argument it is known as a callback function.

function bar() {}
function foo(bar) {} // bar is a callback function

// setTimeout(() => {}, 0); // Anonymous function is the callback function

// JS is a synchronous and single-threaded language.
// Due to callbacks we can do async things inside JS.

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

// Here in the above snippet the execution will not block when JS hit setTimeout it will execute the rest
// part till the timer gets expire, and then execute the code inside the callback passed inside setTimeout.

// Output:
// x y timer (After 5 sec)

// Blocking the main thread
// JS has only 1 call stack and that is its main thread, whatever executed inside the page is executed through
// the call-stack only. So every callback will also execute inside the call-stack and if any operation blocks
// the call stack then it blocks the main thread.

// Suppose if our function x takes 10 sec then if we invoke this function the call stack will be blocked, which
// will eventually block the main thread, and we should never do this. Instead for any operation which takes
// we should always use the async approach for the execution which will never block our main thread.

// Power of callbacks is to helps us do async operations which creates a never blocking situation for our call
// stack or main thread.

// Deep about event listeners
// document.getElementById("click-me").addEventListener("click", function () {
//   console.log("Button clicked");
// });

// Print Button clicked count
// Brute force approach
// let count = 0;
// document.getElementById("click-me").addEventListener("click", function () {
//   console.log("Button clicked", ++count);
// });

// Closures demo with event listeners
// Better solution
function attachEventListeners() {
  let count = 0;
  document.getElementById("click-me").addEventListener("click", function () {
    console.log("Button clicked", ++count);
  });
}
attachEventListeners();

// Garbage collection & remove event listeners
// As we know that event listeners are heavy and take too much space in memory therefore we have to remove them.

// When we remove an event listeners all of the variables are collected by Garbage collector.

document
  .getElementById("click-me")
  .removeEventListener("click", attachEventListeners);
