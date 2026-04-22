function step1(callback){
    console.log("Open The Browser")
    callback();
}

function step2(callback){
    console.log("Navigate to Login screen")
    callback();
}
function step3(callback){
    console.log("Enter the credentials")
    callback();
}
function step4(callback){
    console.log("Click on Button")
    callback();
}

step1(function() {
    step2(function(){
        step3( function (){
            step4( function (){
                console.log("Done");
            });
        });
    });
});