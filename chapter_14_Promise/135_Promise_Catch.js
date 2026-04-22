const { resolve } = require("node:dns");

let apiCall = new Promise(function(resolve , rejected){
    rejected("500 Error");
});

apiCall.then(function (data){
    console.log("Data is success");
}).catch(function (error){
    console.log(error);
})