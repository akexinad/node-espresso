const express = require('express');

const app = express()

app.get('', (req, res) => {
  res.send('Hello, world')
})

app.get('/help', (req, res) => {
  res.send('This is help page, yummy')
})

app.get('/about', (req, res) => {
  res.send('This is about page, delicious')
})

app.get('/weather', (req, res) => {
  res.send('This is weather page, now I am all wet')
})


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
