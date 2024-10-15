// EP-04 | How functions work in JS & Variable Environment

var x = 1;

// Possible because of hoisting
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// Please revise the execution context notes, here the same thing will happen phase by phase.
// Creation phase then execution phase.

// Everything will be tracked by call stack.
