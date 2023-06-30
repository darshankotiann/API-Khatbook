const mongoose = require('mongoose');

const addCustomer = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerNumber: {
        type: String,
        required: true
    },
    businessId: {
        type: String,
        required: true
    }
});

const addCustomerModel = mongoose.model('customer', addCustomer);

module.exports = { addCustomerModel };