const users = 
[
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
    }
]

const articles = [

        {userId : 1, articles : ["one","two","Three"]},
        {userId : 2, articles : ["four","FIve"]},
        {userId : 3, articles : ["six","seven","Eight","Nine"]},
        {userId : 4, articles : ["Ten","Eleven"]}
]


const getUserName=(userInput)=> {
    return new Promise((resolve,reject)=>{
        const userName = users.find((user)=>{
            user.name === userInput
        })
        console.log(userName);
        if(userName)
        {
            return resolve (user)
        } 
        else
        {
            return reject(`No such User exists with the name ${userInput}`)
        }
    })
}


const getArticles = (userID)=>{
    return new Promise ((resolve,reject)=>{
        const userArticles = articles.find((id)=>{
            id === articles.userId
        })
        if(userArticles){
            return resolve(userArticles.articles)
        }
        else {
            reject ('Wrong Id');
        }
    })

}

getUserName("Hitesh").then(user => getArticles(user.id))




// const getUserName = (name)=>{
//     return new Promise((resolve,reject)=>{
       
//         const user = users.find( element => element.user === name )
//         console.log(user);
                
//         })
        
//     }

// getUserName("Hiren");

// const user = users.find((user)=>user.name === name )