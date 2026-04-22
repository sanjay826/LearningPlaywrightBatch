let fasterServer = new Promise(function (resolve) {
  setTimeout(function () {
    (resolve("Fast 100ms"), 100);
  });
});

let slowServer = new Promise(function (resolve) {
  setTimeout(function () {
    (resolve("Fast 100ms"), 500);
  });
});

Promise.race(
  [fasterServer, slowServer]).then(function (winner) {
    console.log("Winner !!", winner);
  });

