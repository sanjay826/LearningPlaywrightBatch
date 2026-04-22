const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const copy = {...obj1};
console.log(copy);

const merged = {...obj1, ...obj2};
console.log(merged)

// This keyword 
const user ={
    name: "Sam",
    saymyName(lastName){
        this.name += lastName
        return this.name;
    }
}

console.log(user.saymyName("Kumar"));