// const posts = [
//     {
//         title : "Post 1",
//         body : "This is the Post one"
//     },
//     {
//         title : "Post 2",
//         body : "This is the Second post"
//     },
//     {
//         title : "Post 3",
//         body : "This is the Third post"
//     },
//     {
//         title : "Post 4",
//         body : "This is the fourth post"
//     }
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output = "";
//         posts.forEach((post)=>{
//             output += `<li>${post.title}</li>`;
            
//         });
//         document.body.innerHTML = output;

//             console.log()    
//     },1000);
// }


// const createPosts = (newpost) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(newpost);
//             const error = true;
//             if(!error)
//             {
//                 resolve();
//             }
//             else{
//                 reject("Error : Something went wrong");
//             }
//         },2000);
//     });
  
// }



// createPosts({title : "post5withPromise", body : "This is the post number fivee"}).then(getPosts).catch(err => console.log(err));




const prom1 = new Promise((resolve,reject)=>{

    if(true){
        resolve();
    }
     else{   
         reject("Error");
     }



})

console.log(prom1);


prom1.then((data)=>console.log(data)).catch((err)=>{console.log(err);});