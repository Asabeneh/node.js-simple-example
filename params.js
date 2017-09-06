var express = require('express');


var app = express();
app.get('/',function(req, res){
  res.send('this is the home page');
});
app.get('/contact',function(req, res){
  res.send('this is the contact page');
});
app.get('/profile/:id',function(req, res){
  res.send('You are requested to see a profile with the id of ' +req.params.id);
});
app.listen(3000);
console.log("The server is running!");
