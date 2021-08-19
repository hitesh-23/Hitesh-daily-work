// For Each 

// The forEach method passes a callback function for each element of an array together with the following parameters:

// Current Value (required) - The value of the current array element
// Index (optional) - The current element's index number
// Array (optional) - The array object to which the current element belongs



const players = [10,8,4,18,23,12,20];



newPlayers = players.forEach((num)=>{



      return num*2;


 })

// console.log(newPlayers);


players.forEach((number)=>{
    console.log(number);
})


const obj1 = {
    name : "Hitesh",
    rank : "center-mid",
    location : "Gandhinagar",
    favplayer : "Bruno Fernandes"
}

Object.values

Object.values(obj1).forEach(val => {
    return console.log(val);
})

Object.keys()

Object.keys(obj1).forEach(key=>{
    console.log(key, obj1[key]);
});

