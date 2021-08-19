// Reduce - most powerful method on Array

// Iterates and calls a callback function

// reduces to a single value - number array and object

// 1st parameter ('acc') - total of all calculations
//2nd parameter ('curr) - current Iteration/Value





const staff = [
    {name : "Hitesh", age : 24, position : "developer", salary : 100},
    {name : "Uday", age : 25, position : "designer", salary : 300},
    {name : "Vismay", age : 28, position : "leader", salary : 600},
    {name : "Rohit", age : 22, position : "intern", salary :50}
];


const dailyTotal = staff.reduce((total,person)=>{
    console.log(total);
    // console.log(person.salary);
    total = total + person.salary;
    return total;
},2000);

console.log(dailyTotal);


// Reduce Object Example

const cart = [
    {
        title : "Nike Air Zoom Pegasus",
        price : 299.99,
        amount : 1
    },{
        title : "Reebok Delta",
        price : 199.99,
        amount : 2
    },{
        title : "Puma pengea",
        price : 249.99,
        amount : 4
    },{
        title : "Asics Sneakers",
        price : 399.99,
        amount : 3
    }
]



let {totalItems,cartTotal} = cart.reduce((total,item)=>{
    const {amount,price} = item;
    total.totalItems += amount;

    // count sum 
    total.cartTotal += amount * price;



    return total; 
},{
    totalItems : 0,
    cartTotal : 0
}) 

console.log(totalItems,cartTotal.toFixed(2));