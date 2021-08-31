// Examples 1 using Typescript



var myName : string = "Hitesh";

const userAge : number = 32;

const incrementNo = (counterValue : number) => {
    return counterValue + 1;
}

const counterVal : number = incrementNo(12);

// Different types = boolean, number, string, undefined, null


// Example 2 using Typescript


let programmingLanguages1 : string[] = ["Java","Typescript","Python"];
programmingLanguages.push("golang");

console.log(programmingLanguages);

// Example 3 using Typescript

interface Iuser {
    name : string;
    email : string;
    age : number;
    isMarried : boolean;
}



const fetchData1 = (apiUrl:string): Promise<Iuser> =>{
    return fetch(apiUrl)
    .then((response)=>response.json());
};

const data1  = fetchData1("myAwesomeApi.com/data/subscribe");

console.log(data1.name);
console.log(data1.email);
console.log(data1.age);
console.log(data1.isMarried);

// With Object in Typescript

interface Iprogramming {
    nameOf : string;
    awesome : boolean;
    ageOf ?: number;
}

const typeScript : Iprogramming = {
    nameOf : "Language",
    awesome : true
}


const JavaScriptLan : Iprogramming = {
    nameOf : "Language",
    awesome : false,
    ageOf : 23
}

//Example 4 in TS


enum Cheese {
    cheddar = "cheddar",
    gouda = "gouda",
    goat = "goat",
    blueMould = "blueMould"
}





const serveCheese1 = (cheeseType : Cheese, servings : number) : void =>{
    console.log(`You want ${servings} of ${cheeseType}`);
};

serveCheese1("american",4); // Will give an error as american is not a type that is defined in enum