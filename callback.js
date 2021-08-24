


// Callback 
// Promises
// Promise chaining
// Promise all
// converting to promises 
// Async Await Examples

//Asynchronous - doesnt wait for the one request to end. simultaneously works on another requests too..

// Callback

const posts = [
    {
        title : "Post 1",
        body : "This is the Post one"
    },
    {
        title : "Post 2",
        body : "This is the Second post"
    },
    {
        title : "Post 3",
        body : "This is the Third post"
    },
    {
        title : "Post 4",
        body : "This is the fourth post"
    }
];

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post)=>
        {
            output += `<li>${post.title}</li>`;
            
        });
        document.body.innerHTML = output;

            console.log()    
    },2000);
}


const createPosts = (post, callback) => {
    setTimeout(()=>{
        posts.push(post);
        callback();
    },3000);

}



createPosts({title : "Jayyy", body : "This is the fifth post"},getPosts);