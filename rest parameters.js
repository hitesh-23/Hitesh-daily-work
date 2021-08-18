function sum (num1, num2,...args){
    let total = num1 + num2 
    for (const a of args) {
        total += a;
    }
    return total;
}

console.log(sum(3,4,5,6,7));


function sum(...args) {
    return args.filter(function(e){
        return typeof e === "number";
    }).reduce(function(prev,curr){
        return prev + curr;
    });
}


console.log(sum(25,"Hitesh",null,undefined,"Malvika",28));