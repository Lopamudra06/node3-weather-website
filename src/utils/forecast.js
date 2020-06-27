const request = require("request");
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5ad0973e8b526bd91c796616236a8ca7&query=${latitude, longitude}`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather servcie!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Visibility outside is ${body.current.visibility}`)
        }
    })
}

module.exports = forecast;