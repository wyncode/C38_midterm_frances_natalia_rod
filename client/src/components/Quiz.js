import React, { useState } from 'react';

const Quiz = () => {
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
  // const [complete, setComplete] = useState("");

  const click = (answer) => {
    setAnswers([...answers, answer]);
    //logic to decide path goes here

    if (answer === 'A Jungle') {
      console.log('Photography');
    } else if (answer === 'A Cliff Edge') {
      console.log('Sculpture');
    } else if (answer === 'The Ocean') {
      console.log('Furniture');
    } else {
      console.log('Painting');
    }

    // send to the next page

    if (currentIndex >= question.length) {
      // setComplete("complete");
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setQuestion(questions[currentIndex]);
    console.log(answer);
    console.log(currentIndex);
  };

  return (
    <div className="questionnaire">
      {/* {complete && <p>{complete}</p>} */}
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

export default Quiz;
