const path = require('path'); // core module
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express.js config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlbars engine and views location.
app.set('view engine', 'hbs'); // HBS uses handlbars in the background and is frendlier to use with Express.js
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Fellini'
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Fellini'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Some helpful text',
    title: 'FAQ',
    name: 'Fellini'
  })
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  }

  res.send({
    location: 'Siena',
    address: req.query.address,
    forecast: 'I have no idea yet',
  })
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  res.send({
    products: []
  })
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Fellini',
    errorMessage: 'Help Article Not Found.'
  })
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Fellini',
    errorMessage: 'Page Not Found'
  })
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
