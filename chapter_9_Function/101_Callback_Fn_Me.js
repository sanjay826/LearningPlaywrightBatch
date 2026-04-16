function sanjay_doing_work(worker , callback){
    let work = worker;
    console.log("Finished the office work");
    callback();
}

function callWife(){
    console.log("Call wife after work is done ")
}

sanjay_doing_work("Office Work", callWife);