"use strict";
// Typescript 101 - why use typescript?
// superset to Javascript
// Allows us to use strict types : number, string, boolean -- can not change them later
// Less error prone code
// Javascript support dynamic types of varible - can change the types
// Support modern features
// Extra Features ( generics, interfaces, tuples etc)
exports.__esModule = true;
var message = "Welcome Back";
// console.log(message);
// let x =10;
// const y = 20;
// let sum;
// const title : "codeEvaluation"
var isBegginer = true;
var total = 20;
var name = "My name is Hitesh and age is " + total;
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Null and undefined can be assigned to string, number and boolean types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Hitesh", 22];
// using tuples..number of elements are fixed in an array
//Here one string and one number can be stored in an array only
// order of the values has to match the declaration of types
// Enum types 
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 5] = "Red";
    Colors[Colors["Green"] = 6] = "Green";
    Colors[Colors["Blue"] = 7] = "Blue";
})(Colors || (Colors = {}));
// let c : Colors = Colors.Green;
// console.log(c);
// Enum values begin with 0
// Any type 
// third party / dynamic
var randomValue = 10;
randomValue = true;
randomValue = "Hitesh";
// any type is most capable type...takes every possible type for a variable
// Unknown
var anotherValue = 10;
// console.log(anotherValue.name);
// anotherValue();
// (anotherValue as string).toUpperCase();
// Typescript assumes we have made necessary check
// Type assertion is same as type coercing in JS
// Type Inference
var a;
a = 10;
a = true;
var b = 20;
b = true;
var multitype;
multitype = 20;
multitype = true;
// Functions in Typescript
var add = function (num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
};
add(5, 10);
add(5);
// add(5,"10");
// optional parameters -- adding question mark
// Default parameters -- set values instead of an undefined
var add1 = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
};
add1(5);
var fullName = function (person) {
    console.log(person.firstName + " " + person.lastName);
};
var p = {
    firstName: "Hitesh"
};
fullName(p);
