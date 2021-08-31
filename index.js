// Example 1 in Typescript



const increment = (counterVal) => {
    return counterVal + 1
}

const counter = increment(10);

console.log(counter);

// Example 2 using Javascript

let programmingLanguages = ["Java","Typescript","Python"];
programmingLanguages.push("golang");

console.log(programmingLanguages);

// Example 3 Using Javascript

const fetchData = (apiUrl)=>{
    return fetch(apiUrl).then((response)=>response.json());
};

const data = fetchData("myAwesomeApi.com/data/subscribe");

console.log(data.name);
console.log(data.email);
console.log(data.age);
console.log(data.isMarried);


// Example 4 Using Javascript

const serveCheese = (cheeseType, servings)=>{
    console.log(`You want ${servings} of ${cheeseType}`);
};


