// console.log("Hello World");


//Map method

//Map returns a new array.
//Doesnt change the size of an original array like filter.
//Uses the values from an original array while making a new array.



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

// const getAges =(banana)=> banana.age * 2;

// const ages = people.map(getAges);




// console.log(ages); 
//Returning a new Object


const newPeople = people.map((item)=>{
    return {
        firstName : item.name.toUpperCase(),
        designation : item.position.toLowerCase()
    }
})

// console.log(newPeople);

//Returning values on HTML


const name = people.map((oranges)=>`<h2>${oranges.name} , ${oranges.position}</h2>` );

const result =  document.querySelector('.result');

result.innerHTML = name.join('');