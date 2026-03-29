let username = "dev";
let passwrod = "secured123";
let isAccountLocked = true; 

if((username === "dev" && passwrod === "secured123") && !isAccountLocked){
    console.log("Allowed to enter")
} else {
    console.log("Not allwoed to enter")
}