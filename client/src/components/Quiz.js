import React, { useState } from 'react';

// Quiz Function for our Art Roulette questionnaire
// takes history as prop, which will redirect the user to a gallery
// depending on the user's choices.

const Quiz = ({ history }) => {
  // "questions", is an array of 5 objects that each contains a question
  // and 2 answer choices
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
  //we used hook useState to keep track and update the questions,
  //indexes, answers and categories

  const [question, setQuestion] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [paintings, setPaintings] = useState(0);
  const [photography, setPhotography] = useState(0);
  const [sculpture, setSculpture] = useState(0);
  const [weapons, setWeapons] = useState(0);

  // Our click function takes in states as inputs
  // registers the answers to the console
  const click = (answer) => {
    setAnswers([...answers, answer]);
    // If statement adds a pause to our quiz when it reaches the end
    if (currentIndex >= question.length) {
      return;
    }
    //SetCurrentIndex updates the index of the questions,
    //so it switches to the next question after you click
    setCurrentIndex(currentIndex + 1);
    setQuestion(questions[currentIndex]);

    // this control flow uses an if condition,
    // everytime the condition is satisfied it increments
    //a category by one, depending on the user's choice

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

  // This control flow filters through the user's choices
  // once the index reaches the final question
  // and a category is triggered more than once,
  // it redirects the user to an art gallery by using the history.push method

  if (currentIndex === 6 && paintings > 1) {
    history.push('/Paintings');
    alert('You got Paintings!')
  }
  else if (currentIndex === 6 && sculpture > 1) {
    history.push('/Sculpture');
    alert('You got Sculpture!')
  }
  else if (currentIndex === 6 && weapons > 1) {
    history.push('/Weapons');
    alert('You got Weapons!')
  }
  else if (currentIndex === 6 && photography > 1) {
    history.push('/Photography');
    alert('You got Photography!')
  }

  // Here we return the questions and answers.

  // We use the ? to validate if our questions and answers are truthy
  //before accessing it's attribute

  //? is used as per new version node 14,
  //if using node 12 we would had used answer && answer.one instead.

  //We return answer choices using the .map() method

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
