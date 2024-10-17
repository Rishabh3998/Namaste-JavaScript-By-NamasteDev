// EP-11 | setTimeout + Closures Interview Question

// Question 1:

function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i); // Print 1 after 1 second
  }, 1000);
}
x();

// Question 2:

function y() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste JS");
}
y();

// Output for above code snippet:
// Namaste JS
// 1 (After 3 sec)

// Reason:
// JS does not wait for any one. If it sees any setTimeout or any other function which cause a time
// delay, JS will say you wait when the waiting time is over let me know i will perform the steps of
// instructions defined by you in the callback till then let me move on to the next piece of code.

// Here the callback passed into the setTimeout forms a closure and have the reference of its lexical
// scope in which i is present. Now what setTimeout do it takes the callback function and stores it
// into a place with an attached timer, and JS proceeds forward. When the time expires JS takes the
// callback put it again into the call stack and runs it.

// Quote: Time, tide and JS waits for none :)

// Question 3:

function z() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
z();

// Output for the above code snippet:
// 6 6 6 6 6

// Reason:
// This is happening because of the closure. A closure is a function along with its lexical environment.

// When JS puts the callback present in the setTimeout into the memory attached with a timer the callback
// still has the reference to the lexical env and the variable present in it, which means callback has
// the reference of the variable i.

// Now, we can see that we declared 'i' using var which is function scoped.
// So when JS is making the copy of callback passed in the timeout the function will point to the
// same reference of i every time and the same i will be accessible to the console.log statement.

// As we know JS wait for no one, so it will run the loop till the last condition.
// So, this same i will increase every-time and when there will be the time to print i the value of i
// will be equal to 6 and callbacks will be executed in the call stack one by one which will print 6
// in the console after evert second.

// How this will look like?

// Function scope / Global scope
// var is function scope variable is present in the global scope

// i = 1 => 2 => 3 => 4 ..... till i <= 5

// Callback 1
// Callback 2
// Callback 3
// Callback ..
// Callback till i <= 5

// All callbacks above points to the same i present in the function / global scope.

// Question 4:

function p() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
q();

// Output for the above code snippet:
// 1 2 3 4 5

// Reason:
// Here we are using let which is block - scope. So, every time loop runs a new block will form which
// will have i in it. So here total 5 blocks will be formed and each will increment by 1 and the callback
// present inside the setTimeout will have the reference of its desired block, so when the time comes
// to print the i, callback will fetch the i from its desired block and print the i in console.

// How this will look like?

// Block scope
// let is block scope variable will be present inside blocks.

// Block 1
// {
//   i = 1;
// }

// Block 2
// {
//   i = 2;
// }

// ....

// till last iteration of the loop
// {
//   i = 5;
// }

// Callback 1 reference to block 1
// Callback 2 reference to block 2
// Callback 3 reference to block 3
// Callback ..
// Callback till i <= 5

// Without using let mimic the same behavior with var i

function s() {
  for (var i = 1; i <= 5; i++) {
    function closure(j) {
      setTimeout(function () {
        console.log(j);
      }, i * 1000);
    }
    closure(i);
  }
}
s();

// Output for the above code snippet:
// 1 2 3 4 5
