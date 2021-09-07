import React from 'react';
import { ITask } from "./Interfaces"




    interface Props {
        entry : ITask;
        removeEntry(id:string) : void; 
        updateEntry(id:string) : void;
    }
        
        const TodoTask = ({entry, removeEntry, updateEntry} : Props ) => {
            return (
                <div className="task">
                    <div className="content">
                    <span>{entry.userName}</span>
                    <span>{entry.email}</span>
                    <span>{entry.task}</span>
                    </div>
                    <button className="delete"  onClick={()=>removeEntry(entry.id)}>Delete</button>
                    <button className="update" onClick={()=>updateEntry(entry.id)}>Update</button>
                </div>
            )
        }
        
        export default TodoTask
        