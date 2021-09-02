import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';




const App = () => {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>Frequently Asked Questions about login</h3>
      <section className="info">
        {
          questions.map((question)=>{
            return <Question key= {question.id} {...question} />
          })
        }
      </section>
    </div>
  </main>
}

export default App;