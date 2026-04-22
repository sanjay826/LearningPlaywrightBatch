/* let p = new Promise(function (resolve, reject) {
  resolve(42);
});

p.then(function (value) {
  console.log("Answer", value);
});

let q = new Promise(function (resolve, reject) {
  reject("Something Broke");
});

q.catch(function (error) {
  console.log("Answer", error);
});

let s = Promise.resolve(5);

s.then(function (value) {
  return value * 10;
}).then(function (value) {
  console.log("Result :", value);
});


Promise.resolve(1)
.then(function (val) {
  console.log(val); 
  return val + 1;
})
  .then(function (val) {
    console.log(val);
    return val + 1;
  })
  .then(function (val) {
    console.log(val); // 3
  }); */


  /* Promise.resolve("Start")
  .then(function (val){
    console.log(val);
    throw new Error("Broke at step 2");
  }) 
  .then(function (){
    console.log("This will NOT run");
  })
  .catch(function (err){
    console.log("Cought :", err.message);
  }) */

/* Promise.reject("Test Failed")
     .then(function (data){
        console.log("Data :", data);
     })
     .catch(function (err){
        console.log("Error",err);
     })
     .finally(function () {
        console.log("Cleanup Done");
     });
 */
 /* Promise.resolve("Quick Win").then(function (msg){
    console.log(msg);
 });

 Promise.reject("Quick Loss").catch(function (msg){
    console.log(msg);
 }) */

 /* let t1 = Promise.resolve("Login: PASS");
 let t2 = Promise.resolve("Search: PASS");
 let t3 = Promise.resolve("Logout: PASS");

 Promise.all([t1, t2 , t3]).then(function (result){
    console.log(result);
 }) */


 /* let t1 = Promise.resolve("Login: PASS");
 let t2 = Promise.reject("Search: Fail");
 let t3 = Promise.resolve("Logout: PASS");

 Promise.all([t1, t2 , t3])
 .then(function (result){console.log(result);})
 .catch(function (err){console.log("Stopped :",err)}); */

 Promise.allSettled([
    Promise.resolve("API : 200"),
    Promise.reject("API : 500"),
    Promise.resolve("API : 201"),
 ]).then(function (results){
    results.forEach(function(r){
        let val =r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "->" +val)
    })
 })