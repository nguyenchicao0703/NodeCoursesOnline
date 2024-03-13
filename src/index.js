const express = require('express');
const morgan = require('morgan');
const handlebars= require('express-handlebars');
const path = require('path');
const NewsController = require('./app/controllers/NewsController');
const app = express();
const port = 3000;

const route = require('./routes');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Configed template express-handlebars
app.engine('.hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});