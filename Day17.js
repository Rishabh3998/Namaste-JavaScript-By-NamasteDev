// EP-17 | TRUST ISSUES with setTimeout()

// A setTimeout with a specified delay does not always wait for the exact specified delay.
// It does not when the callback will invoke if delay is 5 sec the callback can take 5, 6, 7 etc
// It all depends on the call stack

console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 5000);
console.log("end");
// Millions of lines of code taking 10 sec to execute

// The Global execution context will still be busy in executing these lines and the setTimeout callback will
// still wait inside the callback queue until the Global execution context gets popped out from the call
// stack.

// Now the event loop is constantly checking whether the call stack is empty or not which is a needed cond.
// to send the callback inside the call stack. This callback will starve inside the callback queue.

// This setTimeout callback will get the chance to execute once the call stack gets empty. This is also known
// as the concurrency model in the JS.

// So, eventually the setTimeout will take more time than the specified delay, that's why we cannot trust
// setTimeout.

// Example:

console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 5000);
console.log("end");

// Millions of line of code (Blocking the main thread)
let startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("while expires");

// Output:
// start
// end
// while expires
// callback

// When while expires printed the JS engine will quickly execute the callback.

// So, the correct definition for the delay is like that the setTimeout will at-least wait for the entered
// delay, it can take more time but will at-least wait for the desired time.
