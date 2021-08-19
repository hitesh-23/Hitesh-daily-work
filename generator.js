function* numGen(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    while(true){
        yield i++;
        yield (i++)
    }
}
const gen = numGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
