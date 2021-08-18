// destructing assignment that allows you to destructure 
// properties of an object or elements of an array into individual variables.

// array destructuring

// function getScores() {
//     return [70,80,90,100];
// }

// let scores = getScores();

// let [x, y, z] = getScores();

// console.log(`${x},${y},${z}`);

// let [x, y,...args] = getScores();

// console.log(args);

// // Nested array destructuring

// function getProfile() {
//     return [
//         'John',
//         "Doe",
//         ['Red','Green','Blue']
//     ];
// }

// let [ firstName, lastName, [color1,color2,color3]] = getProfile();

// console.log(color1,color2,color3);

// 1) Swapping variables

// let a = 10,
// b = 20;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

// 2) FUnctions that returns multiple Values

// function stat(a,b) {
//     return [ a+b, a+b/2, a-b ]
// }

// let[sum,average,difference] = stat(20,10);

// console.log(`${sum}, ${average}, ${difference}`);



// const fruits = ["oranges","banana","Lemon"];

// const friends = ["John","Jani","Janardan"];

// const fruit1 = fruits[0];

// const fruit2 = fruits[1];

// const fruit3 = fruits[2];



// const [john, ,janardan,] = friends;

// console.log(john,janardan);



// let aa = 20;
// let bb = 40;

// [aa,bb] = [bb,aa];

// console.log(`${aa} and ${bb}`);

//Object Destructuring

const Hitesh = {
    first : "Hitesh",
    middle : "Nandlal",
    last: "Chhatvani",
    age : 24,
    siblings : { sister : "Malvika",
            brother : "Sunny"
}
};

const {first,middle,last,age,zip} = Hitesh;

console.log(first, middle, last, age, zip);