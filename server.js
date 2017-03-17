var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// redirecting https traffic from heroku to http because the openweathermaps free plan only supports http
// side note - arrow function does not work for the function below -results in type error.
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
   res.redirect('http://' + req.hostname + req.url);
  } else {
     next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});