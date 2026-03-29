let status1=0;
switch(status1){
    case false :
        console.log("false mached");
        break;
    case 0: 
        console.log(" 0 matched");
        break;
}

let age = 20;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote); 


// IQ  ternary Operator - 3 

let status2 = "active";
let msg = status2 === "active" ? "User is active"
        : status2 === "inactive" ? "User is inactive"
        : status2 === "banned" ? "User is banned"
        : "Unknown status2";

console.log(msg);

// IQ 4 
let name1 = "" ? "Has name" : "No name";
// "No name" (empty string is falsy)


// IQ 5
let name2 = "" || "Default";   // "Default" (empty string is falsy)

let name3 = 0 || "Default";  // "Default" (0 is falsy)

let name4 = true ? "" : "Default";