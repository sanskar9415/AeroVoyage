const { StatusCodes } = require('http-status-codes');

class AppErrors extends Error {
    constructor(name = "AppError",
        message = "something went wrong",
        explanation = "something went wrong",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(message); // Call the parent class constructor with the message parameter
        this.name = name;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = AppErrors;
