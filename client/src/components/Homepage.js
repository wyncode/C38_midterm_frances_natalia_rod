import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <div class="homePage">
        <section class="section">
          <div class="hero">
            <h1 class="apTitle">Art Roulette</h1>
            <p class="description">
              Play roulette and see what kind of art nerd you are or{' '}

            {/*CLicking 'Browse our Galleries', in the scroll link element, drops you down to the <h1></h1> tag on line 35 to be able to quickly access the gallery links */}

              <ScrollLink
                to="anchor"
                smooth={true}
                style={{ color: '#272727' }}
              >
                <b>browse our galleries.</b>
              </ScrollLink>
            </p>
            <Link to={`/quiz`} activeClassName="active">
              <button class="theButton"></button>
            </Link>
          </div>
        </section>

        {/* Individual Picture icons link you to their respective Galleries upon clicking */}
        
        <section class="section2">
          <h1 id="anchor">View Our Galleries</h1>
          <div class="gallery">

            <Link to="/Paintings" class="galleryItem">
              <h6 class="caption1" style={{ color: 'white' }}>
                Painting
              </h6>
            </Link>

            <Link to="/Sculpture" class="galleryItem2">
              <h6 class="caption1" style={{ color: 'white' }}>
                Sculpture
              </h6>
            </Link>

            <Link to="/Photography" class="galleryItem3">
              <h6 class="caption1" style={{ color: 'white' }}>
                Photography
              </h6>
            </Link>

            <Link to="/Weapons" class="galleryItem4">
              <h6 class="caption1" style={{ color: 'white' }}>
                Weapons
              </h6>
            </Link>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
