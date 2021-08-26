//Iterators allows us to iterate over a collection or datastructure 

// Implement your own iterators to define custom behaviour

// Iterable vs Iterator


// Value and Done 
// Value == undefined and Done == true


let arr = [1,2,3,4,5];

    let iter1 = arr[Symbol.iterator]();

let fruits = ["Grapes","Mango","Apple","Lemon","Oranges"];

// Iterating through Values becomes easy..control is in our hands


let iter = fruits[Symbol.iterator]();
iter.next();
console.log(iter.next());
iter.next();
iter.next();
console.log(iter.next());


let iter123 = fruits[Symbol.iterator]();

let result = iter123.next();

while(!result.done)
{
    console.log(result.value);
    result = iter123.next();
}



