import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios"

//need 'import 'bootstrap/dist/css/bootstrap.min.css' installed in index.jsx!!!!

 
function Gallery4 () {
  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);
  const [pageNum, setPageNum] = useState(2);

  const pageUp = () => {
    setPageNum(pageNum + 1);
    }

  const pageDown = () => {
    setPageNum(pageNum - 1);
    }

  const pageUp5 = () => {
    setPageNum(pageNum + 5);
    }
  
  const pageDown5 = () => {
    setPageNum(pageNum - 5);
    }
  


  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`https://api.harvardartmuseums.org/object?apikey=e1412052-f6fc-4cd1-8000-d79a33f8343e&classification=Photographs&period=Modern&page=${pageNum}`)
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
              {apiData.map(works => ((works.primaryimageurl &&
                <Carousel.Item key={works.id}>
                  <a href={works.url}>
                    <img
                      src= {works.primaryimageurl}
                      alt= {works.title}
                      width="500px"
                    />
                  </a>
                  <Carousel.Caption>
                    <h5>{works.title}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              )))}
            </Carousel>
            <div className="button">
              {pageNum >= 7 && <button onClick={pageDown5}>-5 Pages</button>}
              {pageNum >= 3 && <button onClick={pageDown}>Previous Page</button>}
              {pageNum <= 36 && <button onClick={pageUp}>Next Page</button>}
               {pageNum <= 31 && <button onClick={pageUp5}>+5 Pages</button>}
            </div>
          </div>
        </div>
    );
  }
  
  export default Gallery4;