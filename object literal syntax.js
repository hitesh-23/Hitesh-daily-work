

var name = "Darshan";
var surname = "Patel";

const obj1 = {
    name,
    surname
}

console.log(obj1);

// Internally, when a property of an object literal only has a name, the JavaScript engine searches for a variable with the same name in the surrounding scope. If the JavaScript engine can find one, it assigns the property the value of the variable.

//Key-Value