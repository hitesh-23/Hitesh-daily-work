//  callback function

const interns = [
    {
        name : "hitesh",
        join : "March",
        qualification : "ITUS",
        address : "Thaltej"
    },
    {
        name : "sahil",
        join : "February",
        qualification : "BE",
        address : "Ramol"
    },
    {
        name : "darshan",
        join : "May",
        qualification : "B.Tech",
        address : "Gurukul Road"
    },
    {
        name : "hiren",
        join : "December",
        qualification : "BSC IT",
        address : "Vastrapur"
    }];
    



let studentNames = [];

const getNames = (callback)=>{
    setTimeout(()=>{
    
    interns.forEach((student)=>{
          studentNames.push(student.name);
          
})
callback();
},1000)
   return studentNames;

}









const sortNames = () => {
    setTimeout (()=> {
    console.log(studentNames);
        studentNames.sort();
        console.log(studentNames);
        
        return studentNames;
    },2000);
}






getNames(sortNames);




