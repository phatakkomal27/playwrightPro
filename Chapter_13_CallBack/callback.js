function placeOrder(item,callback)
{
    console.log(item+"order placed");
    callback();
}

function printOrder()
{
    console.log("order done");
}

placeOrder("Pizza",printOrder);
placeOrder("Burgur", function()
{
 console.log("anonemous function");
}
);

placeOrder("pasta",()=>{
    console.log("Arrow function");
}
);