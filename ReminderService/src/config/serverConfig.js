const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAIL_PASS: process.env.EMAIL_PASS
}