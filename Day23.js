// EP-23 | Async await

// What is async?
// What is await?
// How async await works behind the scenes?
// Examples of using async await
// Error handling
// Interviews
// Async await vs Promise.then().catch()

// Intro:
// async is a keyword that is used before a function to create a async function.
// An async function always returns a promise
async function foo(params) {
  // There are 2 things which i can return from this function
  // 1. A promise can be returned from here.
  // 2. A value can also be returned from here but this function will wrap it by a promise before returning.
  // So, thing is that this function will always return a promise.
  console.log(params);
}

async function getData() {
  return "Namaste";
}

const data = getData();
console.log(data);

// Output:
// [[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "Namaste"

data.then((res) => console.log(res));

const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

async function returnPromise(params) {
  return promise;
}

const promiseData = returnPromise();
console.log(promiseData);

const promiseDataWithoutObject = returnPromise().then((res) =>
  console.log(res)
);

// PS: async and await combo is used to handle promises.

// Before async/await how did we handled the promises.

function fetchData() {
  promise.then((res) => console.log(res));
}

fetchData();

// After async/await

async function handlePromise(params) {
  const value = await promise;
  console.log(value);
}

handlePromise();

// PS: await is a keyword that can be only used inside an async function

// Case study:
const mockApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!!!");
  }, 5000);
});

function olderWayFetchData() {
  // JS Engine will not wait for promise to be resolved
  mockApi.then((res) => console.log(res));
  console.log("Namaste JS");
}

olderWayFetchData();

// Output:
// Namaste JS
// Promise resolved

async function newWayHandlePromise(params) {
  console.log("Hello world");
  // JS engine was waiting here for the promise to be resolved
  // This is the only exception where JS waits for someone (Just to remember BTS it does not happen)
  // It looks like the JS engine is waiting but it is not true at all.
  // The main thread will be blocked for this function
  const value = await mockApi;
  console.log("Namaste JS");
  console.log(value);

  // Once a promise is resolved JS will not wait for the same promise again in the same function.
  // and it will get executed instantly
  const value2 = await mockApi;
  console.log("Namaste JS");
  console.log(value2);
}

newWayHandlePromise();

const mockApi2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!!!");
  }, 5000);
});

const mockApi3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!!!");
  }, 10000);
});

async function newWayHandlePromise2(params) {
  console.log("Hello world");
  // JS engine was waiting here for the promise to be resolved
  // This is the only exception where JS waits for someone
  // The main thread will be blocked for this function
  const value = await mockApi2;
  console.log("Namaste JS");
  console.log(value);

  // Once a promise is resolved JS will not wait for the same promise again in the same function.
  // and it will get executed instantly
  const value2 = await mockApi3;
  console.log("Namaste JS 2");
  console.log(value2);

  // If a single promise is getting resolved 2 times in a function then the engine will resolve it once
  // and cache it for the second line.

  // Behavior of this function:

  // When this function will be invoked the JS engine will go line by line for execution because JS is a
  // synchronous single threaded language. Now this function is inside our call stack and everything will
  // start getting executed one by one. Hello world will be logged, now promise will be encountered and
  // this function will be suspended and will move out of the call stack so that it cannot block the
  // main thread. It will wait till first mentioned promise is resolved and then it will move ahead and
  // then it will move to call stack and it will start executing again from where it left the last execution
  // Namaste JS and value will be printed.

  // Now new promise will get encountered and same process will be followed again. Then Namaste JS 2 and value2
  // will be printed.

  // PS: JS engine is not waiting here for the promise to be resolved it just suspend the execution of the
  // async function and move ahead till the line executes and then when promise gets resolved again start
  // from the last place where it left of.
}

newWayHandlePromise2();

async function usingFetch(params) {
  // const data = await fetch(""); // returns a response object
  // this response object has a body which is a readable stream.
  // if we want to convert this readable stream to json.
  // response.json() can be used, this res.json() will return a promise
  // when this promise is resolved it will give us the result.
  // const jsonValue = await data.json();
  // console.log(jsonValue);

  try {
    const data = await fetch();
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}
