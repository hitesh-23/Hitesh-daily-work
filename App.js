import React, { useState } from 'react';

const App = () => {

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" })

  const [people, setPeople] = useState([]);


  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  };



  const submitValues = (e) => {

    e.preventDefault();

    if (user.firstName && user.lastName && user.email) {
      console.log(user);

      const newUser = { ...user, id: new Date().getTime().toString() }
      console.log(newUser.id);

      setPeople([...people, newUser]);
      console.log(people);
      setUser({ firstName: "", lastName: "", email: "" })
    }
  }



  const removeItem=(id)=>{
    console.log(id);

    const newArr = people.filter(()=>{
      return people.id !== id;
    })

    setPeople(newArr);

  }



  return (
    <div className="forms">
      <label htmlFor="firstName">Firstname : </label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange}></input>
      <br></br>
      <br></br>

      <label htmlFor="lastName">Lastname : </label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange}></input>
      <br></br>
      <br></br>

      <label htmlFor="email">Email : </label>
      <input type="email" name="email" value={user.email} onChange={handleChange}></input>
      <br></br>
      <br></br>

      <button type="button" onClick={submitValues}>
        Submit
      </button>

      <div>
        {
          people.map((aadmi) => {

            const { firstName, lastName, email, id } = aadmi
            return <div key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <h4>{email}</h4>
              <button onClick={()=>removeItem(id)}>Remove</button>




            </div>
          })
        }



      </div>



    </div>


  );
}

export default App;
