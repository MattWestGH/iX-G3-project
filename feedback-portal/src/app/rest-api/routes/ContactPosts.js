const express = require('express');
const contactController = require('../controller/contactPost')
const router = express.Router();
router.post('/contactpost', contactController.createcontactPost);
module.exports = router;