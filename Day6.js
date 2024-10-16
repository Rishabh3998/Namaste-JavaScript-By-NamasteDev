// EP-06 | undefined vs not defined in JS

// undefined is a very special keyword in JS and it is not there in other languages.
// It has lot to do with how JS code is executed.

// As we know that JS code execution works in a different way, first it creates an global execution
// context in which 2 phases occurs: 1. Creation phase and 2. Execution phase.

// In this process of allocating memory to the variables without even executing any line of code
// undefined plays a great role because it is assigned to all the variables whom memory space is
// allocated to them.

console.log(a); // undefined (Assigned to a in the memory allocation phase)
var a = 7;

// undefined is showing that the variable in which undefined is assigned is taking some memory.
// But we must remember that we will get undefined only if the variable is declared in the code
// base if declaration never happened then we will get not-defined if we try to access any random
// variable which is never declared.

// undefined - memory is allocated (undefined !== empty) it is taking space in the memory
// not-defined - no memory allocation happened here

// undefined is like a placeholder which is kept there for the time being until the value is assigned
// to the variable.

var b; // undefined (always)
console.log(b);
b = 10; // This line will make the variable not undefined

if (b === undefined) {
  console.log("b is undefined");
} else {
  console.log("b is not undefined");
}

// Javascript is a loosely typed language i.e it does not attaches its variables to a specific data type.

// This is possible because JS is loosely typed / weekly typed.
var c = "Rishabh";
c = 34;

var d;
console.log(d); // undefined
d = 10;
console.log(d); // 10
d = "Namaste JS";
console.log(d); // Namaste JS
d = undefined; // Never do this
console.log(d); // undefined
