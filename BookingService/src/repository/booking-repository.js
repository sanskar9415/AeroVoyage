const { Booking } = require('../models/index');
const { AppError , ValidationError } = require('../utils/errors/index');
const { StatusCodes } = require('http-status-codes');

class BookingRepository {

    async create(data) {
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'Repository Error',
                'Cannot create Booking',
                'There is some error creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

}

module.exports = BookingRepository;