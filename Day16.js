// EP-16 | JS Engine EXPOSED Google's V8 Architecture

// JS can run anywhere in any device it's just need a runtime env to run which contains the following:

// 1. JS Engine
// 2. Event loop
// 3. Queues (Task and microtask queues)
// 4. API's

// Examples: Browser, Node.js

// There are some difference in the implementation of common things inside the different runtime-s but the
// concept is same in all of them.

// 3 Major steps done by the JS Engine
// 1. Parsing
// 2. Compilation
// 3. Execution

// Phase 1: Parsing
// Code is broken down into tokens.
// A syntax parser is used in this step to convert the code into AST (Abstract syntax tree)

// Phase 2: Compilation
// AST is passed into the compilation phase.
// The compilation ans phase 2 i.e. execution goes hand in hand.

// JS has JIT (Just in time compilation).
// Interpreter (Execute line by line, Fast)
// Compiler (Whole code is compiled before execution, Slow but efficient)

// JIT = Interpreter + Complier

// Phase 3: Execution
// The byte code that we received will be executed here.
// This execution is not possible without memory heap and the call stack.
