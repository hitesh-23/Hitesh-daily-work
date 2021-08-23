// Javascript Dates...
//JavaScript Date objects represent a single moment in time in a platform-independent format. 

// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

// console.log("Hello..");

let newdate = new Date();

 console.log(newdate); //Mon Aug 23 2021 10:35:39 GMT+0530 (India Standard Time)

 let againdate = new Date().toLocaleDateString();
 console.log(againdate); //23/08/2021

let d1 = newdate.getDate();
console.log(d1); //23

let d2 = newdate.getDay();
console.log(d2); //1 coz its monday

let d3 = newdate.getFullYear();
console.log(d3); //2021

let d4 = newdate.getHours();
console.log(d4); // 10

let d5 = newdate.getMilliseconds();
console.log(d5); // 103

let d6 = newdate.getMinutes();
console.log(d6); //37

let d7 = newdate.getMonth();
console.log(d7); 

let d8 = newdate.getSeconds();
console.log(d8); 

let d9 = newdate.getTimezoneOffset();
console.log(d9); 

let d10 = newdate.getUTCDay();
console.log(d10); 

let d11 = newdate.getUTCHours();
console.log(d11); 

let d12 = newdate.toLocaleDateString();
console.log(d12); 

console.log(new Date().setMonth());


console.log(new Date().toGMTString());


