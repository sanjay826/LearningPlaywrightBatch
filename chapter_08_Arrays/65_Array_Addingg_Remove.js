let arr =[1,2,3];

// Add to End
arr.push(4);
console.log(arr);

// Remove from End 
arr.pop();
console.log(arr)

arr.push(5,6);
console.log(arr);

// Add to BEGINNING 
arr.unshift(0)
console.log(arr);

// remove from BEGINNING 

arr.shift();
console.log(arr);

// splice (start , deleteCount, ...itemToAdd)
arr.splice(2,1); // remove 1 item at index 2 
console.log(arr);

arr.splice(2,0,99);
console.log(arr) // [1,2,99,5,6]