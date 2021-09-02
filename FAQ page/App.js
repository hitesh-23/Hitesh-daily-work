import React , { useState } from 'react';
import Question from './Question';
import data from './data';

const App = () => {

const [questions, setQuestions] = useState(data);

  return <main>
      <div className="container">
      <h2>Frequently asked Questions about login </h2>
      <section className="info">
      
      {
        questions.map((question)=>{
          return <Question key={question.id} {...question}/>
        })
      }
      </section>
      </div>
    </main>
}

export default App

