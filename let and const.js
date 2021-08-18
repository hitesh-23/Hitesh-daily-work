// Let and Const Example

let x = 10;
var p = 100;

if (x === 10){
    let x = 25;
    console.log(`the value of varible inside the block is : ${x} and ${p}`);
 
}

console.log(`the value of varible OUTSIDE the block is : ${x} and ${p}`);


// Inside of a function

var number = 500;

const foo = (number) => 
{
    let x = 100;
    console.log(`addition inside of a function is :  ${x + number} and ${p}`);
}


const foo1 = () => {

    let x = 200;
    console.log(`addition of a function is ${x + number} and ${p}`);
}


foo(number);
foo1(number);
console.log(`Addition outside of a function is : ${ x + number} and ${p}`);

