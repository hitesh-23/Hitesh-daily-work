import React, { FC } from 'react'
import {ITask} from './Interfaces'


interface IProps {
    task : ITask;
    removeTask(taskName : string) : void;
    
}

const TodoTask : FC <IProps> = ({task, removeTask}) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.userName}</span>
                <span>{task.email}</span>
            </div>
            <button onClick={()=>removeTask(task.taskName)}>X</button>
            
        </div>
    )
}

export default TodoTask
