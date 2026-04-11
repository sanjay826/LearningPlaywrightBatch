// sorting 

let fruit = ["Banana", "Apple", "Cherry", "Mango"];
fruit.sort();
console.log(fruit);

// alphabetical by default

let num = [1, 2, 10, 20, 100];
num.sort();
console.log(num);   // Wrong - (compares as strings !)

// numerical sort

num.sort((a, b) => a - b);
console.log(num); // ascending order 

num.sort((a ,b) => (b - a));
console.log(num);  // Dscending Order 







