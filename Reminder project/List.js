


  import React from 'react'
  
  const List = ({people}) => {
    return (
      <div>
        { people.map((person)=>{
            const { id, name , image , age } =  person;
            return <div key={id} className="person">
              
              <img src={image} alt={name}/>
              <div>
                <h2>{name}</h2>
                <h4>Turned {age} today</h4>
              </div>
              </div>
        })
          
        }
      </div>
    )
  }
  
  export default List
  