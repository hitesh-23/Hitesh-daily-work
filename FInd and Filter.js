// Filter and Find method

//Filter - Returns a new array, Can manipulate the size of new array (unlike Map), returns based on conditon.

// With map we always get same size..with filter size can be changed.

const people = [ {
    name : "Hitesh",
    age : 24,
    position : "intern"
},
{
    name : "Miraj",
    age : 34,
    position : "Manager"
},
{
    name : "Dhruvin",
    age : 23,
    position : "admin"
},
{
    name : "Pathik",
    age : 22,
    position : "Dev-ops"
}
];


const juniors = people.filter((mango)=>{
//    if(mango.age < 30){
//        return mango;
//    }
    // return mango.age <30;

    // return mango.position === "intern"

    return mango.name ==="Pathik";
}); 

// console.log(juniors);

const seniors = people.filter((apple)=>{
    return apple.age > 40;
})

// console.log(seniors);

//Returns an empty array if none of the items match the condition.

//Find method....
//Returns Single instance(object), returns first match, if no match - undefined.

const employee = people.find((rose)=> {
    return rose.name === "Hite"});

console.log(employee);


const fruits = ["Oranges","Strawberry","Lemon","Guvavas"];

// console.log(fruits);

const fruit1 = fruits.find((gheta)=>{ return gheta === "Lemon"});

// console.log(fruit1);

// iF No match
// Gives Undefined

//Multiple Matches == Gives first match