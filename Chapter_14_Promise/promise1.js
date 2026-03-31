let order=new Promise(
    function(resolve,reject){
       let food="pizza"
         if(food=="pizza"){
            resolve("order placed")
            }
            else{
                reject("order failed")
            }
        }   
);

console.log(order);