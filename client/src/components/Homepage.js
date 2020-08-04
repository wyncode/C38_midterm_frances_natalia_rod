import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';

const Home = () => {
  let history = useHistory();
  const handleClick1 = () => {
    history.push('/quiz');
  };
  

  return (
    <div>
      <button onClick={handleClick1}>Take the quiz</button>
    </div>
  );
};

export default Home;
