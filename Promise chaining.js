

// prom1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>resolve(1),1000);
// }).then((result)=>{
//     console.log(result);
//     return result * 2 ;
// }).then ((result)=>{
//     console.log(result);
//     return result * 2 ;
// }).then ((result)=>{
//     console.log(result);
//     return result * 2 ;
// })



prom2 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        let name = '';
        name = prompt("Enter your name");
        resolve(name)
    },2000)
})
.then(name=>{
            alert(`Hello ${name} What will you like to order today`);
            return (name);
        }).then((name)=>{
            let flavor = prompt("Choose from the range of flavors");
            alert(`Thank you for your order ${name} and your ${flavor} flavoured ice cream will be served soon. `)
 })
   