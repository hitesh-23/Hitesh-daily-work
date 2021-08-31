// Typescript 101 - why use typescript?
// superset to Javascript
// Allows us to use strict types : number, string, boolean -- can not change them later
// Less error prone code
// Javascript support dynamic types of varible - can change the types
// Support modern features
// Extra Features ( generics, interfaces, tuples etc)


export {}

let message = "Welcome Back";
// console.log(message);

// let x =10;
// const y = 20;


// let sum;
// const title : "codeEvaluation"

let isBegginer : boolean = true;
let total : number = 20;
let name : string = `My name is Hitesh and age is ${total}`;

let n : null = null;
let u : undefined = undefined;

let isNew : boolean = null;
let myName : string = undefined;
// Null and undefined can be assigned to string, number and boolean types

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

let person1 : [string,number] = ["Hitesh",22];


// using tuples..number of elements are fixed in an array
//Here one string and one number can be stored in an array only
// order of the values has to match the declaration of types


// Enum types 

enum Colors { Red = 5, Green , Blue}

// let c : Colors = Colors.Green;

// console.log(c);

// Enum values begin with 0

// Any type 

// third party / dynamic

let randomValue : any = 10;
randomValue = true;
randomValue = "Hitesh";

// any type is most capable type...takes every possible type for a variable


// Unknown

let anotherValue :  unknown = 10;

// console.log(anotherValue.name);
// anotherValue();
// (anotherValue as string).toUpperCase();
// Typescript assumes we have made necessary check

// Type assertion is same as type coercing in JS








// Type Inference

let a;
a = 10;
a = true;

let b :  number | boolean  = 20;
b = true;


let multitype : number | boolean ;
multitype = 20;
multitype = true;

// Functions in Typescript

const add = (num1 : number,num2 ?: number) : number => {
    if(num2){
        return num1 + num2;
    }
    return num1;
}

add(5,10);
add(5);

// add(5,"10");

// optional parameters -- adding question mark

// Default parameters -- set values instead of an undefined



const add1 = (num1 : number,num2 : number = 10) : number => {
    if(num2){
        return num1 + num2;
    }
    return num1;
}

add1(5);

// Interfaces

// possible to specify an object as type using interface


interface Iperson {
    firstName : string;
    lastName ?: string;
}





const fullName =(person: Iperson) =>
{
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName : "Hitesh",
};

fullName(p);

// Classes and Access Modifiers

class Employee {
    employeeName
} 