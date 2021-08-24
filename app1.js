// promises - we use it to avoid call back hell

// Async Await - cleaner syntax

// 3 Stages : Pending, Rejected, Fulfilled
let flavor = prompt("Please enter the flavor of your choice");;

const prom1 = new Promise((resolve,reject)=>{
    if(flavor==="chocolate"){
        console.log("working")
        resolve(toppings = prompt("please choose from toppings"))
    }





});



prom1.then((data)=>{
    console.log(data);
})