// Real QA Scenario : E2E login Flow : App.vwo.com
function openBrowser(callback) {
  console.log("Open the browser!");
  setTimeout(function () {
    console.log("Step 1 - browser starting...");
    callback();
  }, 500);
}

function goToLoginPage(callback) {
  console.log("Open the browser!");
  setTimeout(function () {
    console.log("Step 2 - Login page loaded");
    callback();
  }, 500);
}

function enterCredentials(callback) {
  console.log("Open the browser!");
  setTimeout(function () {
    console.log("Step 3 - Enter Credentials");
    callback();
  }, 500);
}

function clickLogin(callback) {
  console.log("Open the browser!");
  setTimeout(function () {
    console.log("Step 4 -Login button clicked");
    callback();
  }, 500);
}

// This is callback hell
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function (){
                console.log("Test Complete !!")
            })
        })
    })
})
