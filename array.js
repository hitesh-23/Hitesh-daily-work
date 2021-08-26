

arr1 = ["Names","Values","Data","number","address","history"]

arr212 = [50,60,70,80,90];

// For each

arr1.forEach((element,index) => {
   console.log(element,index) 
});

// Map method

    const doubled = arr1.map(element=>{
            return element*2;
    });
    console.log(doubled);

//Filter Method

    const arr2 = arr1.filter(element=>{
        return element.length <= 6;
        
    })
console.log(arr2);

// Redduce Method

const sum =  arr212.reduce((total,item)=>{
    return total + item;
},0);
console.log(sum);

// some

const itemTrue = arr212.some((val)=>{
    return val <60;
})
console.log(itemTrue);

// find

const user = arr1.find(name => name === "Values");

console.log(user);

// Every

const allpositive = arr212.every((val) => {return val < 90});
console.log(allpositive);

// Find





// Find Index



