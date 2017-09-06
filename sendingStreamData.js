
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type':'text/plain'});

  var myReadStream = fs.createReadStream(__dirname + '/readMe1.txt','utf8');

  myReadStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('yo dwondgs, now listening to port 3000');
