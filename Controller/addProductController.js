const { addProductModel } = require('../Models/addProductModel');

const addProductController = async(req, res) => {
    try {
        const data = req.body;
        const addcustomer = new addProductModel(data);
        await addcustomer.save();
        res.send(req.body);
    }
    catch(error) {
        res.send(error);
    }
};

const getProductController = async(req, res) => {
    try {
        const data = await addProductModel.find().exec();
        res.send(data);
    }
    catch(error) {
        res.send(error.message);
    }
};

module.exports = { addProductController, getProductController };