if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { response } = require('express');

//calling out harvard API- PAINTINGS
app.get('/api/paintings', async (request, response) => {
  const {page} = request.query
  try {
  const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Paintings&century=20th+century&${page}`)
  response.json(data);
  } catch (e){
  console.log(e);
  response.status(500).send({ error:e.message });
  }
});

//calling out harvard API- SCULPTURE
app.get('/api/sculpture', async (request, response) => {
  const {page} = request.query
  try {
  const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Sculpture&century=20th+century&${page}`)
  response.json(data);
  } catch (e){
  console.log(e);
  response.status(500).send({ error:e.message });
  }
});

//calling out harvard API- WEAPONS AND AMMO
app.get('/api/weapons', async (request, response) => {
  const {page} = request.query
  try {
  const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Weapons+and+Ammunition&${page}`)
  response.json(data);
  } catch (e){
  console.log(e);
  response.status(500).send({ error:e.message });
  }
});

//calling out harvard API- PHOTOGRAPHY
app.get('/api/photography', async (request, response) => {
  const {page} = request.query
  try {
  const { data } = await axios.get(`https://api.harvardartmuseums.org/object?apikey=${process.env.HAM_API_KEY}&classification=Photographs&period=Modern&${page}`)
  response.json(data);
  } catch (e){
  console.log(e);
  response.status(500).send({ error:e.message });
  }
});


// END DEMO

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
