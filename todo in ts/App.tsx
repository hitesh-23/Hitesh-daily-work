import React, {ChangeEvent, FC, useState} from 'react';
import { ITask } from './Interfaces';
import './style.css';
import TodoTask from './TodoTask';






  const App : FC=()=> {



  const [userName, setUserName] = useState<string>("");

  const [ taskName, setTaskName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const [ todoList, setToDoList] = useState<ITask[]>([]);







const handleChange = (e:ChangeEvent<HTMLInputElement>):void =>{

  if(e.target.name === "userName"){
    setUserName(e.target.value);
  }
 else if (e.target.name === "taskName") 
 {
    setTaskName(e.target.value);
}
else
{
    setEmail(e.target.value);
}

}

const handleSubmit =():void=>{

  const newTask = { userName, taskName, email, id : new Date().getTime().toString()};

  console.log(newTask);


  setToDoList([...todoList, newTask]);

  setUserName("");
  setTaskName("");
  setEmail("");

}

const removeTask = (taskName:string):void =>{

  setToDoList(todoList.filter((task)=>{
    return task.taskName !== taskName

  }))



}



  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Enter Username" name="userName" value={userName} onChange={handleChange}></input>
          <input type="text" placeholder="Enter a new task" name="taskName" value={taskName} onChange={handleChange}></input>
          <input type="email" placeholder="Enter Email" name="email" value={email} onChange={handleChange}></input>
        </div>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      <div className="todolist"></div>
      {
        todoList.map((task : ITask, key:number)=>{

          return <TodoTask key={key} task={task} removeTask={removeTask} />

        })
      }
     
    </div>
  );
}

export default App;

