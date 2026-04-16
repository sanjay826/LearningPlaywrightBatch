// @Pure function  : 
// A Pure function always returns the same output  for the same input and has no side effects. 

// Pure - no side effects , predictable output

function calculatePassRate(total, passed ){
    return ((passed / total) * 100).toFixed(2)
}
console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));

// Impure function - Depends on external state 
let threshold =70;
function isPassing(score){
    return score >= threshold;
}
console.log(isPassing(threshold));
threshold =50; 
console.log(isPassing(threshold));