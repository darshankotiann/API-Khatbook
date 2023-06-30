const mongoose = require("mongoose");

const loginUser = new mongoose.Schema({
    mobileNo: {
        type: String,
        required: true
    },
    verification: {
        type: Boolean,
        default: false
    }
});

const loginModel = mongoose.model('login', login);

module.exports = { loginModel };