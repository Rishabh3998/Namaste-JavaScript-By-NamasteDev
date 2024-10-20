// EP-20 | Callback Hell

// Advantages of callbacks:

// Helps to run async tasks.
// It forms a closure there for we can preserve the state.
// Performance get improved

// Suppose we are creating an e-commerce website, and a cart system will always be there.
// Now, in a cart system there are some key number of steps which should be followed.

const items = ["item1", "item2", "item3"];

// 1. Item addition inside cart
// 2. Address selection
// 3. Create order
// 4. Payment process

// The above steps are dependent on each other like we cannot pay until we create an order/

// api.createOrder();
// api.proceedToPayment();

// Now for this kind of behavior callbacks comes into the picture.

api.createOrder(items, function () {
  api.proceedToPayment();
});

// When JS engine will execute this code it will just call the create order API, now it is the
// responsibility of create order api to call the payments api after order is created. This is
// the way async operations gets handled.

api.createOrder(items, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateTheWallet();
    });
  });
});

// Disadvantages of callbacks:

// 1. Callback hell

// Now in the above code snippet the calls are happening according to the flow of how an order is
// created for a user and what kind of flows he/she go through. But if flows gets increases
// the number of callbacks will also increase which will create a callback hell.

// This kind of code structure in unreadable and unmaintainable.

// This structure is also know by the name pyramid of doom.

// 2. Inversion of control

// Inversion controls refers when we lose the control of our code when we are using callbacks.

api.createOrder(items, function () {
  api.proceedToPayment(function () {});
});

// Here in the above code we called the payment api inside the create order api and we are thinking
// that it will be called when the order will be created, so the control of this api is in the
// hands of the create order api which is very risky, because we are blindly trusting the create
// order api, which can be present in a different service and lot of things can happen if this api
// breaks on production. What if create order api get called and it accidentally call the payment
// api twice.
