// EP-21 | Promises

// Promises are used to handle async operations in JS.

// As we know that we can handle async operations using callbacks but there some disadvantages
// which can create some major issues in the flow and in the codebase as well.

// So, due to callback hell and inversion of control issues we know use promises to handle
// async operations.

// So we have to design our API's which don;t take any callback functions instead they should return a
// promise which will say that when this task will be finished i will let you know so that you can do
// the next steps.

// Promise is an object which is empty initially and gets filled once it gets resolved.
// {data: undefined} // Before it gets resolved (This is only for demo real object has lots of things)
// {data: {...}} // After it gets resolved

// Now to do the next steps we can use then

const promise = createOrder(cart); // return orderId
promise.then(function (orderId) {
  proceedPayment(orderId);
});

const GITHUB_API = "https://api.github.com/users/Rishabh3998";

const user = fetch(GITHUB_API); // This will return a promise
// In the promise object we have 3 major fields PromiseType, PromiseState, PromiseResult
// When data/Result in promise object is undefined then the state is in pending state.

// State: 'pending', Result: undefined
// State: 'fulfilled', Result: Response
// State: 'rejected', Result: undefined

user.then((data) => {
  console.log(data);
});

// Promise objects are immutable therefore it is secure.

// Definition: Promise object is a placeholder for a certain period of time until we receive
// a value from an asynchronous operation which will fill the value in this placeholder.

// MDN docs:
// The Promise object represents the eventual completion (or failure) of an asynchronous
// operation and its resulting value.

// A Promise is a proxy for a value not necessarily known when the promise is created.
// It allows you to associate handlers with an asynchronous action's eventual success value
// or failure reason. This lets asynchronous methods return values like synchronous methods:
// instead of immediately returning the final value, the asynchronous method returns a promise
// to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected
// with a reason (error). When either of these options occur, the associated handlers queued up
// by a promise's then method are called. If the promise has already been fulfilled or rejected
// when a corresponding handler is attached, the handler will be called, so there is no race
// condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Promise chaining:
// To resolve the problem of callback hell we use promise chaining while using promises.

createOrder(cart)
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentId) {
    return showOrderSummary(paymentId);
  })
  .then(function (walletBalance) {
    return updateWallet(walletBalance);
  });
