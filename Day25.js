// EP-25 'this' keyword
"use strict";

// this in global scope
console.log(this); // pointing to the window / global object (always when in global scope)
// Definition: (What is the value of 'this' inside the global scope/space) => It will be global object
//              and this global object can be different it can be window, global etc it depends upon
//              where we are running that piece of code, because every runtime has different global
//              object.

// this inside a function
function x() {
  // Here the value of 'this' depends on strict and non-strict mode
  console.log(this); // pointing to the window object (non-strict mode)
  console.log(this); // undefined (strict mode)
}
// Definition: Here 'this' is again showing the window object but it is following a different concept to
//             point 'this' to the global object. 'this' keyword also works differently in strict mode and
//             non-strict mode. In a function 'this' keyword will always be undefined but if we are not
//             using strict mode then 'this-substitution' will happen and the value of 'this' will be
//             replaced by globalObject.

// this in strict mode - (this substitution)
// If the value of 'this' is undefined or null so 'this' will be replaced with globalObject (non-strict mode)

// this keyword value depends on how this is called (window)
x(); // return undefined
window.x(); // return window

// this inside an object's method
const obj = {
  a: 10,
  x: function () {
    console.log(this);
    console.log(this.a);
  },
};

// Here 'this' will reference to the object obj
obj.x();

// call apply bind methods (sharing methods)
const obj2 = {
  a: 20,
};

// Here i am sharing the x method from obj, i've just changed the context for this method.
obj.x.call(obj2); // Now this line will point to the obj2 and 20 will be printed by the x()

// this inside arrow function
// Arrow function don't provide their own 'this' binding (it retains the 'this' value of the
// enclosing lexical context)

// Here lexical means where our code is lexically present inside our codebase.

// Lexically present inside global scope
const arrow = () => {
  console.log(this); // pointing to the window / global object
};
arrow();

// Lexically present inside global scope
const obj3 = {
  a: 100,
  x: () => {
    console.log(this); // Points to the window object
  },
};
obj3.x();

// this inside nested arrow function
// Lexically present inside global scope
const arrow2 = () => {
  // Lexically present inside arrow2 function scope
  const arrow3 = () => {
    console.log(this); // Window object
  };
  arrow3();
  return arrow3;
};
arrow2()();

const obj4 = {
  a: 100,
  x: () => {
    const y = () => {
      console.log(this); // Points to the window object
    };
    y();
  },
};
obj4.x();

const obj5 = {
  a: 100,
  x: function () {
    // this function is lexically enclosed inside the x method and the lexical env for x method is obj5
    // there for 'this' inside y will point to obj5
    const y = () => {
      console.log(this); // Points to the obj5 object
    };
    y();
  },
};
obj5.x();

// this inside DOM => reference to HTML element
