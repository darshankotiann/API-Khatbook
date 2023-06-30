const express = require('express');
const router = express.Router();
const { getRegisterBusinessController, registerBusinessController, updateBusinessController } = require('../Controller/businessController');

router.get("/getregisterbusiness", getRegisterBusinessController);
router.post("/registerbusiness", registerBusinessController);
router.patch("/updatebusiness", updateBusinessController);

module.exports = router;