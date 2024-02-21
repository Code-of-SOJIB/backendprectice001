require ('dotenv').config()
var express = require('express');
var router = require('./routes/index');


var app = express();

app.use('/',router);

const port= process.env.PORT || 8000
app.listen(port)