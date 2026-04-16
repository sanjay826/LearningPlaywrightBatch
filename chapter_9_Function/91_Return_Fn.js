// Return Values 

function getStatus(code){
    if(code >=200 && code < 300) return "Success !"
    if(code >=400 && code < 500) return "Client Error !"
    if(code >= 500) return "Server Error !"
}

getStatus(200); // Success !
getStatus(404); // Client Error !
getStatus(500); // Server Error !

// Return nothing -> undefined 
function logTest(name){
    console.log(`Running: ${name}`);
}
logTest("Hi This is a log")


// Return Multiple values via array or object 
function aaa(){
    return [2,4,6,8,10];
    //return {'Name : Sanjay'}; // Object 
}