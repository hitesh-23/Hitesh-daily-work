// Logical operators

// || (OR)
// && (AND)
// ! (NOT)
// ?? (Nullish Coalescing)



let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); 
}

// OR "||" finds the first truthy value



let hourq = 12;
let minute = 30;

if (hourq == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

// AND “&&” finds the first falsy value

// Precedence of AND && is higher than OR ||

// So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).




// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
// console.log(a + b); 
// b is not accessible outside scope


// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

greet();