const express = require('express');
const router = express.Router();
const { generateBillController } = require('../Controller/generateBillController');

router.post('/generatebill', generateBillController);

module.exports = router;