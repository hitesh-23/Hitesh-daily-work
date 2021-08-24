

const posts = [
    {
        title : "First Post",
        body : "This is the post number one"
    },
    {
        title : "Second Post",
        body : "This is the post number two"
    },
    {
        title : "Third Post",
        body : "This is the post number three"
    }
];



const getPostTitle=()=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach(element => {
                output += `<li>${element.title}</li>` 
            });
            document.body.innerHTML = output;
        },2000);
}


const createNewPost = (entry,callback) =>{
    setTimeout(()=>{
        posts.push(entry)
        callback();
    },3000);
} 



// getPostTitle(posts);
createNewPost({title : "Fourth Post", body: "This is the fourth post"},getPostTitle);




