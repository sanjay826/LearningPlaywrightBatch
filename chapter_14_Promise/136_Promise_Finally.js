let testRun = new Promise(function (resolve, rejected) {
  rejected("Assertion Failed");
});

testRun
  .then(function (msg) {       // Resolve
    console.log(msg);
  })
  .catch(function (error) {      // Rejected
    console.log(error);
  })
  .finally(function () {          // Always Executed
    console.log("I will be executed anyhow !!");
  });
