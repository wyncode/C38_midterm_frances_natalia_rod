import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Home = () => {
  let history = useHistory();
  const handleClick1 = () => {
    history.push('/quiz');
  };

  return (
    <div>
      <div class="homePage">
        <section class="section">
          <div class="hero">
            <Link to={`/quiz`} activeClassName="active">
              <button class="theButton"></button>
            </Link>
          </div>
        </section>
        <section class="section2">
          <h1>View Our Galleries</h1>
          <div class="gallery">
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
          </div>
        </section>
      </div>

      <button onClick={handleClick1}>Take the quiz</button>
    </div>
  );
};

export default Home;
