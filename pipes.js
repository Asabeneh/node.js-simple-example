var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf8');
var myWriteStream =fs.createWriteStream(__dirname +'/writeMepipe.txt');
myReadStream.pipe(myWriteStream);
