import React from 'react'
import { IUserdata } from '../Interfaces'


export interface Iprops {
    entry : IUserdata;
    removeEntry(id:string) : void;
    updateEntry(id:string) : void;


}



const Task = ({entry,removeEntry,updateEntry}:Iprops) => {
    return (<div>
        <span>{entry.userName}</span>
        <span>{entry.email}</span>
        <span>{entry.task}</span>
        <button onClick={()=>removeEntry(entry.id)}>Delete</button>
        <button onClick={()=>updateEntry(entry.id)}>Update</button>
            
        </div>
    )
}

export default Task;



