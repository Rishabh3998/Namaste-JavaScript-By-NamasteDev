// EP-09 | BLOCK SCOPE & Shadowing in JS

// What is a block?
// A block (compound statement) is {}

// This is a block (compound statement).
// {
//
// }

// A block is used to combine multiple JS statements into one group.
{
  var a = 10;
  console.log(a);
}

// So, the group of statements can be used where JS expects a single statement.
// Eg: In a if statement JS expect one statement for one condition
// if (condition) statement

// In this eg we are using this group of statements to simulate that this is a single statement.
if (true) {
  var b = 20;
  console.log(b);
}

// What is block scope?
// A block scope is defined by the region present inside open and close curly braces. The area in which the
// defined variable are only accessible are block scoped.

{
  var x = 10; // global scoped i.e can be accessed anywhere
  let y = 20; // block scoped i.e can be accessed only inside this block
  const z = 30; // block scopes i.e can be accessed only inside this block

  console.log(x); // 10
  console.log(y); // 20
  console.log(z); // 30
}

console.log(x); // 10
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

var p = 1000;
{
  var p = 69; // will shadow the 1000 assigned to above p and modify it value in the global scope as well
  // because these both variables share same memory scope
  console.log(p); // 69
}

console.log(p); // 69 will be modified by line 47

let q = 100; // Script scope
{
  let q = 10; // will shadow the above q in this scope, present in block scope
  console.log(q); // 10
}

console.log(q); // 100

// Both q have different memory space therefore no modification will be there in the values.
// Same case will be there for const, because it is also block-scoped.

// Same shadowing concept will be followed in function scope as well
const w = 1000;
function foo() {
  const w = 10;
  console.log(w);
}
console.log(w);

// Illegal shadowing

// Legal
var t = 100;
{
  var t = 200;
}

// Legal
let y = 100;
{
  let y = 200;
}

// Legal
var o = 100;
{
  let o = 100; // let can shadow a var variable
}

// Illegal
let o = 100;
{
  var o = 100; // var cannot shadow a let variable, let is more powerful
}

// Legal
let qw = 100;
function bar() {
  var qw = 1000; // This will not interfere because var is inside its boundary now.
}

// Scoping works same in traditional and arrow functions.
