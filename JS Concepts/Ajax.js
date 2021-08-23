// HTTP Requests from JavaScript
// HTTP is communication between web servers and Clients.
// HTTP is stateless -- it is completely independent

// https s- secure encrypted

//  Data can be sent using the HTTP POST method and received using the HTTP GET method. 


// GET - retireves data from the server
// POST - submit data to the server
//PUT - update data already on the server
// DELETE - deletes data from the server

// const Http = new XMLHttpRequest();

// const url = 'https://jsonplaceholder.typicode.com/posts';

// Http.open("GET", url);

// Http.send();

// Http.onreadystatechange = (event)=>{
//     console.log(Http.responseText)
// }


//XML http
// console.log(window);

let xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts"); // make a request
 //2 arguments

 xhr.send(); // to send a request

 xhr.onload =()=>{
     if(xhr.status === 200){
    //  document.write(`<pre>${xhr.response}</pre>`);
    console.log(xhr.response);
} else {
    console.log(`Error ${xhr.status}`)
}
}

 // 200 success
 //404 Error