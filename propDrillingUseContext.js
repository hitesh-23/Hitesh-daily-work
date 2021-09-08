import React, { useContext, useState } from 'react';
import {data} from "../../../data";
// more components
// fix - context api, redux (for more complex cases)



const PersonContext = React.createContext();



const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) =>{
    setPeople((people)=>{
      return people.filter((person) => person.id !== id )
    })
  }

  return <PersonContext.Provider value={{ removePerson,people }}>
    <h3>prop Drilling</h3>
    <List people={people}></List>
    </PersonContext.Provider>
};

const List = () => {
  const hel = useContext(PersonContext);
  return<>
  {hel.people.map((person)=>{
    return <SinglePerson key={person.id} {...person}/>
  })}
  </>
}



const SinglePerson = ({id, name}) =>{
  const { removePerson } = useContext(PersonContext);
  return <div className="item">
    <h4>{name}</h4>
    <button onClick={()=>removePerson(id)}>Delete
    </button>

  </div>

}




export default PropDrilling;
