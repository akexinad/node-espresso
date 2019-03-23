const path = require('path'); // core module
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.send(
    '<h1>Weather</h1>'
  )
});

app.get('/help', (req, res) => {
  res.send([{
    name: "Danny",
    age: "13",
  }, {
    name: 'Fellini',
    age: 44,
  }])
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
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
