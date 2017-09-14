var express = require('express'),
app = express(),
port = process.env.npm_package_config_port || 8080,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// CORS Request
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "text/html");
  next();
});

var routes = require('./routes/rozka_route'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Wdilt RESTful API server started @ ' + port);