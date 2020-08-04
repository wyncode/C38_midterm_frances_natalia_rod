import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  return (
    <div>
      <div class="homePage">
        <section class="section">
          <div class="hero">
            <h1 class="apTitle">Art Roulette</h1>
            <p class="description">
              Play roulette and see what kind of art nerd you are or{' '}
              <Link
                to="#anchor"
                activeClassName="active"
                style={{ color: '#272727' }}
              >
                <b>browse our galleries.</b>
              </Link>
            </p>
            <Link to={`/quiz`} activeClassName="active">
              <button class="theButton"></button>
            </Link>
          </div>
        </section>
        <section class="section2">
          <h1 class="galleryIcon">
            <a id="anchor">View Our Galleries</a>
          </h1>
          <div class="gallery">
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
            <a class="galleryItem"></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
