import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios"
import search from "./Nav"
//need 'import 'bootstrap/dist/css/bootstrap.min.css' installed in index.jsx!!!!

 
function Gallery1 () {
  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const pageUp = () => {
    setPageNum(pageNum + 1);
  }

  const pageDown = () => {
    setPageNum(pageNum - 1);
  }


  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`https://api.harvardartmuseums.org/object?apikey=e1412052-f6fc-4cd1-8000-d79a33f8343e&classification=${search}&page=${pageNum}`)
            setApiData(result.data.records);
            };
      getData();
  }, [pageNum]);


    const handleSelectC = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        
        <div className="carousel">
          <div className="img">
      <Carousel activeIndex={index} onSelect={handleSelectC}>
        {apiData.map(works => (  
        <Carousel.Item key={works.id}>
          <img
            src= {works.primaryimageurl}
            alt= {works.title}
            width="500px"
          />
          <Carousel.Caption>
            <h5>{works.title}</h5>
          </Carousel.Caption>
          </Carousel.Item>
          ))}
      </Carousel>
            <div className="button">
            <button onClick={pageUp}>Next Page</button>
            <button onClick={pageDown}>Previous Page</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default Gallery1;