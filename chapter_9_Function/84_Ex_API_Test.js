// if(ourStatusCode >= 200 && ourStatusCode < 300)

function validateStatusCode(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine");
    }
}

const validateStatusCode_Ex= function(status){
    if(status >= 200 && status <=300){
        console.log("Request is fine");
    }
}



const  validateStatusCode_Arrow = (status) =>{
    if(status >= 200 && status <=300){
        console.log("Request is fine");
    }
}

validateStatusCode(200);
validateStatusCode_Ex(200);
validateStatusCode_Arrow(200);