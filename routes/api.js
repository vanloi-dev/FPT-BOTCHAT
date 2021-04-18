const express = require('express');
const router = express.Router();
const controller = require('../controllers/api');

router.post('/getdata', controller.GetData, controller.SendMessage, controller.sendEmail);
module.exports = router;