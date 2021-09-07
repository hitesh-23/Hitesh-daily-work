import React, { useState, FC, ChangeEvent } from 'react';
import { IUserdata } from '../Interfaces';
import Task from "../components/Task";






const App : FC = () => {


  const [userName, setUserName] = useState<string>("");

  const[email, setEmail] = useState<string>("");

  const [task, setTask] = useState<string>("");

  const [userData, setUserData] = useState<IUserdata[]>([]);





  const handleChange = (e:ChangeEvent<HTMLInputElement>) : void => {

          //  e.preventDefault();

    if(e.target.name === "userName"){
      setUserName(e.target.value);
    }
    else if(e.target.name === "task"){
      setTask(e.target.value);
    }
    else
    {
        setEmail(e.target.value);
    }

  }

      const submitvalues = (e : any) : void =>{

        e.preventDefault();

  

      const newEntry = { userName, email, task, id: new Date().getTime().toString() }

      setUserData([...userData, newEntry]);

      setUserName("");
      setEmail("");
      setTask("");


  }

  const removeEntry = (id:string)=>{
    setUserData(userData.filter((entry)=>{
      return entry.id !== id;
    }))


  }

  const updateEntry = (id : string)=>{
    
    let entryToUpdate = userData.find((entry)=>{
      return entry.id === id;
    })
    setUserName(entryToUpdate?.userName || "");
    setEmail(entryToUpdate?.email || "");
    setTask(entryToUpdate?.task || "");
    removeEntry(id);


  }

  return (
    <main className="App">
     <div className="header">
       <div className = "form">
         <form className="forms">
          <input type="text" name="userName" placeholder="Enter username" value={userName} onChange={handleChange} ></input>
          <br></br>
           <br></br>
          <input type="email" name="email" placeholder="Email"  value={email} onChange={handleChange}></input>
          <br></br>
           <br></br>
          <input type="text" name="task" placeholder="task" value={task} onChange={handleChange}></input>
          <br></br>
          <br></br>
          <button onClick = {submitvalues}>Submit</button>

         </form>
       </div>


      </div>
      <div className = "todolist">
        {
          userData.map((entry)=>{
            return<Task entry={entry} removeEntry={removeEntry} updateEntry={updateEntry}/>
          })
        }


      </div>

    </main>
  );
}

export default App;