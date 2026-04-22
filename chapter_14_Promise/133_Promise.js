let order = new Promise(function (resolve, rejected) {
  let foodready = true;
  if (foodready) {
    resolve("Pizza is delivered");
  } else {
    rejected("Order cancelled");
  }
});

console.log(order);
