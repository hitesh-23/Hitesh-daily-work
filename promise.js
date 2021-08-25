const ani = false;

const anime = new Promise((resolve, reject)=>
{
    if(ani === true)
    {
        const animed = {
            name : "naruto",
            category :"Action",
            episodes: 720
            
        };
        return resolve(animed);
    }
    else
    {
        resolve(new Error("Dont know what an anime"))
    }
});
anime.then((data)=>
{
    console.log(data)
})
.catch(err=>{
    console.log(err.message);
})

