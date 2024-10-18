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
