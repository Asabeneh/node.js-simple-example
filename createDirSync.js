let fs = require('fs');
fs.mkdirSync('myFirstApp');

setInterval(function(){
  fs.rmdirSync('myFirstApp');
}, 5000);
