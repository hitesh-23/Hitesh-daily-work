// Fetch API

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const sendHttpRequest = (method, url, data)=>{

    fetch(url).then(response => {
        console.log(response);
        return response.json();
    }).then(responseData => {
        console.log(responseData);
    });


};

const getData =()=>{
    const url = 'https://reqres.in/api/users';

    fetch(url).then(response => {
        return response.json();
    }).then(responseData => {
        console.log(responseData);
    });
};

const sendData = () =>{


    const url = 'https://reqres.in/api/users';

    fetch(url).then(response => {
        return response.json();
    }).then(responseData => {
        console.log(responseData);
    });
}

getBtn.addEventListener('click',getData);
postBtn.addEventListener('click',sendData);

// Fetch API

// it is used to get/store data to local/remote file or database.

// similar to XMLHTTP request..based on Promises

// Fetch returns a new Promise










// fetch ('demo.json')
// .then(res => res.json()).
// then(data => console.log(data));

// fetch('https://unsplash.it/1000/1000').
// then(res => res.blob())
// .then(blob => {
//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(blob);
//     document.querySelector('body').appendChild(img);
// });