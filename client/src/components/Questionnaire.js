import React, { useState } from 'react';
// quesitons will change according to the API theme
const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      q: 'Choose a city?',
      a: [
        {
          one: 'New York',
          two: 'Paris',
          three: 'Moscow'
        }
      ]
    },
    {
      id: 2,
      q: 'Choose a drink',
      a: [
        {
          one: 'Dirty Martini',
          two: 'Margarita',
          three: 'whiskey'
        }
      ]
    },
    {
      id: 3,
      q: 'Choose a scenery?',
      a: [
        {
          one: 'A Jungle',
          two: 'A Cliff Edge',
          three: 'The Ocean'
        }
      ]
    }
  ];
  const [question, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [complete, setComplete] = useState('');

  const click = (answer) => {
    setAnswers([...answers, answer]);

    // testing the if else for funtion that determines a path
    if (answer === 'Paris') {
      console.log('bonjour');
    }

    if (currentIndex >= questions.length) {
      setComplete('complete');
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setQuestion(questions[currentIndex]);
    console.log(answer);
    console.log(currentIndex);
  };

  return (
    <div className="questionnaire">
      {complete && <p>{complete}</p>}

      <div id="question">{question?.q}</div>
      {question?.a.map((answer, i) => {
        return (
          <div key={i}>
            <button onClick={() => click(answer?.one)}>{answer.one}</button>
            <button onClick={() => click(answer?.two)}>{answer.two}</button>
            <button onClick={() => click(answer?.three)}>{answer.three}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Questionnaire;