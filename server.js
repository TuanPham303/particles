var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.set('views', __dirname + '/views');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(3000, function(){
  console.log('server is running at 3000');
});