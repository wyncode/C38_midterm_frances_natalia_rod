import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//need 'import 'bootstrap/dist/css/bootstrap.min.css' installed in index.jsx!!!!

function Gallery3() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <div className="img">
        <h1 className="classification">
          <em>Bears(will float over image)</em>
        </h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thenypost.files.wordpress.com/2014/09/bear1.jpg?quality=90&strip=all&w=1200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>BEAR 1</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://19mvmv3yn2qc2bdb912o1t2n-wpengine.netdna-ssl.com/science/files/2019/01/bear-featured-image.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>BEAR 2</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://travel.home.sndimg.com/content/dam/images/travel/stock/2018/2/19/0/shutterstock_34956754_grizzly-bear.jpg.rend.hgtvcom.1280.914.suffix/1519070779400.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>BEAR 3</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://news.nationalgeographic.com/content/dam/news/2016/03/04/grizzly_delisting/01grizzlydelisting.ngsversion.1457364600397.adapt.1900.1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>BEAR 4</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thenypost.files.wordpress.com/2014/09/bear1.jpg?quality=90&strip=all&w=1200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>BEAR 1</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://19mvmv3yn2qc2bdb912o1t2n-wpengine.netdna-ssl.com/science/files/2019/01/bear-featured-image.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>BEAR 2</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://travel.home.sndimg.com/content/dam/images/travel/stock/2018/2/19/0/shutterstock_34956754_grizzly-bear.jpg.rend.hgtvcom.1280.914.suffix/1519070779400.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>BEAR 3</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://news.nationalgeographic.com/content/dam/news/2016/03/04/grizzly_delisting/01grizzlydelisting.ngsversion.1457364600397.adapt.1900.1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>BEAR 4</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="info">
        <h1>Title of piece will go here</h1>
        <p>Additional information will go here</p>
      </div>
      <div className="button">
        <button>Re-Shuffle!</button>
      </div>
    </div>
  );
}

export default Gallery3;
