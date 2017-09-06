let fs = require('fs');
fs.readFile('readMeAsy.txt','utf8',function(err, data){
console.log(data);
});

console.log("test");
fs.unlink('text.txt');
