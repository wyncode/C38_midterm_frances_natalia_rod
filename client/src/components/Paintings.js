import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

//need 'import 'bootstrap/dist/css/bootstrap.min.css' installed in index.jsx in order to use bootstrap

function Paintings() {
  //setting up a state for apiData to pull from the API, index to utilize the carousel, and pageNum to be able to navigate through the API's pages

  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  // useEffect used to pull from the API request set up in server.js. the query request for the page, or '?page=${pageNum}', lets us change the api endpoint from the front end.

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`/api/paintings?page=${pageNum}`);
      setApiData(result.data.records);
    };
    getData();
  }, [pageNum]);

  // handleSelectC function allows us to navigate through the carousel

  const handleSelectC = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <div className="img">
        <Carousel activeIndex={index} onSelect={handleSelectC}>
          {/* apiData will only map objects in the JSON that have images, through the use of the && statement*/}

          {apiData.map(
            (works) =>
              works.primaryimageurl && (
                <Carousel.Item key={works.id}>
                  <a href={works.url}>
                    <img
                      src={works.primaryimageurl}
                      alt={works.title} //alt tag is the works title for accessibility
                      height="400px"
                    />
                  </a>
                  <Carousel.Caption>
                    <h5>{works.title}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              )
          )}
        </Carousel>

        {/* buttons only render if their intended use is applicable, through the use of the && statement */}

        <div className="Button">
          {pageNum >= 6 && (
            <button
              className="gButton"
              style={{ color: 'salmon' }}
              onClick={() => setPageNum(pageNum - 5)}
            >
              -5
            </button>
          )}
          {pageNum >= 2 && (
            <button
              className="gButton"
              style={{ color: 'salmon' }}
              onClick={() => setPageNum(pageNum - 1)}
            >
              ←
            </button>
          )}

          {pageNum <= 206 && (
            <button
              className="gButton"
              style={{ color: 'salmon' }}
              onClick={() => setPageNum(pageNum + 1)}
            >
              →
            </button>
          )}
          {pageNum <= 201 && (
            <button
              className="gButton"
              style={{ color: 'salmon' }}
              onClick={() => setPageNum(pageNum + 5)}
            >
              +5
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Paintings;
