const { updateBusinessModel, registerBusinessModel } = require('../Models/businessModel');

const getRegisterBusinessController = async(req,res) => {
    try {
      const data= await registerBusinessModel.find().exec();
      res.send(data);
    }
    catch(error) {
        res.send(error.message);
    }
};

const registerBusinessController = async(req, res) => {
    try {
        const data = req.body;
        const userData=new registerBusinessModel(data);
        await userData.save();
        res.send(req.body);      
    }
    catch(error) {
        res.send(error.message)
    }
};

const updateBusinessController = async(req, res) => {
    try {
        const {businessId} = req.body.businessId;
        const updatedData = req.body;
        await updateBusinessModel.findOneAndUpdate( businessId, updatedData);
        res.send(updatedData);
    }
    catch(error) {
        res.send(error.message);
    }
}

module.exports = { getRegisterBusinessController, registerBusinessController, updateBusinessController};