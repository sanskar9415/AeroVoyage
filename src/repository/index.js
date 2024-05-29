// const CityRepository = require("./city-repository"); or we can do this
module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository')
}