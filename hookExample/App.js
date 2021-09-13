import React, {useState, useReducer} from 'react'; 
import Modal from './Modal';
import {data} from './data';
import { reducer } from './reducer';

//Reducer function - as app gets bigger we will need some kind of structure

const defaultState = {

    people : [],
    isModalOpen : false,
    modalContent : ""
}





function App() {

const [name, setName] = useState("");

const [state, dispatch] = useReducer(reducer,defaultState); //1st thing we pass is Reducer function 2nd is initial state 


const handleSubmit = (e) => {
  e.preventDefault();

  if(name){
    setName("");
    const newItem = {id: new Date().getTime().toString(), name}
    dispatch({type: "ADD_ITEM", payload:newItem}) // action is an object must have property by name of type
  }
  else{
    dispatch({type :"NO_VALUES"})
    
  }
}

const closeModal = () => {
  dispatch({type:"CLOSE_MODAL"});
}
  


  return (
    <div className="App">
     {  state.isModalOpen &&  <Modal modalContent={state.modalContent} closeModal={closeModal}/> }
     <form onSubmit={handleSubmit}>
       <div>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
         <button type="submit">Add Person</button>
       </div>

     </form>
     {
       state.people.map((person)=>{
         return <div key={person.id}>
           <h4>{person.name}</h4>
           <button onClick={()=> dispatch({type:"REMOVE_ITEM", payload:person.id})}>Remove Item</button>
           </div>
       })
     }
     </div>
  );
}

export default App;
