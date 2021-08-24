

const interns = [
{
    name : "Hitesh",
    join : "March",
    qualification : "ITUS",
    address : "Junagadh"
},
{
    name : "Sahil",
    join : "February",
    qualification : "BE",
    address : "Ramol"
},
{
    name : "Darshan",
    join : "May",
    qualification : "B.Tech",
    address : "Gurukul Road"
},
{
    name : "Hiren",
    join : "last week",
    qualification : "double PhD",
    address : "Mars"
}];


const postNames = () => {

    setTimeout(()=>{

    let output = "";
    interns.forEach((employee)=>{
        output += `<li>${employee.name} has persued ${employee.qualification}</li>`
    });
    document.body.innerHTML = output;
},2000);
}



const addNewName = (entry,callback) =>{
    setTimeout(()=>{

        interns.push(entry);
        callback();
    },3500);
}




// postNames();

addNewName({name : "Jay",join : "Barso se",qualification : "MCABCA", address : "Sattadhar"},postNames);

