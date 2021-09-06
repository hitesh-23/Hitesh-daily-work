import React, { ChangeEvent, FC, useState } from 'react';
import { IUserdata } from './Interfaces';


const App: FC = () => {


  const [userName, setUserName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [userData, setUserData] = useState<IUserdata[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {

    e.preventDefault();

    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
    else {
      setEmail(e.target.value);
    }



  }



  const submitForm = (): void => {

    console.log("Hello world")

  

    const newEntry = { userName, email };

    setUserData([...userData, newEntry]);

    console.log(userData);

  }


  return (
    <div className="App">

      <form>


        <label htmlFor="userName" > Username : </label>
        <input type="text" name="userName" value={userName} onChange={handleChange}></input>
        <br></br>
        <br></br>
        <label htmlFor="email"> Email : </label>
        <input type="text" name="email" value={email} onChange={handleChange}></input>
        <br></br>
        <br></br>
        <button onClick={submitForm}>Submit</button>

      </form>
    </div>
  );
}

export default App;
