const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const path = require('path');
const hbs = exphbs.create({});
const helpers = require('./utils/helpers');

// Sets up the Express App
const app = express();
const sequelize = require('./config/connection')
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
