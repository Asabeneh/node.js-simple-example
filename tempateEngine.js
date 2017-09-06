var express = require('express');


var app = express();
app.set('view engine','ejs');

app.get('/',function(req, res){
  res.render('index');
});
app.get('/contact',function(req, res){
  res.render('contact');
});
app.get('/skill',function(req, res){
  res.render('skill');
});
app.get('/profile/:name',function(req, res){
  var data = {
     age:29,
     job:'ninja',
     hobbies:['eating','fighting','fishing']
   };
  res.render('profile',{person:req.params.name,data:data});
});

app.listen(3000);
console.log("The server is running!");
