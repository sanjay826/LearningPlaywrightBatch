const { constants } = require("node:buffer");

function openBrowser() {
  return new Promise(function (resolve) {
    resolve("Browser Opened !");
  });
}
function goToLogin() {
  return new Promise(function (resolve) {
    resolve("Login Page Loaded");
  });
}

function enterCredentials() {
  return new Promise(function (resolve) {
    resolve("Credentials Entered");
  });
}

function clickLogin() {
  return new Promise(function (resolve) {
    resolve("Logged in succefull !");
  });
}

openBrowser()
  .then(function (msg) {
    console.log("Step-:1", msg);
    return goToLogin();
  })
  .then(function (msg) {
    console.log("Step-2:", msg);
    return enterCredentials();
  })
  .then(function (msg) {
    console.log("Step-3:", msg);
    return clickLogin();
  })
  .then(function (msg) {
    console.log("Steps -4:", msg);
  })
  .catch(function (error) {
    console.log("Error", error);
  }).finally(function (){
    console.log("Done Execution !")
  })

  console.log("=======Another Way=========");

 /* let step1 = openBrowser().then(function (msg){
  console.log("Step-0", msg);
  return goToLogin();
});

let step2 = step1.then(function (msg){
  console.log("Step-1", msg);
  return enterCredentials();
});

let step3 = step2.then(function (msg){
  console.log("Step-2", msg);
  return clickLogin();
});

let step4 = step3.then(function (msg){
  console.log("Step-3", msg);
}); */