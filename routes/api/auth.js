var express = require('express');
var router = express.Router();
const registrationController = require('../../controllers/registrationController')


router.get('/registration', registrationController) ;
  
module.exports = router;