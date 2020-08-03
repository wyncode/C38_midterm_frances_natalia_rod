import React from 'react';
import { useHistory } from 'react-router-dom';
import css from './index.css';

const Home = () => {
  let history = useHistory();
  const handleClick1 = () => {
    history.push('/quiz');
  };
  const handleClick2 = () => {
    history.push('/carousel1');
  };
  const handleClick3 = () => {
    history.push('/carousel2');
  };
  const handleClick4 = () => {
    history.push('/carousel3');
  };
  const handleClick5 = () => {
    history.push('/carousel4');
  };

  return (
    <div>
      <button onClick={handleClick1}>Take the quiz</button>
      <button onClick={handleClick2}>Gallery1</button>
      <button onClick={handleClick3}>Gallery2</button>
      <button onClick={handleClick4}>Gallery3</button>
      <button onClick={handleClick5}>Gallery4</button>
    </div>
  );
};

export default Home;
