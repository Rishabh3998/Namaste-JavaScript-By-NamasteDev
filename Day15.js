// EP-15 | Asynchronous JavaScript & EVENT LOOP from scratch

// Why JS is a synchronous-single-threaded language?

// Synchronous means that it can only execute one line at a time or we can say it can only do one thing
// at a time. That why JS is synchronous. JS Engine only has one call stack and JS engine use that single
// call stack to execute the JS program, this call stack works as the main thread and because this is
// the only call stack which is used we call JS as a single threaded language.

function a() {
  console.log("a");
}
a();
console.log("end");

// The main job of the call stack is to execute what comes inside it asap.

// Now, what if we want to execute a piece of code after 5 seconds will JS push that code block inside call
// stack and wait 5 seconds to execute it. The answer is No, if JS will put this inside call stack for 5 sec
// it will block the main thread, which will create lots of issues.

// This call stack does not have any timer, so if we want to execute a program after some amount of delay we
// need some new superpowers the superpower of timers.

// Hierarchy of levels inside browser:
// Browser (Search bar + local storage + timer +..... other web API's as well) => JS engine => Call stack

// To execute the program after some delay we need these superpowers from browsers, so this JS engine needs
// to access these superpowers from browser.

// WebAPi's
// Global Object / Window Object (Browser powers)
// - setTimeout() => timer
// - DOM Api's
// - fetch()
// - localStorage
// - console
// - location

// We access these superpowers by using window in JS.

// Example 1:
console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 5000);
console.log("end");

// Output:
// start
// end
// callback

// In the above line 44 to 46 JS engine will register this callback in the memory and attaches a timer of
// 5 secs to it when the timer will comes down to 0 sec the callback wants to move inside call stack to
// get executed but it cannot directly move like this. Firstly the callback will be shifted to the callback queue.

// Now the event loop which is also present there will move the callbacks present inside the callback queue
// one by one for execution. Event loop here acts like a gatekeeper and checks if something is there inside
// callback queue and if it finds something it will move it to the call stack, and now the execution begins.

// Example 2:
console.log("start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
});
console.log("end");

// Output:
// start
// end
// callback (on click of the button)

// Reason:
// Everything will be same like above code, just the difference will be that the registered callback will
// be present inside the memory with an attached eventListener and it won;t be removed until we explicitly
// remove it and also the function call will not execute until we click on the button. When a user clicks
// on the button the callback will be moved to callback queue and event loop will move it to the call stack
// then the callback will execute immediately.

// What is event loop?
// The only job of the event loop is to continuously monitor the call stack and callback queue. If it sees
// that the call stack is empty and there is something inside the callback queue it will instantly moves it
// to the call stack for execution.

// Why do we need this callback queue ?
// It helps to maintain the order of all the callbacks hit by timer, eventListeners etc.
// We can't just blindly push all the callbacks inside call stack because there can be same callbacks
// which was called repeatedly, we need to execute them one by one.

// Example 3:
console.log("start");

setTimeout(function cbt() {
  console.log("callback setTimeout");
}, 5000);

fetch("https://dummyjson.com/products?limit=10").then(function cbp() {
  console.log("callback fetch");
});

console.log("end");

// Output:
// start
// end
// callback fetch
// callback setTimeout

// What normal developers generally assume?
// So the assumption is like, first start will print then at next line JS engine will register the cbt in
// the memory then at line 98 fetch will make the network and then the promise will be returned, the cbp
// will be registers inside the memory and suppose if this promise takes 50ms to get resolve so it will
// move to the callback queue and executes, before this end will get print due to this 50ms delay.

// But the above assumption is wrong :)

// Here microtask queue comes into the picture, this queue is exactly similar to the callback queue but
// it has the higher priority whatever functions comes inside this queue will be executed first and the
// functions inside the callback queues will execute later.

// The cbf callback that we got from the fetch function will move inside the microtask queue, and again
// the job of the event loop is to keep checking if the call stack is empty or not, if the stack is
// empty it will give the chance to the callback present inside the microtask and callback queue acc to
// the priority.

// Suppose after fetch line there are millions of lines of code and JS is executing them, so what will
// happen if we get the response from the fetch call and also if the timer will be expired, now the
// callback queue has the cbt and microtask queue has the cbf and millions of line are still executing
// and both of the callbacks are still waiting to move to the call stack.

// When this call stack gets empty the event loop will move the callback from the microtask queue to the
// call stack and same will happen with the other callbacks according to the priority of them.

// What are microtasks and what can comes inside the microtask queue?
// All the callback functions which comes through promises are microtasks and will go to microtask queue.
// There is something called mutation observer and it keeps on checking whether there is some mutation in
// DOM tree or not. If there is some mutation in DOM tree it can execute some callback function.

// So Promises and mutation observers goes inside the microtask queue. And the rest like setTimeout, DOM
// API's like event listeners goes inside the callback queue. Callback queue is also known as the task queue.

// Suppose we have 3 tasks inside the microtask queue and 1 inside the callback queue, in this case the
// callback queue task will only get the chance to move into the call stack when all the 3 task inside the
// microtask queue gets executed.

// Suppose the task inside the microtask queue is create more task inside the same queue then the callback
// queue task will never get the chance to execute and this infinite like waiting time is called starvation.
