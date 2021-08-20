// The Promise.all() static method accepts a list of Promises and returns a Promise that:

// resolves when every input Promise has resolved or
// rejected when any of the input Promise has rejected.


// If all the input promises resolve, the Promise.all() static method returns a new Promise that resolves to an array of resolved values from the input promises, in an iterator order.

// If one of the input promises rejects, the Promise.all() returns  a new Promise that rejects with the rejection reason from the first rejected promise. The subsequent rejections will not affect the rejection reason. The returned Promise also handles the rejections silently.





const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        console.log("The First Promise Has Been resolved");
        resolve(10);
    },1000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Second Promise Has been resolved");
        resolve(20);
    },2000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Third Promise has been resolved");
        resolve(30);
    },3000)
})


Promise.all([p1,p2,p3]).then(results=>{
    const total = results.reduce ((p,c)=>p+c);

    console.log("Results : "+ results);
    console.log(`Total : ${total}`);
});