// let fs = require('fs');
// let stuff = require ('./modules');
// console.log(stuff.counter(['Asabeneh','Eyob','Fiker']));
// console.log(stuff.pi);
// console.log(stuff.adder(stuff.pi,5));
var express = require('express');


var app = express();
app.set('view engine','ejs');

app.listen(3000);
console.log("The server is running!");
