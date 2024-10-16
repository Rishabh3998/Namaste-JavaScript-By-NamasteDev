// EP-08 | let & const in JS, Temporal Dead Zone

// What is temporal dead zone?
// Are let and const declarations hoisted?
// SyntaxError vs ReferenceError vs TypeError

// let and const declarations are hoisted but they are present in the temporal deal zone for the time being.

console.log(b); // undefined
console.log(a); // ReferenceError: cannot access a before initialization
let a = 10;
var b = 100;
console.log(a); // 10
console.log(b); // 100

// When JS engine will start executing the program, it will put 'b' which is declared using var inside Global
// scope but 'a' will be placed inside a Script scope which we also call the temporal dead-zone. So, this
// states that let & const are also hoisted but they are not accessible because they are present inside temporal
// dead zone. Both a and b will be initialized with undefined in the creation phase. let and const variables
// doesn't get stored inside global memory space they resides in an altogether different memory space. And we
// cannot access this memory space until we declare and initialize the variable before accessing it.

// Temporal dead zone
// The phase between hoisting and till the variable gets assigned or get some value before execution is known
// as the temporal dead zone. Whenever we try to access any variable which is present inside a temporal dead
// zone we will get a ReferenceError.

let x;
console.log(x); // undefined

// If a variable is not present in the entire code base i.e we never declared this variable
// We will get ReferenceError: variable is not defined.

// If the variable is declared with let and const and we are trying to access it before declaration
// We will get ReferenceError: cannot access variable before initialization.

// The variables declared using let and const will not be attached to the window object because it is a
// Global object and let and const variables are not attached to global object, they reside in separate
// memory space.

// Same variable names are not allowed when we are using let and const i.e we cannot redeclare the variables
// in the same scope, which is possible in var. It will throw the [SyntaxError: variable has already been declared]
// if we try to redeclare any variable.

// const b; (Invalid) Initialization is mandatory at the declaration. [SyntaxError]
// b === 1000; (Invalid)

// const b = 100;
// b = 1000; (Invalid) cannot re-initialize [TypeError]

// SyntaxError: Issue in the syntax like re-declaration of variable.
// ReferenceError: Variable that we are trying to access does not exist.
// TypeError: re-initializing a const type variable gives type error.

// Temporal dead zone related error can mess our life. So always declare and initialize the variables at the top.
