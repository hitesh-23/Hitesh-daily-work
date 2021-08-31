import React, { useState } from 'react';

const UseStateBasics = () => {

  const handleClick = () => {
    if(text === "Hello World")
    setText("Greetings! from webelight");
    else{
      setText("Hello World")
    }
  }




  const [text,setText] = useState("Hello World");
  return <React.Fragment>
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change Title</button>
</React.Fragment>
};

export default UseStateBasics;


// UseState is a function that returns an array..first thing is the state value and second thing is function that is going to handle the default value.

// Applicable to all react Hooks / custom hooks
//start with Use
//Components we use must start with Uppercase
//Hook needs to be in function or component body
//We can not call Hook conditionally
