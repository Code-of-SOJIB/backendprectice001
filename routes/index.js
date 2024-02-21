var express = require('express');
var router = express.Router();
const apiRoute = require('./api')

router.use(process.env.API_URL,apiRoute)

module.exports = router;