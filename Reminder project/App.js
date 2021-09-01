
import React, { useState } from 'react'
import data from './data'
import List from './List'

const App = () => {

  const [people, setPeople] = useState(data);



  return <main>
  
  <article className="container">
    <h2>{people.length}Birthdays today</h2>
    <List people ={people}></List>
    <button type="button" onClick ={() => setPeople([]) }> Clear All
    </button>

  </article>
  </main>
}

export default App
