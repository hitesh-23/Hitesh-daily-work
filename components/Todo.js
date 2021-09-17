import React, { useState } from 'react'
import '../index.css';
import {addTask, deleteEntry, removoeTasks} from '../actions/index';
import {useDispatch} from 'react-redux';

const Todo = () => {

    const [inputData, setInputData] = useState("");

    const dispatch = useDispatch();



    return (
        <main className="todoContainer">
          <form className="form">
            <input placeholder="enter task.." value={inputData} onChange={(e)=>setInputData(e.target.value)} className = "task-input" type="text"></input>
            <i className="fa fa-plus task-btn" onClick={()=>dispatch(addTask(inputData), setInputData(""))} ></i>
          </form>
          <section className="task-entries">
            <div className="tasks">
              
            </div>
          </section>
        </main>
    )
}

export default Todo
