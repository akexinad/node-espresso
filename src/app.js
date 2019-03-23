const path = require('path'); // core module
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs'); // HBS uses handlbars in the background and is frendlier to use with Express.js
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
    name: 'Benigni'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'FAQ',
    name: 'Germi'
  })
});

app.get('/weather', (req, res) => {
  res.send([{
    forecast: 'I have no idea',
    location: 'Sydney',
  }])
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
