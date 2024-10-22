// EP-22 | Creating a Promise, Chaining & Error Handling

// Earlier we discussed about the cart system which will trigger every flow using promise, now
// we will learn about how we will receive this promise from the API.

const cart = ["shoes", "pants", "shirts"];

const promise = createOrder(cart); // give orderId

// Promise chaining
promise
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .catch((err) => {
    // This catch will only take the responsibilities of the above then blocks down this block everything
    // can be executed.
    console.err(err.message);
  });

// API development

// Creating a promise
function validateCart(cart) {
  // return true; // will resolve the promise
  return false; // will reject the promise
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successful");
  });
}

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    // create an order
    // validating cart
    // orderId will generate
    if (!validateCart(cart)) {
      // if this function fails we will reject the promise else we will resolve it
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for creating order
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}
