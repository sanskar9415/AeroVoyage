const AirportRepository = require('./airport-repository');
const CrudRespository = require('./crud-repository');

// const CityRepository = require("./city-repository"); or we can do this
module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository'),
    AirportRepository: require('./airport-repository'),
    CrudRespository: require('./crud-repository')
}