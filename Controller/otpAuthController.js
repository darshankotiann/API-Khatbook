require('dotenv').config();
const twilio= require("twilio");
const generateOtpController = async(req, res) => {
    try {
        const mobileNo = req.body.mobileNo;
        const countryCode = "+91";
        const phone = countryCode.concat(mobileNo);

        // const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        client.verify.v2.services(process.env.TWILIO_SERVICE_ID)
                .verifications
                .create({to: phone, channel: 'sms'})
                .then(verification => { 
                    console.log(verification.status);
                    res.send(verification.status);
                });
    }
    catch(error) {
        res.send(error.message);
    }
};

const verifyOtpController = async(req, res) => {
    try {        
        const mobileNo = req.body.mobileNo;
        const countryCode = "+91";
        const phone = countryCode.concat(mobileNo);

        const recievedOtp = req.body.otp;

        const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        client.verify.v2.services(process.env.TWILIO_SERVICE_ID)
                    .verificationChecks
                    .create({to: phone, code: recievedOtp })
                    .then(verification_check => {
                        console.log(verification_check.status);
                        res.send(verification_check.status);
                    });
    }
    catch(error) {
        res.send(error.message);
    }
};

module.exports = { generateOtpController, verifyOtpController };