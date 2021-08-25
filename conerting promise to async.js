Async Await
Promises to Async Await
callback examples
Generators and Iterators



Async functions are normal JS functions except they RETURN A PROMISE.



const resolveAfter25Seconds = () =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve('resolved');
        },2000);
    });
}

async function asyncCall(){
    console.log("calling");
    const result = await resolveAfter25Seconds();
    console.log(result);
}


asyncCall();

const printAfterTwoSeconds = ()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("This Value is being printed after first 2 seconds");
        },2000);
    });
}


const asyncFunction = async ()=>{                          //async is put after the = sign and before the parentheses.
    console.log("It will run async function first");
    const newStr = await "Hitesh";
    const result = await printAfterTwoSeconds();
    const newStr12 = await "Webelight";
    console.log(newStr + result + newStr12);
}

asyncFunction();



Using Callback


arrNames = ["Hitesh","Darshan","Sahil","Jay","Miraj","Jayesh"];

let newArr = [];
let name = "";

const lowerCaseTheNames = (callback)=>{
    setTimeout(()=>{
    arrNames.forEach(element => {
        let name = element.toLowerCase();
        newArr.push(name);
        
    });
    console.log(newArr);
    callback();
},1000)
}

const sortTheNames = ()=>{
    setTimeout(()=>{
        newArr.sort();
    console.log(newArr);
},2000)

}
lowerCaseTheNames(sortTheNames);


USing the same function of the callback with Async Await

arrNames = ["Hitesh","DaRsHan","SaHil","Jay","Miraj","Jayesh"];

let newArr = [];

const sortTheNames = ()=>{
    return new Promise(resolve=>{
    setTimeout(()=>{
        newArr.sort();
    resolve(newArr);
},1000)
})

}
const lowerCaseTheNames = async ()=>{
   
    arrNames.forEach(element => {
        let name = element.toLowerCase();
        newArr.push(name);
    });
    console.log(newArr);
        const sort = await sortTheNames();
        console.log(sort);
}

lowerCaseTheNames();


