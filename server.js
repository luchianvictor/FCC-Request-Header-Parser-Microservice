// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.redirect('/api/whoami');
  // response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  var userData = {
    'ip-address' : request.headers['x-forwarded-for'].split(',')[0],
    'language' : request.headers['accept-language'].slice(0,2),
    'software' : request.headers['user-agent'].slice(13,46)
  }
  response.json(userData);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
