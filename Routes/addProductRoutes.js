const express = require('express');
const router = express.Router();
const { addProductController, getProductController } = require('../Controller/addProductController');

router.post("/addproduct", addProductController);
router.get("/getproduct", getProductController);

module.exports = router;