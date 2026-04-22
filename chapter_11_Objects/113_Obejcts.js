const calculator = {
    value: 0,
    add(n){
        this.value +=n;
        return this;
    },
    subtract(n) {
        this.value -=n;
        return this;
    }

}

console.log(calculator.add(5).subtract(5));
//{Value =0, add : [Function : add], subtract : [Function: subtract]}