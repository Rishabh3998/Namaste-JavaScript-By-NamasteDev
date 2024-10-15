// Shortest JS program

// This empty file is the shortest JS program, it looks like nothing is going on but BTS JS engine is working
// on the lot of things.

// A global execution context will still create even if nothing is there to execute in the file.

// A window object will be created by JS engine and then it will be exposed to the user. JS engine will also
// expose a this keyword to use which will also point to the window object at the global level.

// Window is actually a global object which is created along with the global execution context.

// Whenever any JS program will run, JS engine will create some objects:
// 1. Window object (Global object)
// 2. Global execution context
// 3. 'this' keyword which will point towards the global object.

// JS runs on several places like on browsers, servers etc. So a global object will always be created
// though its name can be different for different environments but this process of creating a global
// object is a must. Even though our file is empty, this object will still be created.

// At global level
// this === window => O/P: true

// Any code which is written in the global scope is present in the global space.

// Some code:

var a = 10;
function b() {
  var x = 10;
}
console.log(window.a); // 10
console.log(a); // 10
console.log(x); // JS will try to find this in global space but since it is not there O/P: not-defined
console.log(this.a); // 10
