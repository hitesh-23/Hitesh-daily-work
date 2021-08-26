// Functions in JavaScript, as we all know, “run until return/end”.
// Generator Functions on the other hand, “run until yield/return/end”.

//The generator functions are normally built using yield expressions. 
// Each yield inside the generator function is a stopping point before the next execution cycle starts. 
// Each execution cycle is triggered by means of next() method on the generator.


function* generatorFunction (i){
    yield i;
    yield i+1;
}

let generator1 = generatorFunction(5); // Creates a Generator


// console.log(generator.next());// value = 5, done = false 
// console.log(generator.next());// value = 6, done = false
// console.log(generator.next()); // undefined, true

// Assigning variables to yield

function *generatorFunction() {
    const x = yield 1;
    console.log(x);
    const y = yield 2;
    console.log(y);

}

let generator = generatorFunction();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// Passing Arguments in next() method

function *generatorFunction(i){
    console.log(i);
    const j = 5 * (yield (i*10));
    console.log(j);
    const k = yield (2*j/4);
    console.log(k);
    return (i + j + k);

}

var generator12 = generatorFunction(10);

console.log( generator.next(20) );
console.log( generator.next(10) );
console.log( generator.next(5) );

