// Immediately Invoked Function Expression
// They dont need to be called 

// IIFE
(function name(){
    console.log("Hi");
})();


(function (){
    console.log("HI T")
})();

function getEnv(){
    console.log('Staging')
}

getEnv();

// call your self IIFE

(function (){
    console.log('Staging')
})();

// Arrow function 
(() => {
    console.log("Setup Complete")
})();

