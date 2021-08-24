


// const names = ["hitesh","darshan","sahil","jay","miraj","dhruvin","hiren"]

// const reArrange = ()=>{
//     setTimeout(()=>{
//         let out = '';
//         names.forEach((name)=>{
//             out += `<li> ${name} </li>`;
//         })
//         document.body.innerHTML = out;
//     },2000)
// }

// const addInArray =(newname,callback) => {

//         names.push(newname);
//         callback();

// }; 


// // reArrange();

// addInArray("Bhagwan",reArrange);





function greeting(name) {
    alert('Hello '+ name);
}

function processUserInput (callback) {
    var name = prompt('please enter your name');
    callback(name);
}

processUserInput(greeting);