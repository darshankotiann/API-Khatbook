const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { addCustomerModel } = require('../Models/customerModel');

// Used JWT token for authorization
const addCustomerController = async(req, res) => {
    try {
        const data = req.body;
        if(data != null) {
            const token = jwt.sign({ number: req.body.number }, `${process.env.ACCESS_TOKEN_SECRET}`
            // , { expiresIn: "50s" }
            )
            const addCustomer = new addCustomerModel(data);
            await addCustomer.save();
            res.send(token);
        }
    }
    catch(error) {
        res.send(error.message);
    }
}

const getCustomerController = async(req, res) => {
    try {
        const data = await addCustomerModel.find().exec();
        
        res.send(data);  
    }
    catch(error) {
        res.send(error.message);
    }
};

const fetchPosts = (req, res) => {
    let userPosts = posts.filter((data) => {
        return data.email === req.user.email
    })
    res.send(userPosts)
};

// It will verify the token and provide access to that specific collection/ data
const handleToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const data = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`)
        if(data){
            req["user"] = data
            next()
        }
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = { addCustomerController, getCustomerController };