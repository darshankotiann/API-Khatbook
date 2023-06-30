const express = require('express');
const router = express.Router();
const { addCustomerController, getCustomerController } = require('../Controller/customerController');

router.post("/addcustomer", addCustomerController);
router.get("/getcustomer", getCustomerController);

module.exports = router;