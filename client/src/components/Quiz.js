import React, { useState } from 'react';
// quesitons will change according to the API theme
const Quiz = () => {
  const questions = [
    {
      id: 1,
      q: 'Choose a city?',
      a: [
        {
          one: 'New York',
          two: 'Paris',
          three: 'Moscow',
          four: 'Dubai',
          fifth: 'San Francisco'
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
          three: 'Whiskey',
          four: 'Beer',
          fifth: 'Wine'
        }
      ]
    },
    {
      id: 3,
      q: 'Choose a scenery',
      a: [
        {
          one: 'A Jungle',
          two: 'A Cliff Edge',
          three: 'A City',
          four: 'A Field',
          fifth: 'A Beach'
        }
      ]
    },
    {
      id: 4,
      q: 'Choose an obstable to overcome',
      a: [
        {
          one: 'Zombies',
          two: 'Unrequited Love',
          three: 'The Patriarchy',
          four: 'A Pandemic',
          fifth: 'A terrible childhood'
        }
      ]
    },
    {
      id: 5,
      q: 'Choose a subject',
      a: [
        {
          one: 'The Ocean',
          two: 'Nature',
          three: 'Your Lover',
          four: 'Society',
          fifth: 'Aliens'
        }
      ]
    },

    {
      id: 6,
      q: 'Choose an Medium',
      a: [
        {
          one: 'Oil Paint',
          two: 'Watercolour',
          three: 'Acrylic',
          four: 'Clay',
          fifth: 'Guache'
        }
      ]
    }
  ];
  const [question, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [paintings, setPaintings] = useState(0);
  const [photography, setPhotography] = useState(0);
  const [furniture, setFurniture] = useState(0);
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
    if (answer === 'Moscow') {
      setFurniture(furniture + 1);
    }
    if (answer === 'Margarita') {
      setSculpture(sculpture + 1);
    }
    if (answer === 'Dirty Martini') {
      setWeapons(weapons + 1);
    }
    if (answer === 'Whiskey') {
      setFurniture(furniture + 1);
    }
    if (answer === 'A Jungle') {
      setPaintings(paintings + 1);
    }
    if (answer === 'A Cliff Edge') {
      setPhotography(photography + 1);
    }
    if (answer === 'A City') {
      setSculpture(sculpture + 1);
    }
    if (answer === 'Zombies') {
      setWeapons(weapons + 1);
    }
    if (answer === 'Unrequited Love') {
      setPhotography(photography + 1);
    }
    if (answer === 'The Patriarchy') {
      setWeapons(weapons + 1);
    }
    if (answer === 'The Ocean') {
      setFurniture(furniture + 1);
    }
    if (answer === 'Nature') {
      setSculpture(setSculpture + 1);
    }
    if (answer === 'Your Lover') {
      setPaintings(paintings + 1);
    }
  };
  console.log(answers);
  //instead of console.log {histoty.push(path to gallery)}
  if (currentIndex === 7 && (paintings === 2 || paintings > 2)) {
    console.log('paintings', paintings);
  }
  if (currentIndex === 7 && (photography === 2 || photography > 2)) {
    console.log('photography', photography);
  }
  if (currentIndex === 7 && (furniture === 2 || furniture > 2)) {
    console.log('furniture', furniture);
  }
  if (currentIndex === 7 && (sculpture === 2 || sculpture > 2)) {
    console.log('sculpture', sculpture);
  }
  if (currentIndex === 7 && (weapons === 2 || weapons > 2)) {
    console.log('weapons', weapons);
  }

  return (
    <div className="questionnaire">
      <div id="question">{question?.q}</div>
      {question?.a.map((answer, i) => {
        return (
          <div key={i}>
            <button onClick={() => click(answer?.one)}>{answer.one}</button>
            <button onClick={() => click(answer?.two)}>{answer.two}</button>
            <button onClick={() => click(answer?.three)}>{answer.three}</button>
            <button onClick={() => click(answer?.four)}>{answer.four}</button>
            <button onClick={() => click(answer?.fifth)}>{answer.fifth}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
