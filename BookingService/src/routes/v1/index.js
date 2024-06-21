const { BookingController } = require('../../controllers/index');

const express = require('express');
const router = express.Router();

router.post('/bookings', BookingController.create);

module.exports = router;