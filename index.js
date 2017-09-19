const express = require('express');
const app = express();
const router = require('./router')(express);
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/', router);
app.use(express.static("dist"))
app.listen(8080)


