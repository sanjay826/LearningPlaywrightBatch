function makeCounter(start =0){
    let  count = start;  // This  variable is "closed Over "
    function increment(){
        count ++;  
        return count;
    }
    function decrement(){
        count --;
        return count;
    }
    function get(){
        return count;
    }
    return { increment, decrement , get};
}

// Other Way -> 
function makeCounter1(start =0){
    let count = start; 

    return {
        increment(){ count++},
        decrement(){count --},
        get(){return count ;}
    }
}
let counter =makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());

let counter1 =makeCounter1(5);
counter1.decrement();
counter1.decrement();
counter1.decrement();
console.log(counter1.get());