 function add(a,b,c){
    return a+b+c ;
 }

 let num = [1,2,3];
 let cal =add(...num); // 6
 console.log(cal);

 function hasError(...codes){
    return codes.some(c => c >=400)
 }

 let responseCode = [200, 201, 404]

 let output =hasError(...responseCode); // true
 console.log(output);

