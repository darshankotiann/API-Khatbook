const mongoose = require('mongoose');

const addProduct = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const addProductModel = mongoose.model('addProduct', addProduct);

module.exports = { addProductModel };