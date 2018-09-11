
const fs = require('fs');
const Guid = require('guid');
const express = require('express');
const bodyParser = require("body-parser");
const Mustache  = require('mustache');
const Request  = require('request');
const Querystring  = require('querystring');
const app = express();

const Client = require('authy-client').Client;
const authy = new Client({key: "WpXpAIepAQPiAzcXqn4qO3OFUcZ8koTn"});
const enums = require('authy-client').enums;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('.'));



function loadLogin() {
  return fs.readFileSync('./js/views/authentification/register.html').toString();
}
function loadConfirmCode() {
  return fs.readFileSync('./js/views/authentification/numberVerification.html').toString();
}


app.get('/register', function(request, response){

  var html = Mustache.to_html(loadLogin());
  response.send(html);
});

app.post('/send_code',function(request,response){
  response.set("Access-Control-Allow-Origin","*");
  var body = request.body;
  authy.startPhoneVerification({ countryCode: body["country_code"], locale:"fr" , phone: body["phone_number"], via: "sms" }, function(err, res) {
  if (err) throw err;
  var html = Mustache.to_html(loadConfirmCode());
  response.send(html);
});
});
    
app.listen(8080);
console.log("Server listen on 8080");


