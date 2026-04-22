const { constants } = require("node:buffer");

const user = {
    firstName: "Sanjay",
    lastName: "Kumar",
    get fullName(){
         return this.firstName + this.lastName ;
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName); 
user.fullName = "Amit Sharma";
console.log(user.fullName);