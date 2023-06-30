const { generateBillModel } = require('../Models/generateBillModel');

const generateBillController = async(req, res) => {
    try {
        const data = req.body;
        const generatebill = generateBillModel(data);
        await generatebill.save();
        res.send(req.body);
    }
    catch(error) {
        res.send(error.message);
    }
};

module.exports = { generateBillController };