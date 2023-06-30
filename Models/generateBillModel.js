const mongoose = require('mongoose');

const generateBill = new mongoose.Schema({
    customerId: {
        type: String,
        required: true
    },
    businessId: {
        type: String,
        required: true
    },
    items: {
        type: [Map],
        required: true
    }
})

const generateBillModel = mongoose.model('Bills', generateBill);

module.exports = { generateBillModel };