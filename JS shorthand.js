let finalName;   
let name = getName();   
if(name !== null && name !== undefined && name !== '') {  
    finalName = name;   
} else {  
    finalName = 'Hitesh'  
}

// Shorthand  
let finalName = getName() || 'Hitesh';

//ternary operator
let points = 70;   
let result;   
if(marks >= 50){  
    result = 'Pass';   
}else{  
    result = 'Fail';   
}

//shorthand
let points = 70;
let result = marks >= 50 ? "Pass" : "Fail"