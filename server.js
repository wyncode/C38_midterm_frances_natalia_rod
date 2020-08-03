if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { response } = require('express');

//calling out harvard API
const getHarvardAPI = async () => {
  return axios.get(`https://api.harvardartmuseums.org/object?apikey=${HAM_API_KEY}classification=${classification}`)
}

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/HarvardArtMuseum', async (request, response) => {
  try {
  const resp = await getHarvardAPI();
  response.json(resp);
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
