const TicketService = require('../services/email-service');

const create = async (req,res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            message: 'Successfully created the ticket',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the ticket',
            err: error
        })
    }
}

module.exports = {
    create
}