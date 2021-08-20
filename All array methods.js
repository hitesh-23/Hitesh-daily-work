const companies = [
{name:"Company One", category : "Finance", start : 1981, end : 2003},
{name:"Company Two", category : "Retail", start :1992 , end : 2006 },
{name:"Company Three", category : "Auto", start : 1999, end : 2007},
{name:"Company Four", category : "Retail", start :1989 , end :2010 },
{name:"Company Five", category : "Technology", start :2009,end:2014},
{name:"Company Six", category : "Finance", start : 1987, end : 2010},
{name:"Company Seven", category : "Auto", start : 1986, end :1996 },
{name:"Company Eight", category : "Retail", start : 1903, end : 1989 },
]



const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//For Each
//Filter
//Map
//Sort
//Reduce

// for (let i = 0; i < comapnies.length; i++){
//     console.log(comapnies[i].name);
// }

// comapnies.forEach(function(company){

// console.log(company.name);

// })


// let adults = [];

// for (let i =0;i<ages.length;i++){
//     if (ages[i]>=21){
//         adults.push(ages[i])
//     }
// }

// console.log(adults);


//#1

// const canDrink = ages.filter((age)=>age>=21);

// console.log(canDrink);

//#2
//FIlter retail comapnies

// const retailCompanies = comapnies.filter((name)=>name.category === "Retail");

// console.log(retailCompanies);

//#3 Get 80s comapnies

// const eightysComapnies = comapnies.filter(year=>(year.start >= 1980 && year.start <+ 1990));

//     console.log(eightysComapnies);

// #4 companies lasted more than 10 years

// const decadeLong = comapnies.filter(years=>(years.end - years.start >= 10));


// console.log(decadeLong);

//MAp
 //#1 create array of company names 


//  const companyNames = comapnies.map((company)=>{
//      return `${company.name} [${company.start} - ${company.end}]`
//  })

//  console.log(companyNames);

//#2 const ages square root

const agesMath = ages.map((number)=>{
    return Math.sqrt(number);
})
.map(number=>{
    return number * 2;
})

// console.log(agesMath);


// Sort 

// const sortedCompanies = comapnies.sort((c1,c2)=>{
//     if (c1.start > c2.start){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// console.log(sortedCompanies);

//Sort numbers in ascending order

const sortAges = ages.sort((a,b)=>a-b);

// console.log(sortAges);

//Sort numbers in decending order

const sortAges1 = ages.sort((a,b)=>b-a);

// console.log(sortAges);

//Reduce

// Using FOr Loop
// let agesum = 0;

// for (let i=0;i<ages.length;i++){
//     agesum += ages[i];
// }



var agesum = ages.reduce((total,age)=>total += age,0);

//  console.log(agesum);


// TOtal years of each company

const totalYears =  companies.reduce((total,company)=>{
    return total += (company.end - company.start);
},0);

console.log(totalYears);

//Combined Methods

ageByTwo = ages.map(age=>age*2).filter(age => age >= 41).sort((a,b)=>a-b)

console.log(ageByTwo)