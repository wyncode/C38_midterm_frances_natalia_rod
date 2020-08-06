import React, { useState } from 'react';
import '../index.css';

// quesitons will change according to the API theme

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
      ],
      backgroundUrl: '/images/Harvard_Art_18783392.jpeg'
    },
    {
      id: 2,
      q: 'Choose a drink',
      a: [
        {
          one: 'Dirty Martini',
          two: 'Whiskey'
        }
      ],
      backgroundUrl: '/images/Harvard_Art_46473571.jpeg'
    },
    {
      id: 3,
      q: 'Choose a scenery',
      a: [
        {
          one: 'A Jungle',
          two: 'A City'
        }
      ],
      backgroundUrl: '/images/Harvard_Art_20676300copy.jpeg'
    },
    {
      id: 4,
      q: 'Choose an obstable to overcome',
      a: [
        {
          one: 'Zombies',
          two: 'Unrequited Love'
        }
      ],
      backgroundUrl: '/images/Harvard_Art_18788721copy.jpeg'
    },

    {
      id: 5,
      q: 'Choose a subject',
      a: [
        {
          one: 'The Ocean',
          two: 'Nature'
        }
      ],
      backgroundUrl: '/images/Harvard-Art-477339539.jpeg'
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
  const [backgroundUrl, setbackgroundUrl] = useState(
    questions[4].backgroundUrl
  );
  const click = (answer) => {
    setAnswers([...answers, answer]);
    setbackgroundUrl(question.backgroundUrl);

    // Our click function takes in states as inputs
    // registers the answers to the console
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
    alert('You got Paintings!');
  } else if (currentIndex === 6 && sculpture > 1) {
    history.push('/Sculpture');
    alert('You got Sculpture!');
  } else if (currentIndex === 6 && weapons > 1) {
    history.push('/Weapons');
    alert('You got Weapons!');
  } else if (currentIndex === 6 && photography > 1) {
    history.push('/Photography');
    alert('You got Photography!');
  }

  // Here we return the questions and answers.

  // We use the ? to validate if our questions and answers are truthy
  //before accessing it's attribute

  //? is used as per new version node 14,
  //if using node 12 we would had used answer && answer.one instead.

  //We return answer choices using the .map() method

  return (
    <div className="questionnaire">
      <div id="question" style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <h1 style={{ color: '#33cc99' }}>{question?.q}</h1>
        {question?.a.map((answer, i) => {
          return (
            <div key={i}>
              <button
                className="gButton"
                style={{ color: 'salmon' }}
                onClick={() => click(answer?.one)}
              >
                {answer.one}
              </button>
              <span className="spaceButton">
                <button
                  className="gButton"
                  style={{ color: 'salmon' }}
                  onClick={() => click(answer?.two)}
                >
                  {answer.two}
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
