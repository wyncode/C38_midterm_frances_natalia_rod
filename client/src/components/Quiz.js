import React, { useState } from 'react';
// quesitons will change according to the API theme
const Quiz = ({ history }) => {
  const questions = [
    {
      id: 1,
      q: 'Choose a city?',
      a: [
        {
          one: 'New York',
          two: 'Paris'
        }
      ]
    },
    {
      id: 2,
      q: 'Choose a drink',
      a: [
        {
          one: 'Dirty Martini',
          two: 'Whiskey'
        }
      ]
    },
    {
      id: 3,
      q: 'Choose a scenery',
      a: [
        {
          one: 'A Jungle',
          two: 'A City'
        }
      ]
    },
    {
      id: 4,
      q: 'Choose an obstable to overcome',
      a: [
        {
          one: 'Zombies',
          two: 'Unrequited Love'
        }
      ]
    },

    {
      id: 5,
      q: 'Choose a subject',
      a: [
        {
          one: 'The Ocean',
          two: 'Nature'
        }
      ]
    }
  ];
  const [question, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [paintings, setPaintings] = useState(0);
  const [photography, setPhotography] = useState(0);
  const [sculpture, setSculpture] = useState(0);
  const [weapons, setWeapons] = useState(0);

  const click = (answer) => {
    setAnswers([...answers, answer]);

    if (currentIndex >= question.length) {
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setQuestion(questions[currentIndex]);
    // console.log(answer);
    // console.log(currentIndex);

    if (answer === 'Paris') {
      setPaintings(paintings + 1);
    }
    if (answer === 'New York') {
      setPhotography(photography + 1);
    }
    if (answer === 'Dirty Martini') {
      setWeapons(weapons + 1);
    }
    if (answer === 'Whiskey') {
      setSculpture(sculpture + 1);
    }
    if (answer === 'A Jungle') {
      setPaintings(paintings + 1);
    }
    if (answer === 'A City') {
      setWeapons(weapons + 1);
    }
    if (answer === 'Zombies') {
      setPhotography(photography + 1);
    }
    if (answer === 'Unrequited Love') {
      setSculpture(sculpture + 1);
    }
    if (answer === 'The Ocean') {
      setPaintings(paintings + 1);
    }
    if (answer === 'Nature') {
      setPhotography(photography + 1);
    }
  };
  console.log(answers);
  //instead of console.log {histoty.push(path to gallery)}
  if (currentIndex === 6 && paintings > 1) {
    history.push('/Paintings');
  }
  if (currentIndex === 6 && sculpture > 1) {
    history.push('/Sculpture');
  }
  if (currentIndex === 6 && weapons > 1) {
    history.push('/Weapons');
  }
  if (currentIndex === 6 && photography > 1) {
    history.push('/Photography');;
  }

  return (
    <div className="questionnaire">
      <div id="question">{question?.q}</div>
      {question?.a.map((answer, i) => {
        return (
          <div key={i}>
            <button onClick={() => click(answer?.one)}>{answer.one}</button>
            <button onClick={() => click(answer?.two)}>{answer.two}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
