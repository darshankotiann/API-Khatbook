const express = require('express');
const router = express.Router();
const { generateOtpController, verifyOtpController } = require('../Controller/otpAuthController');

router.post('/sendotp', generateOtpController);
router.post('/verifyotp', verifyOtpController);

module.exports = router;