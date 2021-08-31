import React, { useState } from 'react';

const UseStateObject = () => {

const ChangeMessage = () => {
  setPerson({...person, message : "Hello World"});
}



  const [person, setPerson] = useState({
    name : "Hitesh",
    age : 24,
    message : "Random Message",
  })
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button type="button" class="btn" onClick={ChangeMessage}>
    Change Message
  </button>


  </>
  
  ;
};

export default UseStateObject;
