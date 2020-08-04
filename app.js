const geocode = require('./helpers/geocoding')
const weather = require('./helpers/weather')

const location = process.argv[2];

if(location) {
    geocode(location, (error, {latitude, longitude, place} = {}) => {
        if(error) {
            return console.log(error);
        } 
        weather(latitude, longitude, (err, {description, temperature, feelslike} = {}) => {
            if(err) {
                return console.log(error);
            } 
            console.log('Location: ' + place);
            console.log('Weather : ' + description + '. Temp is ' + temperature + ' celsius and it feels like ' + feelslike + ' celsius.');
        });
    });
} else {
    console.log('Please provide location')
}