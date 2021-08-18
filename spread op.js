const arr1  = ["alpha","beta","gama"];

const arr2 = ["unn","dos","tres"];

const arrMega = [...arr2,...arr1,"Hitesh"];

console.log(arrMega);


let chars = ['A',...'BCDE','f','g'];

console.log(chars);

//Spread operator unpacks the elements of iterable objects 
// such as arrays, sets, and maps into a list.

// The rest paramter is also denoted by three dots (…). However, 
// it packs the remaining arguments of a function into an array.