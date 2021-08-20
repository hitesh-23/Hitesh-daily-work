var testObject = { 'one': 1, 'two': 2, 'three': 3 };

localStorage.setItem('testObject', JSON.stringify(testObject));


var retrievedObject = localStorage.getItem('testObject');

console.log(`retrievedObject : `,JSON.parse(retrievedObject));





// Array 


var array123 = ["Hitesh","Darshan","Sahil","Jay","Hiten",true,false,undefined,null];

localStorage.setItem('array123',JSON.stringify(array123));

var getFromStorage = localStorage.getItem('array123');

console.log(`answer is : `,JSON.parse(getFromStorage));