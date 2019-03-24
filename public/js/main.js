console.log('allora!');

fetch('http://puzzle.mead.io/puzzle')
.then( (response) => {
  response.json()
  .then( (data) => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=siena')
.then( (response) => {
  response.json()
  .then( (data) => {
    if (data.error) {
      return console.log(data.error);
    }

    console.log(data.location);
    console.log(data.forecast);
  })
})
