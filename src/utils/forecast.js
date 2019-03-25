const request = require('request');
const chalk = require('chalk');

// TEST API => https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/33.8688,151.2093

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8f309f032cb56d3ea822766f089e0e51/${ latitude },${ longitude }?units=si`;

  request({
    url,
    json: true,
  }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Weather Service!', undefined);
    } else if (body.error) {
      callback(body.error, undefined)
    } else {
      const [ current, daily ] = [ body.currently, body.daily.data[0] ];

      callback(undefined, daily.summary + ' Current temperature is ' + current.temperature + ' degrees celcius. There is a ' + current.precipProbability + ' percent chance of rain.' + ' High is predicted to be ' + daily.temperatureHigh + ' with a low of ' + daily.temperatureLow + ' degrees.')
    }
  })
}

module.exports = forecast;
