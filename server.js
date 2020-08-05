if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();                                                           //necessary to interpolate API key
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { response } = require('express');

// ${process.env.HAM_API_KEY} interpolates the API key from the .env 
//calling out harvard API- PAINTINGS

app.get('/api/paintings', async (request, response) => {                                //'api/paintings' becomes the route used to fetch data on the front end
  const {page} = request.query                                                          //request.query allows you to manipulate the pages within the Gallery's component page
  try {
    const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Paintings&century=20th+century&page=${page}`)
    response.json(data);
  } catch (e){
    console.log(e);
    response.status(500).send({ error:e.message });
  }
});

// calling out harvard API- SCULPTURE

app.get('/api/sculpture', async (request, response) => {                                 //'api/sculpture' becomes the route used to fetch data on the front end
  const {page} = request.query                                                           //request.query allows you to manipulate the pages within the Gallery's component page
  try {
    const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Sculpture&century=20th+century&page=${page}`)
    response.json(data);
  } catch (e){
    console.log(e);
    response.status(500).send({ error:e.message });
  }
});

//calling out harvard API- WEAPONS AND AMMO

app.get('/api/weapons', async (request, response) => {                                    //'api/weapons' becomes the route used to fetch data on the front end
  const {page} = request.query                                                            //request.query allows you to manipulate the pages within the Gallery's component page
  try {
    const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Weapons+and+Ammunition&page=${page}`)
    response.json(data);
  } catch (e){
    console.log(e);
    response.status(500).send({ error:e.message });
  }
});

//calling out harvard API- PHOTOGRAPHY

app.get('/api/photography', async (request, response) => {                                //'api/photography' becomes the route used to fetch data on the front end
  const {page} = request.query                                                            //request.query allows you to manipulate the pages within the Gallery's component page
  try {
    const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Photographs&period=Modern&page=${page}`)
    response.json(data);
  } catch (e){
    console.log(e);
    response.status(500).send({ error:e.message });
  }
});

//End of API requests

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
