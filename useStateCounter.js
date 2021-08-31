import React, { useState } from 'react';

const UseStateCounter = () => {

  const [number,setNumber] = useState(0);

  const increamentFn =()=>{
    setNumber(number + 1);
  }

  const decrementFn = () => {
    setNumber(number-1);

  }



  return <>
  <h1>{number}</h1>
  <button type= "button" class="btn" onClick={increamentFn}>+</button>
  <button type= "button" class="btn" onClick={decrementFn}>-</button>
  </>
};

export default UseStateCounter;


// Follow up : Typescript tutorials, React UseState hook with Array,Object and numbers  
// Link 