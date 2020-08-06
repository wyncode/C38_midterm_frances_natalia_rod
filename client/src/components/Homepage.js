import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <section className="section">
          <div className="hero">
            <h1 className="apTitle">Art Roulette</h1>
            <p className="description">
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
              <button className="theButton"></button>
            </Link>
          </div>
        </section>

        {/* Individual Picture icons link you to their respective Galleries upon clicking */}
        
        <section className="section2">
          <h1 id="anchor">View Our Galleries</h1>
          <div className="gallery">
            <Link to="/Paintings" className="galleryItem">
              <h6 className="caption1" style={{ color: 'white' }}>
                Painting
              </h6>
            </Link>
            <Link to="/Sculpture" className="galleryItem2">
              <h6 className="caption1" style={{ color: 'white' }}>
                Sculpture
              </h6>
            </Link>
            <Link to="/Photography" className="galleryItem3">
              <h6 className="caption1" style={{ color: 'white' }}>
                Photography
              </h6>
            </Link>
            <Link to="/Weapons" className="galleryItem4">
              <h6 className="caption1" style={{ color: 'white' }}>
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
