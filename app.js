// Async and Await

// It allows us to write Asynchronous function in synchronous fashion.

// Async will be present always returns a promise

// Await waits till promise is settled

// Error handling - try/catch block.


// const example = async()=>{
//     return " HEllo There"
// }

// async function someFunc(){
//     const result = await example()
//     console.log(result);
//     console.log("Hello Worrld");
// }

// // console.log(example());
// someFunc();

const users = [
    {id : 1, name : "Hitesh"},
    {id : 2, name : "Vismay"},
    {id : 3, name : "Uday"},
]


const articles = [
    {userId : 1, articles : ["One","Two","Three"]},
    {userId : 2, articles : ["four","five"]},
    {userId : 3, articles : ["Six","Seven","Eight","Nine"]}

]


const getData = async ()=>{
    try{
    const user = await getUser("Hitesh");
    if(user) {
        const articles = await getArticles(user.id)
        console.log(articles)
    }
}
    catch (error) {
        console.log(error)
    }
}

getData();


// getUser("Vismay").
// then((user)=>getArticles(user.id)).
// then((articles)=> console.log(articles)).
// catch((err)=>console.log(err))

function getUser(name) {
    return new Promise ((resolve,reject)=>{
        const user =  users.find((user)=>user.name === name)

        if (user){
            return resolve(user)
        } else {
            reject ("No such User Exists In Database")
        }

    })
}

function getArticles(userId) {
    return new Promise ((resolve, reject)=>{
        const userArticles = articles.find((user)=>user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }
        else {
            reject("Wrong ID")
        }
    })
}