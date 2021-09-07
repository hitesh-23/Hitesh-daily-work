import React, { ChangeEvent, FC, useState} from 'react';
import TodoTask from './TodoTask';
import './style.css';

import './App.css';

import { ITask } from './Interfaces';


const App : FC = ()=> {

const [userName, setUserName] = useState<string>(""); 

  const [email, setEmail] = useState<string>("");

  const [task, setTask] = useState<string>("");

  const [userData, setUserData] = useState<ITask[]>([]);

  const handleSubmit = (e:ChangeEvent<HTMLInputElement>) : void => {


   if(e.target.name === "username") {
      setUserName(e.target.value);
    }
    else if(e.target.name === "email"){
      setEmail(e.target.value);
    }
    else {
      setTask(e.target.value);
    }
  }

    const submitValues = (e:any) :void=>{


      if (userName && email && task)
      {

         e.preventDefault();
    const entry = { userName, email, task , id : new Date().getTime().toString()};

    setUserData([...userData, entry]);

    setTask("");
    setEmail("");
    setUserName("");


      }
      else {

        alert("Please fill all the fields");
     
      }

  }

   const removeEntry = (id : string):void =>{

   let conf = prompt("Are you sure you want to delete this entry?")
   if(conf){
    setUserData(userData.filter((entry)=>{
      return entry.id !== id;

    }))
  }
  }

  const updateEntry = (id : string) : void =>{

    const entryToUpdate = userData.find((entry:ITask)=>{
      return entry.id === id
    })
    setEmail(entryToUpdate?.email || "");
    setTask(entryToUpdate?.task || "");
    setUserName(entryToUpdate?.userName || "");
    removeEntry(entryToUpdate?.id || "");

  }


 





  return (
    <main className="App">
      <div className="header">
        <form className="form">
          <div className="inputContainer">
        <input type="text" placeholder="Enter Name" className="inputs" name="username" value={userName} onChange={handleSubmit} ></input>
        <br></br>
          <br></br>
          <input type="email" placeholder="Enter Email" className="inputs" name="email" value={email} onChange = {handleSubmit}></input>
          <br></br>
          <br></br>
          <input type="text" placeholder="Enter Task" className="inputs" name="task" value={task} onChange= {handleSubmit} ></input>
          <br></br>
          <br></br>
          </div>
          <button className="submit" onClick={submitValues}>Submit</button>
          </form>


      </div>
      
    <div className="todolist">
      {
        userData.map((entry : ITask , key : number)=>{
          return <TodoTask key={key} entry={entry} removeEntry = {removeEntry} updateEntry = {updateEntry} />
        })
      }


      </div>
      
    </main>
  );  
}

export default App;