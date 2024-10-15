// EP-02 | How JavaScript Code is executed? & Call Stack

// When we run a JS programme, there are lot of things which happens behind the scenes in JS engine.

// Always remember that everything in JS happens inside an execution context.

// So what happens when we run a JS program ?
// An execution context is created.

// Let's see how this execution context is created.

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

// When we try to run the above code a Global execution context is created.
// So, Execution context / Global execution context is like a big box which contains two separate
// components in it:

// This execution context is created in 2 phases.
// 1. Creation phase / Memory creation phase
// 2. Code execution phase

// PHASE 1:

// In the first phase of memory creation, JS will allocate the memory to all tha variables and
// functions. Now when JS engine will go to line 12 it will allocate memory for n in memory env.
// same will happen with the other lines.

// So in the first phase, JS will skims through the whole program line by line and allocate the
// memory to all the variables and functions. As soon as it encounter var n = 2; it reserves
// memory for it and allocate a special value, undefined to it. undefined is like a placeholder
// a special keyword inside JS. For function it will copy the whole function body inside the
// memory allocated to the function name.

// ---------------------------------------------------------------------------------------------------------

//        Memory component / variable environment   |        Code component / Thread of execution
//                                                  |
//                n: undefined                      |
//                square: {whole function body}     |
//                square2: undefined                |
//                square4: undefined                |

// ---------------------------------------------------------------------------------------------------------

// PHASE 2:

// In the second phase which is the code execution phase, so, after the memory allocation JS will
// skims through the whole program once again line by line and it executes the code now in this
// 2nd phase. This is the point where all the functions and all the calculations in the program will
// execute.

// When JS will encounter the line var n = 2; it will replace the undefined by 2 in this 2nd phase.
// In next line there is nothing to execute because it is just a function so, nothing will happen here.
// Now when JS will encounter line 17 it will encounter var square2 = square(n); and here we will
// invoke the function to get the result and then we will replace undefined with this result.

// Function behave differently in JS, it is like a mini program in JS, so whenever a new function is
// invoked then altogether a new execution context is created. So till now we were in the global
// execution context but when this function will invoke a brand new execution context will be created
// inside the global execution context.

// This new Execution context will contain the same Memory component and Code component.

//        Memory component / variable environment   |        Code component / Thread of execution
//                                                  |
//                n: 2                              |
//                square: {whole function body}     |
//                square2: undefined                |           Memory        |       Code
//                                                  |                         |
//                                                  |       num: undefined    |
//                                                  |       ans: undefined    |
//                                                  |                         |
//                                                  |
//                square4: undefined                |

// ---------------------------------------------------------------------------------------------------------

// PHASE 2 execution inside the nested Execution context:

//        Memory component / variable environment   |        Code component / Thread of execution
//                                                  |
//                n: 2                              |
//                square: {whole function body}     |
//                square2: undefined                |           Memory        |       Code
//                                                  |                         |
//                                                  |       num: 2            |     num * num
//                                                  |       ans: 4            |     return statement
//                                                  |                         |
//                                                  |
//                square4: undefined                |

// ---------------------------------------------------------------------------------------------------------

// When we hit the return statement this execution context will return the ans provided by the function call
// to the variable in which we need to store that answer.

// ---------------------------------------------------------------------------------------------------------

//        Memory component / variable environment   |        Code component / Thread of execution
//                                                  |
//                n: 2                              |
//                square: {whole function body}     |
//                square2: 4                        |           Memory        |       Code
//                                                  |                         |
//                                                  |       num: 2            |     num * num
//                                                  |       ans: 4            |     return statement
//                                                  |                         |
//                                                  |
//                square4: undefined                |

// ---------------------------------------------------------------------------------------------------------

// Now as we got the result for the square2 after the function call the nested Execution context will be
// deleted. Same thing will happen with square4 line.

// When whole program gets executed the Global execution context will also delete.

// Everything that we have seen is handled by the call stack. It is a stack which contains the global execution
// context at the bottom and whenever a new context is created at function call, that new context gets pushed
// inside this call stack and pops out after we get the result. When whole program gets executed the global
// context also pops out from the stack and stack gets empty which means that program is executed completely.

// Note: Call stack maintains the order of execution of execution contexts.
// This call stack is also known by some other names like:

// 1. Call stack
// 2. Execution context stack
// 3. Program stack
// 4. Control stack
// 5. Runtime stack
// 6. Machine stack
