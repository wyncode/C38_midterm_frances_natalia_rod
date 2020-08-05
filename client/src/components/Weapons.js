import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

//need 'import 'bootstrap/dist/css/bootstrap.min.css' installed in index.jsx!!!!
 
function Weapons() {

  //setting up a state for apiData to pull from the API, index to utilize the carousel, and pageNum to be able to navigate through the API's pages

  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  //following functions are for navigation of the API's pages, in intervals of 1 and 5. Activated by buttons below

  const pageUp = () => {
    setPageNum(pageNum + 1);
  };

  const pageDown = () => {
    setPageNum(pageNum - 1);
  };

  const pageUp5 = () => {
    setPageNum(pageNum + 5);
  };

  const pageDown5 = () => {
    setPageNum(pageNum - 5);
  };

  // useEffect used to pull from the API request set up in server.js. the query request for the page, or '?page=${pageNum}', lets us change the api endpoint from the front end.

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`/api/weapons?page=${pageNum}`);
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
                      alt={works.title}
                      width="500px"
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

        <div className="button">
          {pageNum >= 6 && <button onClick={pageDown5}>-5 Pages</button>}
          {pageNum >= 2 && <button onClick={pageDown}>Previous Page</button>}
          <h1>{pageNum}</h1>
          {pageNum <= 18 && <button onClick={pageUp}>Next Page</button>}
          {pageNum <= 13 && <button onClick={pageUp5}>+5 Pages</button>}
        </div>
      </div>
    </div>
  );
}

export default Weapons;
