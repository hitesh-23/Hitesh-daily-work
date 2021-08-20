// Promise Chaining

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000)
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 3;
}).then((result)=>{
    console.log(result);
    return result * 4;
}).then((result)=>{
    console.log(result);
    return result * 5;
});






// Returning a Promise

p.then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2);
        }, 3 * 1000);
    });
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 3);
        }, 3 * 1000);
    });
}).then(result => console.log(result));



const friends = ["Shahan","hitesh","jayesh","sahil","jay"];

function filterItems(arr,query) {
    return arr.filter((string)=>{
        return string.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}


// console.log(filterItems(friends,'sh'));