const mongoose = require('mongoose');

const registerBusiness = new mongoose.Schema({
    businessLogo: {
        type: String,
        default: "logo"
    },
    businessName: {
        type: String,
        required: true
    },
    businessType: {
        type:String,
        required: true
    },
    gstNo: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    }
});

const registerBusinessModel = mongoose.model('register business', registerBusiness);
const updateBusinessModel = mongoose.model('register business', registerBusiness);

module.exports = { registerBusinessModel, updateBusinessModel };