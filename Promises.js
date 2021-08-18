// let ranks = ['A', 'B', 'C'];

// for(let rank of ranks)
// {
//     console.log(rank);
// }

//There are two iteration protocols: iterable protocol and iterator protocol.


// let completed = true;

// let learnJS = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//     if (completed) {
//         resolve("I have completed learning JS.");
//     } else {
//         reject("I haven't completed learning JS yet.");
//     }
// },3*1000);
// });

//Promise is used to counter callback hell

// Allows us to write Asynchronous function in synchronous manner.

// PROMISE IS AN OBJECT THAT RETURNS A VALUE IN FUTURE AND NOT now.

//resolve and reject are two functions that are passed as parameters. 

//Pending Rejected and Fulfilled -- three states

// Initially it is in pending and then goes to either Rejected or Fulfilled.

//.then for resolve

//.catch for reject

// var name = "Ahmedabad";

// const prakash = new Promise((resolve,reject)=>{
//     if (name === "Ahmebad"){

//         resolve("Hitesh Chhatvani");}
//         else{

//          reject("There was an error")}


// })

// console.log(prakash);

// prakash.then((darshan) => console.log(darshan));

// prakash.catch((error)=>console.log(error));


// const value = 2;


// const promise = new Promise((resolve,reject)=>{

//     const random = Math.floor(Math.random() * 3);
//     console.log(random);

//     if(random === value){
//         resolve("You guessed it right"); 
//     }
//     else
//      reject("wrong number")


// })

// console.log(promise);

// promise.then((data) => console.log(data));

// promise.catch((error)=>console.log(error));

// const num1 =Math.floor(Math.random() * 3);

// console.log(num1);









// const value = 2;

// const pbhaiya = new Promise((resolve,reject)=>{
//     const random = Math.floor(Math.random() * 3);
//     if( random === value){
//         resolve("You guessed it absolutely right vroooo");
//     }
//     else{
//         reject("Ille Ille Ille Ille");
//     }
// });

// pbhaiya.then((data) => console.log(data));

// pbhaiya.catch((err)=>{console.log(err)});


const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    addColor(1000,".first","red")
    .then(()=>{addColor(3000,".second","blue")
    .then(()=>{addColor(2000,".third","green")})})
    .catch((err)=>{console.log(err);});
})

function addColor(time,selector,color){
    const element = document.querySelector(selector);
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                    element.style.color = color;
                    resolve();
            },time)
        }
        else{
            reject ("No selections were made");
        }
    })
}




