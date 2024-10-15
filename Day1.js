// How JS works?
// What is the Execution context?
// is JS synchronous or asynchronous?
// is JS single threaded or multi threaded?

// Core Fundamental:
// Everything in JS happens inside an Execution context?
// It is like a container in which the whole JS code executed.

// So, Execution context is like a big box which contains two separate
// components in it:

// 1. Memory component or Variable environment
// This is the place where all the variables and functions are stored as key-value pairs.

// 2. Code component / Thread of execution
// This is the place where code is executed line by line.

//        Memory component / variable environment   |        Code component / Thread of execution
//                                                  |
//                key: value                        |            line 1 -----------------
//                a: 10                             |            line 2 -----------------
//                function: {....}                  |            line 3 -----------------
//                                                  |

// Core Fundamental:
// JS is a synchronous single-threaded language.
// This means that JS can only execute single line/command at a time.
// and when we say synchronous single-threaded language that means one command at a time in
// one specific order. So, JS can only execute line 2 if line 1 execution is done.

// JS is not possible without this execution context.
