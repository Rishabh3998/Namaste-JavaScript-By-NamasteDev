// EP-07 | The Scope Chain, Scope & Lexical Environment

// Scope in JS is directly related to lexical environment. Understanding of lexical environment will
// help to understand scope chain, scope and closures as well.

// Here we are trying to access 'b' in the function a ()

function a() {
  // Here firstly JS engine will try to find 'b' in the local env/scope of function a ().
  // And it will never get this 'b' inside this function because 'b' was never declared in this function
  // scope.

  // Then JS engine will try to find this 'b' outside of this local environment i.e this function scope.
  // And it will get this 'b' in the global scope and it will print it in the console.
  console.log(b); // 10
}

a(); // This will print undefined when function will invoke because assignment didn't happened yet.
var b = 10;
a(); // Because we are executing this function after assignment of 10 in variable b line 15 will print 10.

function x() {
  // This env / scope has the access of its outer scope / env
  y();
  function y() {
    // This env / scope has the access of its outer scope / env
    console.log(z); // 10
  }
}

var z = 10;
x(); // Because we are executing this function after assignment of 10 in variable z line 25 will print 10.

function p() {
  var t = 10;
  q();
  function q() {
    // t is accessible in the outer env
    console.log(t); // 10
  }
}

p();
// t is not accessible because it is defined inside the function scope and acting like a private variable.
// An outer env cannot access inner env entities but inner env can access outer env entities.
console.log(t); // not defined

// Scope:  A scope is where you can access a specific variable or a function in our code.

// Note: Whenever an execution context is created a lexical environment is also created. A lexical env is
// the local memory along with the lexical environment of its parent. Lexical means: In a hierarchy, In
// a sequence, In order, in code terms we can say that q function is lexically sitting inside p function
// and p is lexically inside global scope.

// Each memory component in the execution context has the reference to its parent lexical environment.

// Scope chaining:
// The mechanism of finding the variables first inside self local scope, then the parent lexical scope, then
// the parent's parent's scope, then ultimately in the global lexical scope is known as the scope chaining.
// So this whole chain of lexical environments is known as scope chain.

// What is lexical env?
// Lexical environment is created whenever an execution context is created. Lexical env is the combination
// of the local memory and reference to the lexical env of its parent.
// This scope chain determines whether the variable or func is present inside the scope or not. If the scope
// chain is exhausted and the variable is not found then that means the variable is not inside the scope chain.

// As we can see that function q is enclosed inside the function p which forms a closure.
