import React, {useState, useReducer} from 'react'
import {data} from '../data';
import Modal from './Modal.js';

// redcuer function

const reducer = (state,action) =>{
    if(action.type==="ADD_ITEM"){
        const newItems = [...state.people, action.payload]
        return {
            ...state, people:newItems, isModalOpen : true, modalContent : "Item Added"
        }
    }


}

const defaultState = {
    isModalOpen : false,
    people : [],
    modalContenet : ""
}

const Index = () => {

    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newItem = { id : new Date().getTime().toString(), name}
        dispatch({type:"ADD_ITEM",payload:newItem})
        }
    }

    return (
        <div>

            { state.isModalOpen && <Modal/>}
            <form onSubmit={handleSubmit}>
                <input className="input" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <button>Add Person</button>
            </form>
            
        </div>
    )
}

export default Index
