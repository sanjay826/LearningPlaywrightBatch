let env = "Staging"  // global scope 

function setupConfig() {
    let timeout = 3000; // local scope 
    console.log(env);  // can access global 
    console.log(timeout);  // can access local

}

setupConfig();
console.log(env);
console.log(timeout); // ReferenceError - not accessable  


// Nested scope | Blocked Scoped 
function outer(){
    let x=10;

    function inner(){
        let y=20;
        console.log(x)
    }
    inner();
    console.log(x); // Outer - can not access inner's variable 
}