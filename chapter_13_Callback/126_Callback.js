/* What is callback function ?
   Ans: A callback is simply function that you give to another function , 
   saying "Hey when you are done , run this.  */

   function placeOrder(item, callback){
    console.log("... placing order ");
    callback();
    console.log("Post order");
   };

   // Define 
   function print(){
    console.log("Normal Fn - Done with the order");
   }
  
   // First Way 
   // placeOrder("Burger",print)

   // Second Way Anonymous function
      placeOrder("Burger", function(){
        console.log("Anonymous function, I am also a function without name !")
      });    

   // Third Way  
   placeOrder("Burger", () => {
    console.log("Arrow Function, I am also a function without name !" );
   });