// // Object in Javascript - eventual operation of events
// // Pending 
// // Resolve
// // Reject

// let allGood =  true;

// let fetchSomeDate = new Promise((resolve,reject)=>{

//     if(!allGood){
//         reject("error fetching data")
//     }
//     else
//     {
//         resolve({
//             id:1,
//             message : "Nice Work"
//         }
//         )
//     }


// })

// fetchSomeDate.then(fetchData=>{
//     console.log("then : ", fetchData);
// }).catch(err=>{
//     console.log(err);
// });


// Using promises to divide a number


const divide = (a,b) => {
    return a/b;
}

console.log(divide(10,2));














// set time out