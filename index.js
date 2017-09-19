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

app.use(express.static("dist"))
app.use('/api', router);


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(8080)