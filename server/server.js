const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes'); // fixed if routes folder isnt used
//API and API Key 
const spoonacularRoute = require('./utils/API');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/spoonacular', spoonacularRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});