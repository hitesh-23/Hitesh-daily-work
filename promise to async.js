// Async allows us to write Asynchronous code in synchronous fashion.

// Await will always wait till promise is sattled
// Async must be present and Async function will always returns a Promise


// const example = async ()=>{
// return "Hello There"
// }


// // console.log(example());


// async function someFunction(){
//     const result = await example();
//     console.log(result);

// }


// someFunction();




const users = [
    {
    id : 1, name : "Hitesh"
    },
    {
        id : 2, name : "Darshan"
    },
    {
        id : 3, name : "Sahil"
    },
    {
        id : 4, name : "Hiren"
    }]

    const articles = [

        {userId : 1, articles : ["one","two","Three"]},
        {userId : 2, articles : ["four","FIve"]},
        {userId : 3, articles : ["six","seven","Eight","Nine"]},
        {userId : 4, articles : ["Ten","Eleven"]}
    ]




    function getUser (name){
        return new Promise ((resolve,reject)=>{
            const user = users.find((user)=>user.name === name )
            if(user) {
                return resolve(user)
            }else{
                reject(`No Such User Exists with name : ${name}`)
            }
        })
    }

    function getArticles(userId) {
        return new Promise ((resolve,reject)=>{
            const userArticles = articles.find((user)=> user.userId === userId)
            if(userArticles) {
                return resolve(userArticles.articles)
            }
            else 
            {
                reject('Wrong Id')
            }
        })
    }


    // getUser("Darshan").then((user)=>getArticles(user.id)).then((articles)=>{console.log(articles)})
    // .catch(err=>console.log(err))


    const getData = async () =>{
        try{
        const user = await getUser("Hitesh");
        // if(user){
            const articles = await getArticles(user.id)
            console.log(articles);
        // }
    } catch (error) {


        console.log(error);




    }

    }
    getData();